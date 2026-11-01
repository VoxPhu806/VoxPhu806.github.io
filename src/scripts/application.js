import '../css/style.css'
import initScrollReveal from './scroll-reveal'
import initNavbar from './navbar'

initNavbar()

initScrollReveal({
  duration: 1000,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  distance: '40px',
  viewFactor: 0.2,
})