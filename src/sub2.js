import "../lib/smooth";
import { markers } from "../lib/smooth";
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  defaults: { duration: 10, ease: "linear", repeat: -1 },
});

tl.to(".front", { x: -700 });
tl.set(".front", { x: innerWidth });
tl.to(".front", { duration: 7, x: -700 });



const tl2 = gsap.timeline({
  defaults: { duration: 3, ease: "linear", repeat: -1 },
});

tl2.to(".topimg", { x: -1400 });
tl2.set(".topimg", { x: innerWidth });
tl2.to(".topimg", { duration: 7, x: -1400 });





markers();
