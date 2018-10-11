export default class ThemeChange {
  init () {
    this.domCached()
    this.bindEvents()
    this.settingThemeOnPageLoad()
    console.log('calling from themechange')
  }
  settingThemeOnPageLoad () {
    if (localStorage.getItem("theme")) {
      var theme = localStorage.getItem("theme");
      document.body.classList.add(theme)
      switch (theme) {
        case 'dark':
          this.settingActiveClass(this.darkThemeSelector)
          break;
        case 'solarized':
          this.settingActiveClass(this.solarizedThemeSelector)
          break;
      }
    }
  }
  constructor () {
    this.switchToLight = this.switchToLight.bind(this)
    this.switchToDark = this.switchToDark.bind(this)
    this.switchToSolarized = this.switchToSolarized.bind(this)

  }
  domCached () {
    this.lightThemeSelector = document.querySelector('.light-theme-selector')
    this.darkThemeSelector = document.querySelector('.dark-theme-selector')
    this.solarizedThemeSelector = document.querySelector('.solarized-theme-selector')
  }

  bindEvents () {
    this.lightThemeSelector.addEventListener('click', this.switchToLight)
    this.darkThemeSelector.addEventListener('click', this.switchToDark)
    this.solarizedThemeSelector.addEventListener('click', this.switchToSolarized)
  }
  settingActiveClass (activeSelector) {
    this.lightThemeSelector.classList.remove('active')
    this.darkThemeSelector.classList.remove('active')
    this.solarizedThemeSelector.classList.remove('active')
    activeSelector.classList.add('active')
  }
  switchToLight (e) {
    e.preventDefault()
    document.body.classList.remove('dark')
    document.body.classList.remove('solarized')
    this.settingActiveClass(this.lightThemeSelector)
    localStorage.removeItem("theme")
  }
  switchToDark (e) {
    e.preventDefault();
    document.body.classList.add("dark");
    document.body.classList.remove("solarized");
    this.settingActiveClass(this.darkThemeSelector)
    localStorage.setItem("theme", "dark")
  }
  switchToSolarized (e) {
    e.preventDefault();
    document.body.classList.add("solarized");
    document.body.classList.remove("dark");
    this.settingActiveClass(this.solarizedThemeSelector)
    localStorage.setItem("theme", "solarized")
  }


}
