import {
  BiHomeAlt2,
  BiCodeAlt,
  BiMusic,
  BiPodcast,
  BiJoystick,
  BiDumbbell,
} from "react-icons/bi";
import { PiGraduationCapLight, PiMonitorLight, PiDressLight } from "react-icons/pi";
import { CgLivePhoto } from "react-icons/cg";

export const categories = [
  { title: "New", icon: <BiHomeAlt2 /> },
  { title: "JS Mastery", icon: <BiCodeAlt /> },
  { title: "Coding", icon: <BiCodeAlt /> },
  { title: "Music", icon: <BiMusic /> },
  { title: "Education", icon: <PiGraduationCapLight /> },
  { title: "Podcast", icon: <BiPodcast /> },
  { title: "Movie", icon: <PiMonitorLight /> },
  { title: "Gaming", icon: <BiJoystick /> },
  { title: "Live", icon: <CgLivePhoto /> },
  { title: "Sport", icon: <BiDumbbell /> },
  { title: "Fashion", icon: <PiDressLight /> },
];
