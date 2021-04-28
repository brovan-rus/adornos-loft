import "./pages/index.css";
const mediaQueryList = window.matchMedia("only screen and (min-width: 649px)");
//import { mediaQueryList } from "./components/constants.js";

pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "./pano.jpg",
  autoLoad: true,
});

// Импортируем класс чата и включаем его при в мобильной версии
import Chat from "./components/Chat.js";
const chat = new Chat();
if (!mediaQueryList.matches) {
  chat.enableChat();
}

// Импортируем класс гамбургер меню и включаем его в мобильной версии
import HamburgerMenu from "./components/Hamburger.js";
const hamburgerMenu = new HamburgerMenu();
if (!mediaQueryList.matches) {
  hamburgerMenu.enableHamburgerMenu();
}
