export default class Navbar {
  init(){
    this.domCached();
    this.bindEvents();
  }
  constructor() {
    this.toggleNavMenu = this.toggleNavMenu.bind(this)
  }
  domCached() {
    this.burger = document.getElementById('burger')
    this.navMenu = document.querySelector('ul.nav-menu')
  }
  bindEvents () {
    this.burger.addEventListener('click', this.toggleNavMenu)
  }
  toggleNavMenu () {
    if (this.navMenu.classList.contains('d-none')) {
      this.navMenu.classList.remove('d-none')
      this.navMenu.classList.add('d-block')
    }else {
      this.navMenu.classList.remove('d-block')
      this.navMenu.classList.add('d-none')
    }
  }
}