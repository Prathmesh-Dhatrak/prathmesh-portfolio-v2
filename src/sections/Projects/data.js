import { SecuferLogo, SecuferDashboard } from '../../images/Secufer';
import {
  friendsDriveImageSmall,
  friendsDriveImageLarge,
  friendsDriveLogo
} from '../../images/FriendDrive';
import {
  TowMeterSquareLogo,
  TowMeterSquareMobile
} from '../../images/TowMeterSquare';
import { FriendZone, FriendZoneLogo } from '../../images/FriendZone';
import { Cinemagram, CinemagramLogo } from '../../images/Cinemagram';

const cinemagram = {
  title: 'Cinemagram - Community platform',
  type: 'Collaborated project',
  logo: CinemagramLogo,
  images: {
    light: { small: Cinemagram, large: Cinemagram },
    dark: { small: Cinemagram, large: Cinemagram }
  },
  description:
    'Cinemagram is social media for cinema buffs where people can connect with other movie fans discussing films, movies and TV series.',
  features: [
    'Login and Registration',
    'Notification',
    'Private messaging',
    'Post CRUD functionality',
    'Comment feature',
    'Profile customization',
    'Followers/Following feature',
    'Search feature'
  ],
  techStack: [
    'React/TypeScript',
    'Node',
    'MongoDB',
    'Redux'
  ],
  link: 'https://cinemagram.prathmeshdhatrak.com/',
  repo: 'https://github.com/Prathmesh-Dhatrak/cinemagram'
};

const secufer = {
  title: 'Secufer - Android app',
  type: 'Collaborated project',
  logo: SecuferLogo,
  images: {
    light: { small: SecuferDashboard, large: SecuferDashboard },
    dark: { small: SecuferDashboard, large: SecuferDashboard }
  },
  description:
    'Secufer is a escrow service mobile application for freelancers who want to do safe online transactions with their clients.',
  features: [
    'Login and Registration',
    'User profile customization',
    'Transactions create/accept links',
    'Authenticating transactions',
    'Connecting users on whatsApp'
  ],
  techStack: ['React Native', 'REST API', 'WhatsApp Business API', 'Figma UI'],
  link: 'https://secuferapp-landing.vercel.app/',
  repo: 'https://github.com/secufer/serufer-app'
};

const friendsZone = {
  title: 'Friend Zone - Chat Web Application',
  type: 'Featured project',
  logo: FriendZoneLogo,
  images: {
    light: { small: FriendZone, large: FriendZone },
    dark: { small: FriendZone, large: FriendZone }
  },
  description:
    'A fun and easy to use chat room or workspace where friends can share resources and hang around.',
  features: [
    'Login and Registration with Google',
    'Rooms/Group CRUD functionality',
    'Realtime group messaging',
    'Realtime resources sharing',
    'Emoji reaction on messages'
  ],
  techStack: ['React JS', 'Firebase', 'Material UI', 'React Icons'],
  link: 'https://friends-zone.prathmeshdhatrak.com/',
  repo: 'https://github.com/Prathmesh-Dhatrak/friend-zone'
};

const friendsDrive = {
  title: 'Friend Drive - Resources storing app',
  type: 'Featured project',
  logo: friendsDriveLogo,
  images: {
    light: { small: friendsDriveImageSmall, large: friendsDriveImageLarge },
    dark: { small: friendsDriveImageSmall, large: friendsDriveImageLarge }
  },
  description: 'A fun and easy to use drive space where you can store photos.',
  features: [
    'Easy SignIn with Google',
    'Upload multiple Photos',
    'Create new Album',
    'Delete Photos / Albums',
    'Download Photos'
  ],
  techStack: ['React JS', 'Firebase', 'Material UI', 'Redux'],
  repo: 'https://github.com/Prathmesh-Dhatrak/friend-drive'
};

const towMeterSquare = {
  title: 'Two Meter Square - MERN stack e-commerce website',
  type: 'Collaborated project',
  logo: TowMeterSquareLogo,
  images: {
    light: { small: TowMeterSquareMobile, large: TowMeterSquareMobile },
    dark: { small: TowMeterSquareMobile, large: TowMeterSquareMobile }
  },
  description:
    'The Ecommerce website for TowMeterSquare Shop. Built with React.',
  features: [
    'Search products',
    'User Login and Registration System',
    'Admin Dashboard',
    'Categories CRUD',
    'Payment with Stripe',
    'Star Rating System',
    'Multiple Image Uploads',
    'Products CRUD'
  ],
  techStack: ['React JS', 'Redux', 'Firebase', 'MongoDB'],
  link: 'https://twometersquare.netlify.app/',
  repo: 'https://github.com/Prathmesh-Dhatrak/client'
};

const data = [cinemagram, secufer, friendsZone, towMeterSquare, friendsDrive];
export default data;

