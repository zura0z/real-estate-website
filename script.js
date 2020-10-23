const toggle = () => {
  document.getElementById("burger-menu").classList.toggle("hide");
  if (document.getElementById("burger-menu").classList[0] === "hide") {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  } else document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

document.getElementById("burger").onclick = toggle;
