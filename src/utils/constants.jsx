import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "Home",
    icon: <AiFillHome />, 
    path: "/" },
  {
    name: "Trends",
    icon: <MdLocalFireDepartment />,
    path: "Trends",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    path: "Music",
  },
  { name: "Movies", 
    icon: <FiFilm />, 
    path: "Movies" 
},
  { name: "Live", 
    icon: <MdLiveTv />, 
    path: "Live" 
},
  {
    name: "Game",
    icon: <IoGameControllerSharp />,
    path: "Game",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    path: "News",
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy />,
    path: "Sports",
  },
  {
    name: "Educational",
    icon: <RiLightbulbLine />,
    path: "Educational",
  },
  {
    name: "Cosmetic",
    icon: <GiEclipse />,
    path: "Cosmetic",
    divider: true,
  },
  { name: "Settings",
    icon: <FiSettings />, 
    type: "menu",
     path: "/" },
  {
    name: "Report",
    icon: <AiOutlineFlag />,
    type: "menu",
    path: "/",
  },
  { name: "Help", 
    icon: <FiHelpCircle />, 
    type: "menu", 
    path: "/" },
  {
    name: "Send Feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
    path: "/",
  },
];