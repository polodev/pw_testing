export default class FontChange {
  init () {
    this.domCached()
    this.bindEvents()
    this.settingFontOnPageLoad()
  }
  settingFontOnPageLoad () {
    if (localStorage.getItem("fontsize")) {
      let fontsize = localStorage.getItem("fontsize");
      document.body.classList.add(fontsize)
      switch (fontsize) {
        case 'large-font':
          this.settingActiveClass(this.largeFontSelector)
          break;
        case 'small-font':
          this.settingActiveClass(this.smallFontSelector)
          break;
      }
    }
  }
  constructor () {
    this.switchToDefault = this.switchToDefault.bind(this)
    this.switchToLarge = this.switchToLarge.bind(this)
    this.switchToSmall = this.switchToSmall.bind(this)

  }
  domCached () {
    this.defaultFontSelector = document.querySelector('.default-font-selector')
    this.largeFontSelector = document.querySelector('.large-font-selector')
    this.smallFontSelector = document.querySelector('.small-font-selector')
  }

  bindEvents () {
    this.defaultFontSelector.addEventListener('click', this.switchToDefault)
    this.largeFontSelector.addEventListener('click', this.switchToLarge)
    this.smallFontSelector.addEventListener('click', this.switchToSmall)
  }
  settingActiveClass (activeSelector) {
    this.defaultFontSelector.classList.remove('active')
    this.smallFontSelector.classList.remove('active')
    this.largeFontSelector.classList.remove('active')
    activeSelector.classList.add('active')
  }
  switchToDefault (e) {
    e.preventDefault()
    document.body.classList.remove('large-font')
    document.body.classList.remove('small-font')
    this.settingActiveClass(this.defaultFontSelector)
    localStorage.removeItem("fontsize")
  }
  switchToSmall (e) {
    e.preventDefault();
    document.body.classList.add("small-font");
    document.body.classList.remove("large-font");
    this.settingActiveClass(this.smallFontSelector)
    localStorage.setItem("fontsize", "small-font")
  }
  switchToLarge (e) {
    e.preventDefault();
    document.body.classList.add("large-font");
    document.body.classList.remove("small-font");
    this.settingActiveClass(this.largeFontSelector)
    localStorage.setItem("fontsize", "large-font")
  }


}
