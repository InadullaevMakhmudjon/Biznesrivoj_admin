import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GiftIcon from '@material-ui/icons/AcUnit';
import BookIcon from '@material-ui/icons/Book';
import Articles from '../views/articles/Articles';
import Users from '../views/users/Users';
import TGGifts from '../views/TGGifts';
import TGBooks from '../views/TGBooks';


export default [
  {
    name: 'Articles',
    path: '/articles',
    Icon: ArtTrackIcon,
    component: Articles,
  },
  {
    name: 'Users',
    path: '/users',
    Icon: PeopleAltIcon,
    component: Users,
  }, {
    name: 'TG Gifts',
    path: '/telegram-gifts',
    Icon: GiftIcon,
    component: TGGifts,
  },
  {
    name: 'TG Books',
    path: '/telegram-books',
    Icon: BookIcon,
    component: TGBooks,
  },
];
