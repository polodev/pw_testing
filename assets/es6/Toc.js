export default class Toc {
  init()
  {
    this.domCached()
    this.bindEvents()
  }

  constructor ()
  {
    this.toggleContent = this.toggleContent.bind(this)
    this.init()
  }

  domCached ()
  {
    this.tocSpan = document.getElementById('toc_toggle_span')
    this.tocContent = document.getElementById('toc_content')
  }
  toggleContent ()
  {
    if (this.tocContent.classList.contains('d-none')) {
      this.tocContent.classList.remove('d-none')
      this.tocSpan.innerText = '[Hide]'
    } else {
      this.tocContent.classList.add('d-none')
      this.tocSpan.innerText = '[Show]'
    }
  }
  bindEvents ()
  {
    if (this.tocSpan)
    {
      this.tocSpan.addEventListener('click', this.toggleContent);
    }
  }

}
