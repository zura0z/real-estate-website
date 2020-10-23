const toggle = () => {
  document.getElementById("burger-menu").classList.toggle("hide");
  if (document.getElementById("burger-menu").classList[0] === "hide") {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  } else document.getElementsByTagName("body")[0].style.overflow = "hidden";
};
const resize = () => {
  if (
    window.innerWidth > 850 &&
    document.getElementById("burger-menu").classList[0] !== "hide"
  )
    document.getElementById("burger-menu").classList.toggle("hide");
};

window.onresize = resize;
document.getElementById("burger").onclick = toggle;
