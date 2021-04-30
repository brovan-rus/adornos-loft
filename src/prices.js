import "./pages/index.css";
const mediaQueryList = window.matchMedia("only screen and (min-width: 649px)");

// Импортируем класс чата и включаем его при в мобильной версии
import Chat from "./components/Chat.js";
const chat = new Chat();
if (!mediaQueryList.matches) {
  chat.enableChat();
}

// Импортируем класс гамбургер меню и включаем его в мобильной версии
import HamburgerMenu from "./components/Hamburger.js";
import { Email } from "./components/smtp";
const hamburgerMenu = new HamburgerMenu();
if (!mediaQueryList.matches) {
  hamburgerMenu.enableHamburgerMenu();
}
