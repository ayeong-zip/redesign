import "../lib/smooth";
import { markers } from "../lib/smooth";
import "./header";
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

/* section01 */

ScrollTrigger.create({
  trigger: ".section01 .aboutus",
  start: "top center",
  end: "center bottom",
  animation: gsap.from(".section01 .aboutus", { x: 10, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
});

ScrollTrigger.create({
  trigger: ".section01 .body .text",
  start: "top center",
  end: "bottom center",
  animation: gsap.from(".section01 .body .text", {
    x: 50,
    opacity: 0,
  }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
});

/* section02 */

ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom bottom",
  animation: gsap.from(".section02 .title", { y: 50, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom center",
  animation: gsap.from(".section02 .text", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom center",
  animation: gsap.from(".section02 .img", { x: 50, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom center",
  animation: gsap.from(".section02 .flex-container .content .left .img", {
    x: 50,
    opacity: 0,
  }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom center",
  animation: gsap.from(".section02 .content .right .explain", {
    y: 50,
    opacity: 0,
  }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

/* section03 */

ScrollTrigger.create({
  trigger: ".section03",
  start: "top center",
  end: "bottom bottom",
  animation: gsap.from(".section03 .content .text", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

/* section04 */
ScrollTrigger.create({
  trigger: ".section04",
  start: "top center",
  end: "center center",
  animation: gsap.from(".section04 .flex-container .center", {
    x: 50,
    opacity: 0,
  }),
  // pin: false,
  // pinSpacing: false,
  scrub: true,
});

/* section05 */

const tl = gsap.timeline();

tl.from(".ani", { stagger: 0.1, y: 30, opacity: 0 });
tl.from(".ani2", { delay: 0.5, stagger: 0.1, y: 30, opacity: 0 });
ScrollTrigger.create({
  trigger: ".section05 .content",
  start: "top center",
  end: "bottom center",
  animation: tl,
  // pin: false,
  // pinSpacing: false,
  markers: true,
  scrub: true,
});

markers();
