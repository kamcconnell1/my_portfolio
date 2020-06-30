
function init() {

  const title = document.querySelector('#title')
  const subtitle = document.querySelector('#subtitle')
  const blurb = document.querySelector('#blurb')
  const prevSlide = document.querySelectorAll('#prev')
  const nextSlide = document.querySelectorAll('#next')
  const ThemeButton = document.querySelector('#theme-button')

  
  const slideIndex = [1, 1, 1, 1]
  const slideId = ['slides4', 'slides2', 'slides3', 'slides1']
  showSlides(1, 0)
  showSlides(1, 1)
  showSlides(1, 2)
  showSlides(1, 3)


  function titlefade() {
    title.classList.add('title-fade')
    subtitle.classList.add('title-fade')
    blurb.classList.add('title-fade')
  }


  function plusSlides(event) {
    let n
    if (event.target.name === 'next') {
      n = 1
    }
    if (event.target.name === 'prev') {
      n = -1
    }
    const no = event.target.value
    showSlides(slideIndex[no] += n, no)
  }

  function showSlides(n, no) {
    let i
    const x = document.getElementsByClassName(slideId[no])
    if (n > x.length) {
      slideIndex[no] = 1
    }
    if (n < 1) {
      slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    x[slideIndex[no] - 1].style.display = 'block'
  }

  // function initialTheme() {
  //   if (localStorage.getItem('theme') === 'dark') {
  //     setTheme('dark')
  //   } else {
  //     setTheme('light')
  //   }
  // }

  // function setTheme(themeName) {
  //   localStorage.setItem('theme', themeName)
  //   document.body.classList.add('dark')
  // }

  // function toggleTheme() {
  //   if (localStorage.getItem('theme') === 'dark') {
  //     setTheme('light')
  //   } else {
  //     setTheme('dark')
  //   }
  // }

  function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
  }
  
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  (function () {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark')
      document.getElementById('theme-button').checked = false
    } else {
      setTheme('light')
      document.getElementById('theme-button').checked = true
    }
  })()

  window.addEventListener('load', titlefade)
  prevSlide.forEach(button => button.addEventListener('click', plusSlides))
  nextSlide.forEach(button => button.addEventListener('click', plusSlides))
  ThemeButton.addEventListener('change', toggleTheme)
}
window.addEventListener('DOMContentLoaded', init)