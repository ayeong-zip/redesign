const list = document.querySelectorAll(".d1");
const depth = document.querySelectorAll(".d-1");
const text = document.querySelectorAll(".subtitle .text");
const depth_2 = document.querySelectorAll(".d-2");

list.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    depth.forEach((d) => (d.style.display = "none"));

    depth[i].style.display = "initial";
  });

  li.addEventListener("mouseleave", () => {});
});

console.log(depth_2);

text.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    depth_2.forEach((d) => (d.style.display = "none"));

    depth_2[i].style.display = "initial";
  });

  li.addEventListener("mouseleave", () => {});
});
