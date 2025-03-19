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

const tl0 = gsap.timeline({
  defaults: { ease: "linear", repeat: -1 },
});

tl0.to(".mm", { duration: 5, x: -700 }); // 사라지는거
tl0.set(".mm", { x: innerWidth });
tl0.to(".mm", { duration: 10, x: -700 }); // 들어오는거

// --

const tl1 = gsap.timeline({
  defaults: { ease: "linear", repeat: -1 },
});

tl1.to(".pp", { duration: 5, x: -2000 }); // 사라지는거
tl1.set(".pp", { x: innerWidth });
tl1.to(".pp", { duration: 13, x: -2000 }); // 들어오는거

// const tl = gsap.timeline({
//   defaults: { duration: 13, ease: "linear", repeat: -1 },
// });

// tl.to(".front", { x: -700 });
// tl.set(".front", { x: innerWidth });
// tl.to(".front", { duration: 7, x: -700 });

// const tl2 = gsap.timeline({
//   defaults: { duration: 13, ease: "linear", repeat: -1 },
// });

// tl2.to(".topimg", { x: -1400 });
// tl2.set(".topimg", { x: innerWidth });
// tl2.to(".topimg", { duration: 7, x: -1400 });

// const tl4 = gsap.timeline({
//   defaults: { duration: 13, ease: "linear", repeat: -1 },
// });

// tl4.to(".frontimg", { x: -1400 });
// tl4.set(".frontimg", { x: innerWidth });
// tl4.to(".frontimg", { duration: 7, x: -1400 });

// const tl6 = gsap.timeline({
//   defaults: { duration: 13, ease: "linear", repeat: -1 },
// });

// tl6.to(".img2", { x: -1400 });
// tl6.set(".img2", { x: innerWidth });
// tl6.to(".img2", { duration: 7, x: -1400 });

// const tl5 = gsap.timeline({
//   defaults: { duration: 13, ease: "linear", repeat: -1 },
// });

// tl5.to(".right", { x: -1400 });
// tl5.set(".right", { x: innerWidth });
// tl5.to(".right", { duration: 7, x: -1400 });

markers();
