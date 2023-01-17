function changeOuterLinks() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((item) => {
    if (item.innerHTML.includes("outer-link")) {
      item.target = "_blank";
      item.innerHTML = `<strong>${item.innerHTML}</strong>`;
    }
  });
  const nav = document.querySelector("nav");
  nav.style.display = "flex";
  nav.style.flexDirection = "column";
  nav.style.width = "30%";
  nav.style.margin = "0 auto";
  nav.style.border = "solid blue 1px";
  nav.style.padding = "16px";
}
changeOuterLinks();

export { changeOuterLinks };

/*
const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  if (link.innerHTML.includes("outer-link")) {
    link.target = "_blank";
    link.innerHTML = `<strong>${link.innerHTML}</strong>`;
  }
});
const nav = document.querySelector("nav");
nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.width = "30%";
nav.style.margin = "0 auto";
nav.style.border = "1px solid blue";
nav.style.padding = "16px";
*/
