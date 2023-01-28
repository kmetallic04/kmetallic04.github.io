const navigation = document.querySelector(".header_nav > .header > nav");
const headerContainer = document.querySelector(".header_nav > .header > .container")
const mobileNav = document.querySelector(".header_nav > .header > .menu_button");

navBottom = navigation.offsetTop + navigation.offsetHeight;
headerContainerBottom = headerContainer.offsetTop + headerContainer.offsetHeight;

function onScroll() {
  if (window.innerWidth > 1000) {
    if (window.pageYOffset > navBottom && window.innerWidth > 1000) {
      navigation.setAttribute("style", "position: fixed; background-color: #0a0541;");
      headerContainer.setAttribute("style", "padding: 10% 0 5% 0;");
    } else {
      navigation.setAttribute("style", "position: static; background-color: none;");
      headerContainer.setAttribute("style", "padding: 5% 0 5% 0;");
    }
  }
}

function mobileNavOnClick() {
  console.log(navigation.getAttribute('expanded'));
  if (window.innerWidth <= 1000) {
    if (navigation.getAttribute('expanded') == "false") {
      navigation.setAttribute("style", "transform: translateX(0);");
      navigation.setAttribute("expanded", "true");
      mobileNav.setAttribute("style", "background-image: url('./close.svg');");
    } else {
      navigation.setAttribute("style", "transform: translateX(100%)");
      navigation.setAttribute("expanded", "false");
      mobileNav.setAttribute("style", "background-image: url('./menu.svg');");
    }
  }
}

function onResize() {
  if (window.innerWidth <= 1000) {
    navigation.setAttribute("style", "position: fixed; transform: translateX(100%);");
  } else {
    navigation.setAttribute("style", "position: static; transform: translateX(0);");
  }
}

window.onscroll = onScroll
window.addEventListener("resize", onResize);
mobileNav.onclick = mobileNavOnClick
