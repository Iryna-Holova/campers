import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import Overlay from './Overlay/Overlay';
import Footer from './Footer/Footer';

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer /> <Overlay />
    </Suspense>
  );
};

export default SharedLayout;
