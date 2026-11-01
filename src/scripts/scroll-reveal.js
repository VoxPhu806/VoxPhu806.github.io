import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(defaultProps = null) {
  const isDesktop = window.innerWidth > 768

  const targetElements = [
    {
      element: ".banner-text",
      animation: { delay: 700, origin: isDesktop ? "left" : "bottom" },
    },
    {
      element: ".banner-cta",
      animation: { delay: 1000, origin: isDesktop ? "left" : "bottom" },
    },
    {
      element: ".section-title",
      animation: { delay: 300, distance: "0px", origin: "bottom" },
    },
    {
      element: ".section-content",
      animation: { delay: 500, distance: "0px", origin: "bottom" },
    },
    {
      element: ".reveal-left",
      animation: { delay: 300, distance: "80px", origin: "left" },
    },
    {
      element: ".reveal-right",
      animation: { delay: 500, distance: "80px", origin: "right" },
    },
  ];

  ScrollReveal({
    reset: false,
    duration: 900,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}