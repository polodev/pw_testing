export default class TopScroll {
  init () {
    this.domCached()
    this.bindEvents();
  }
  constructor () {
    this.showTopButtonNProgress = this.showTopButtonNProgress.bind(this)
    this.init();
  }
  domCached () {
    this.topBtn = document.querySelector(".top");
    this.de = document.documentElement
    this.bd   = document.body
    this.progress = document.querySelector('.progress')
  }
  bindEvents () {
    if (this.topBtn) {
      this.topBtn.addEventListener('click', () => window.scrollTo(0, 0))
    }
    document.addEventListener('scroll', this.showTopButtonNProgress, {passive: true})
  }
  debug () {
    console.log('this.de.scrollTop', this.de.scrollTop)
    console.log('this.bd.scrollTop', this.bd.scrollTop)
    console.log('this.de.scrollHeight', this.de.scrollHeight)
    console.log('this.bd.scrollHeight', this.bd.scrollHeight)
    console.log('this.de.clientHeight', this.de.clientHeight)
  }
  showTopButtonNProgress () {
      let scroll = (this.de.scrollTop || this.bd.scrollTop) /
                    ( (this.de.scrollHeight || this.bd.scrollHeight) - this.de.clientHeight ) * 100;

      this.progress.style.setProperty("--scroll", `${scroll}%`);

      if (this.topBtn && !this.topBtn.classList.contains("top-active") && window.scrollY >= 1500 ) {
        this.topBtn.classList.add("top-active");
      } else if (this.topBtn && this.topBtn.classList.contains("top-active") && window.scrollY < 1500) {
          this.topBtn.classList.remove("top-active");
      }
  }
}
