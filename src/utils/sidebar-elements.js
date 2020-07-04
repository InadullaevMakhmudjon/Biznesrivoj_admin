import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GiftIcon from "@material-ui/icons/AcUnit";
import BookIcon from "@material-ui/icons/Book";
import HistoryIcon from '@material-ui/icons/History';
import Articles from "../views/articles/Articles";
import Users from "../views/users/Users";
import TGGifts from "../views/TGGifts";
import TGBooks from "../views/TGBooks";
import TGUsers from "../views/TGUsers";
import TGOrderHistory from "../views/TGOrderHistory/index.js";

export default [
  {
    name: "Articles",
    path: "/articles",
    Icon: ArtTrackIcon,
    component: Articles,
  },
  {
    name: "Users",
    path: "/users",
    Icon: PeopleAltIcon,
    component: Users,
  },
  {
    name: "TG Users",
    path: "/telegram-users",
    Icon: PeopleAltIcon,
    component: TGUsers,
  },
  {
    name: "TG Gifts",
    path: "/telegram-gifts",
    Icon: GiftIcon,
    component: TGGifts,
  },
  {
    name: "TG Books",
    path: "/telegram-books",
    Icon: BookIcon,
    component: TGBooks,
  },
  {
    name: 'TG Order History',
    path: '/telegram-orders',
    Icon: HistoryIcon,
    component: TGOrderHistory,
  },
];
