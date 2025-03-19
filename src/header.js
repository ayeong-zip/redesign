const list = document.querySelectorAll(".d1");
import { gsap } from "gsap";
const depth = document.querySelectorAll(".d-1");
const text = document.querySelectorAll(".subtitle .text");
const depth_2 = document.querySelectorAll(".d-2");
const sub_title = document.querySelector(".product .subtitle");
const productNew = document.querySelector(".productnew");
const bottom = document.querySelector(".bottom");

list.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    depth.forEach((d) => (d.style.display = "none"));
    depth_2.forEach((d) => (d.style.display = "none"));

    // 448px
    gsap.to(".bottom", { height: 448 });
    depth[i].style.display = "initial";

    if (i === 1) {
      sub_title.style.display = "initial";
    } else {
      sub_title.style.display = "none";
    }
  });

  li.addEventListener("mouseleave", () => {});
});

text.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    depth_2.forEach((d) => (d.style.display = "none"));

    productNew.style.display = "none";
    depth_2[i].style.display = "initial";
  });

  li.addEventListener("mouseleave", () => {});
});

bottom.addEventListener("mouseleave", () => {
  depth.forEach((d) => (d.style.display = "none"));
  depth_2.forEach((d) => (d.style.display = "none"));
  gsap.to(".bottom", { height: 0 });
});
