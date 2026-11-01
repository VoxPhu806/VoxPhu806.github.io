import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(defaultProps = null) {
  // Người dùng tắt chuyển động trong hệ điều hành thì bỏ qua hiệu ứng
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const isDesktop = window.innerWidth > 1024
  const isTablet = window.innerWidth > 768

  const targetElements = [
    {
      element: ".banner-text",
      animation: { delay: 500, interval: 200, origin: isTablet ? "left" : "bottom" },
    },
    {
      element: ".banner-cta",
      animation: { delay: 1000, origin: isTablet ? "left" : "bottom" },
    },
    {
      element: ".section-title",
      animation: { delay: 200, distance: "30px", origin: "bottom" },
    },
    {
      element: ".section-content",
      animation: { delay: 400, distance: "30px", origin: "bottom" },
    },
    {
      element: ".reveal-photo",
      animation: { delay: 300, distance: "60px", scale: 0.92, origin: isDesktop ? "left" : "bottom" },
    },
    {
      element: ".reveal-text",
      animation: { delay: 500, distance: "60px", origin: isDesktop ? "right" : "bottom" },
    },
    {
      element: ".reveal-card",
      animation: { delay: 200, interval: 150, distance: "40px", scale: 0.95, origin: "bottom" },
    },
    {
      element: ".reveal-btn",
      animation: { delay: 400, distance: "30px", origin: "bottom" },
    },
    {
      element: ".reveal-icon",
      animation: { delay: 200, interval: 150, distance: "20px", scale: 0.8, origin: "bottom" },
    },
  ];

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}