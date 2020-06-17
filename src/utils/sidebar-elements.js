import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Articles from '../views/articles/Articles';
import Users from '../views/users/Users';

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
  },
];
