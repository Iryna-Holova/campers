import { useDispatch, useSelector } from 'react-redux';
import { selectModals } from 'store/selectors';
import { closeModal } from 'store/modal/modal';
import { CAMPER_MODAL_TABS, MODALS } from 'constants/static';
import icons from '../../images/sprite.svg';
import css from './CampersModal.module.css';
import CamperStats from 'components/CampersCommon/CamperStats/CamperStats';
import { useEffect, useRef, useState } from 'react';
import { formatPrice } from 'helpers/format-data';
import CampersFeatures from 'components/CampersCommon/CampersFeatures/CampersFeatures';
import Tabs from './Tabs/Tabs';
import CampersDetails from './CampersDetails/CampersDetails';

const CampersModal = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(selectModals);
  const [activeTab, setActiveTab] = useState(0);
  const [scroll, setScroll] = useState(false);
  const scrollContainerRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const activeElementRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (activeElementRef.current) {
      const activeElementHeight = activeElementRef.current.clientHeight;
      tabsContainerRef.current.style.height = `${activeElementHeight}px`;
      if (scroll) {
        tabsRef.current.scrollIntoView({
          alignToTop: true,
          behavior: 'smooth',
        });
        setScroll(false);
      }
    }
  }, [activeTab, scroll]);

  const handleRatingClick = () => {
    setScroll(true);
    setActiveTab(1);
  };

  const {
    modalTab = 0,
    // _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    AC,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
    // gallery,
    reviews,
  } = isModal[MODALS.camper]?.data ?? {};
  console.log(name);
  useEffect(() => {
    setActiveTab(modalTab);
    if (modalTab) setScroll(true);
  }, [modalTab]);

  return (
    <div
      className={`${css.modal} ${
        isModal[MODALS.camper] ? css.open : css.hidden
      }`}
    >
      <button
        onClick={() => dispatch(closeModal(MODALS.camper))}
        className={css.close}
      >
        <svg width={32} height={32}>
          <use href={icons + '#icon-close'} />
        </svg>
      </button>
      {isModal[MODALS.camper] && (
        <div className={css.wrapper}>
          <div className={css.header}>
            <div className={css.title}>
              <h2 className="card-title">{name}</h2>
              <CamperStats
                onOpenReviews={handleRatingClick}
                rating={rating}
                reviews={reviews.length}
                location={location}
              />
            </div>
            <p className="card-title">{formatPrice(price)}</p>
          </div>
          <div ref={scrollContainerRef} className={css.scroll}>
            {/* <CamperImages images={gallery} /> */}
            <p className={css.description}>{description}</p>
            <Tabs
              tabs={CAMPER_MODAL_TABS}
              tabsRef={tabsRef}
              activeIdx={activeTab}
              onTabClick={setActiveTab}
            />
            <div className={css.bottom}>
              <div ref={tabsContainerRef} className={css.optional}>
                <div
                  ref={activeTab === 0 ? activeElementRef : null}
                  className={`${css.features} ${
                    activeTab === 0 ? '' : css.hidden
                  }`}
                >
                  <CampersFeatures
                    features={{
                      adults,
                      transmission,
                      engine,
                      kitchen,
                      beds,
                      AC,
                      TV,
                      CD,
                      radio,
                      hob,
                      freezer,
                      microwave,
                      shower,
                      toilet,
                      gas,
                      water,
                    }}
                  />
                  <CampersDetails
                    details={{ form, length, width, height, tank, consumption }}
                  />
                </div>
                {/* <CamperReviews
                  activeRef={activeTab === 1 ? activeElementRef : null}
                  isShown={activeTab === 1}
                  reviews={reviews}
                /> */}
              </div>
              {/* <CamperForm id={_id} /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampersModal;
