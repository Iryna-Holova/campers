import alcove from '../images/services/alcove.webp';
import alcove2x from '../images/services/alcove@2x.webp';
import fullyIntegrated from '../images/services/fully-integrated.webp';
import fullyIntegrated2x from '../images/services/fully-integrated@2x.webp';
import panelTrack from '../images/services/panel-truck.webp';
import panelTrack2x from '../images/services/panel-truck@2x.webp';

export const PAGES_HEADER = [
  { page: 'Home', path: '/' },
  { page: 'Catalog', path: '/catalog' },
  { page: 'Favorites', path: '/favorites' },
  { page: 'Contacts', path: null },
];

export const PAGES_FOOTER = [
  { page: 'About Us', path: '/' },
  { page: 'Catalog', path: '/catalog' },
  { page: 'Favorites', path: '/favorites' },
];

export const SOCIAL_LINKS = [
  { link: 'https://www.instagram.com/', icon: '#icon-instagram' },
  { link: 'https://www.facebook.com/', icon: '#icon-facebook' },
  { link: 'https://www.youtube.com/', icon: '#icon-youtube' },
];

export const MODALS = {
  menu: 'MobileMenu',
  camper: 'CamperModal',
};

export const CAMPER_MODAL_TABS = ['Features', 'Reviews'];

export const SERVICES_SECTION = [
  {
    title: 'Panel Trucks',
    description:
      'Offer compact and versatile options for adventurers on the go. These nimble campers are easy to maneuver and park, making them ideal for spontaneous road trips and exploring off-the-beaten-path destinations.',
    image: {
      normal: panelTrack,
      retina: panelTrack2x,
    },
    name: 'panelTruck',
  },
  {
    title: 'Fully Integrated',
    description:
      "Feature a seamless design where the living area is integrated with the driver's cab. Enjoy a luxurious and modern camping experience with all the amenities you need on board. Perfect for those seeking a premium travel experience.",
    image: {
      normal: fullyIntegrated,
      retina: fullyIntegrated2x,
    },
    name: 'fullyIntegrated',
  },
  {
    title: 'Alcoves',
    description:
      "Offer a cozy and spacious living area above the driver's cab, providing extra sleeping space. Ideal for families and groups, these campers combine comfort with practicality, making them perfect for longer journeys and outdoor adventures.",
    image: {
      normal: alcove,
      retina: alcove2x,
    },
    name: 'alcove',
  },
];

export const ADVANTAGES_SECTION = [
  {
    title: 'Wide Selection',
    description:
      'Choose from a variety of campers to suit your preferences and group size',
    icon: '#icon-selection',
  },
  {
    title: 'Quality and Safety',
    description:
      'Our campers undergo regular maintenance and safety checks to ensure a worry-free trip',
    icon: '#icon-quality',
  },
  {
    title: 'Convenient Booking',
    description:
      'Easily book online and customize your rental with optional add-ons',
    icon: '#icon-booking',
  },
  {
    title: 'Expert Support',
    description:
      'Our friendly team is here to assist you every step of the way, from planning to on-the-road assistance',
    icon: '#icon-phone',
  },
];
