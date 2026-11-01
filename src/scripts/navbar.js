export default function initNavbar() {
  const navbar = document.getElementById('navbar')
  const toggle = document.getElementById('menu-toggle')
  const menu = document.getElementById('mobile-menu')
  const iconOpen = document.getElementById('icon-open')
  const iconClose = document.getElementById('icon-close')
  if (!navbar) return

  // Đổi nền khi cuộn
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Mở / đóng menu mobile
  const setMenu = (open) => {
    menu.classList.toggle('hidden', !open)
    iconOpen.classList.toggle('hidden', open)
    iconClose.classList.toggle('hidden', !open)
    toggle.setAttribute('aria-expanded', String(open))
  }
  toggle.addEventListener('click', () => setMenu(menu.classList.contains('hidden')))
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)))

  // Làm sáng link của section đang xem
  const links = document.querySelectorAll('.nav-link')
  const sections = [...links]
    .map((l) => document.querySelector(l.getAttribute('href')))
    .filter(Boolean)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        links.forEach((l) =>
          l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id)
        )
      })
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  sections.forEach((s) => observer.observe(s))

  // ---------- Hiệu ứng khi bấm ----------

  // 1. Link menu nảy
  links.forEach((link) => {
    link.addEventListener('click', () => {
      link.classList.remove('pop')
      void link.offsetWidth
      link.classList.add('pop')
    })
    link.addEventListener('animationend', () => link.classList.remove('pop'))
  })

  // 2. Gợn sóng cho nút có data-ripple
  document.querySelectorAll('[data-ripple]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const dot = document.createElement('span')
      dot.className = 'ripple-dot'
      dot.style.width = dot.style.height = size + 'px'
      dot.style.left = e.clientX - rect.left - size / 2 + 'px'
      dot.style.top = e.clientY - rect.top - size / 2 + 'px'
      btn.appendChild(dot)
      dot.addEventListener('animationend', () => dot.remove())
    })
  })

  // 3. Tiêu đề section đích phình nhẹ khi cuộn tới
  navbar.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => {
      const target = document.querySelector(a.getAttribute('href'))
      const title = target && target.querySelector('.section-title')
      if (!title) return
      setTimeout(() => {
        title.classList.remove('title-flash')
        void title.offsetWidth
        title.classList.add('title-flash')
      }, 600)
      title.addEventListener('animationend', () => title.classList.remove('title-flash'), { once: true })
    })
  })
}