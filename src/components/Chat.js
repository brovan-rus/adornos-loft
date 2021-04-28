export default class Chat {
  constructor() {
    this._chatButton = document.querySelector(".chat__open-chat");
    this._chatLinks = document.querySelectorAll(".chat__link");
    this._handleChatOpen = this._handleChatOpen.bind(this);
  }

  _handleChatOpen() {
    this._chatButton.classList.toggle("chat__opened");
    Array.from(this._chatLinks).forEach((link) => {
      link.classList.toggle("chat__link_hidden");
    });
  }

  enableChat() {
    this._chatButton.classList.remove("chat__link_hidden");
    this._chatButton.addEventListener("click", this._handleChatOpen);
  }
}
