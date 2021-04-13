export default class Page {
  constructor(contentSelectors) {
    this._pageSelectors = contentSelectors;
  }

  hideContent() {
    this._pageSelectors.forEach((selector) => {
      console.log(document.querySelector(selector));
      document.querySelector(selector).classList.add("hidden");
    });
  }

  showContent() {
    if (this._pageSelectors.left > 1) {
      this._pageSelectors.forEach((selector) => {
        console.log(document.querySelector(selector));
        document.querySelector(selector).classList.remove("hidden");
      });
    } else {
      document.querySelector(this._pageSelectors).classList.remove("hidden");
    }
  }
}
