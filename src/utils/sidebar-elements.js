import DashboardIcon from '@material-ui/icons/Dashboard';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Dashboard from '../views/dashboard/Dashboard';
import Articles from '../views/articles/Articles';
import Settings from '../views/settings/Settings';
import Users from '../views/users/Users';

export default [
  {
    name: 'Dashboard',
    path: '/dashboard',
    Icon: DashboardIcon,
    component: Dashboard,
  },
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
  {
    name: 'Settings',
    path: '/settings',
    Icon: SettingsIcon,
    component: Settings,
  },
];
