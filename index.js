console.log('Spirit of this Machine, heed my will!');

import { Header } from "./Header/script.js";

import { Intro } from "./Intro/script.js";

import { Pose } from "./Pose/script.js";


const contentWrapper = document.querySelector(".app-container");

contentWrapper.innerHTML = Header() + Intro() + Pose();