import { SecuferLogo, SecuferDashboard } from '../../images/Secufer';
import { friendsDriveImageSmall, friendsDriveImageLarge, friendsDriveLogo } from '../../images/FriendDrive';
import { TowMeterSquareLogo, TowMeterSquareMobile } from '../../images/TowMeterSquare';
import { FriendZone, FriendZoneLogo } from '../../images/FriendZone';

const secufer = {
  title: 'Serufer App',
  type: 'Collaborated project',
  logo: SecuferLogo,
  images: {
    light: { small: SecuferDashboard, large: SecuferDashboard },
    dark: { small: SecuferDashboard, large: SecuferDashboard }
  },
  description:
    'Secufer App is designed for a purpose that there should be a carefree environment while online shopping or transacting with someone who you dont trust much.',
  features: [
    'Authentication system',
    'Creating User Profile',
    'Creating Authenticated Transactions',
    'Creating Request Links',
    'Joining Transactions',
    'Connecting Buyer & Seller'
  ],
  techStack: ['React Native', 'REST API', 'WhatsApp Business API', 'Figma UI'],
  link: 'https://www.figma.com/file/GkOue6CXx6ZqN6go7MoJiV/Secufer?node-id=275%3A182',
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
  description: 'A fun and easy to use Chat Room or workspace where friends can share resources and hang around.',
  features: [
    'Easy SignIn with Google',
    'Create Rooms',
    'Realtime group messaging',
    'Realtime resources sharing',
    'Supports Emoji',
    'Reaction on messages'
  ],
  techStack: ['React JS', 'Firebase', 'Material UI', 'React Icons'],
  link: 'https://friends-zone-12.netlify.app',
  repo: 'https://github.com/Prathmesh-Dhatrak/friend-zone'
};

const friendsDrive = {
  title: 'Firend Drive - Photos Dirve',
  type: 'Featured project',
  logo: friendsDriveLogo,
  images: {
    light: { small: friendsDriveImageSmall, large: friendsDriveImageLarge },
    dark: { small: friendsDriveImageSmall, large: friendsDriveImageLarge }
  },
  description: 'A fun and easy to use Drive space where you can store Photos.',
  features: [
    'Easy SignIn with Google',
    'Upload multiple Photos',
    'Create new Album',
    'Delete Photos / Albums',
    'Download Photos'
  ],
  techStack: ['React JS', 'Firebase', 'Material UI', 'Redux'],
  link: 'https://friend-drive-12.netlify.app/',
  repo: 'https://github.com/Prathmesh-Dhatrak/friend-drive'
};

const towMeterSquare = {
  title: 'Two Meter Square - MERN Stack Ecommers Website',
  type: 'Collaborated project',
  logo: TowMeterSquareLogo,
  images: {
    light: { small: TowMeterSquareMobile, large: TowMeterSquareMobile },
    dark: { small: TowMeterSquareMobile, large: TowMeterSquareMobile }
  },
  description: 'The Ecommers website for TowMeterSquare Shop. Built with React.',
  features: [
    'Search products',
    'User Login and Registration System',
    'Admin Dashboard',
    'Categories CRUD',
    'Sub Categories CRUD',
    'View Placed Orders',
    'Payment with Stripe',
    'Star Rating System',
    'Multiple Image Uploads',
    'Products CRUD'
  ],
  techStack: ['React JS', 'Redux', 'Firebase Authentication', 'MongoDB API', 'Firebase Auth Check', 'Add to Cart'],
  link: 'https://twometersquare.netlify.app/',
  repo: 'https://github.com/Prathmesh-Dhatrak/client'
};

const data = [secufer, friendsZone, towMeterSquare, friendsDrive];
export default data;
