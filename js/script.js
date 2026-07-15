document.getElementById('year').textContent = new Date().getFullYear();

// Click tracking hook: wires into GA4 / Meta Pixel / GTM if present on the page.
// Safe no-op otherwise — add your analytics snippets in index.html <head> to activate.
document.querySelectorAll('a[data-label]').forEach(function (link) {
  link.addEventListener('click', function () {
    var label = link.getAttribute('data-label');
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'link_click', { link_label: label });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'LinkClick', { label: label });
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'link_click', link_label: label });
    }
  });
});
