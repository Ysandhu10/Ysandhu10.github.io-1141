/* Scroll reveal fallback for browsers without CSS scroll-driven animations.
   IntersectionObserver only. No scroll listeners, no rAF loops, no layout reads. */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var native = CSS.supports && CSS.supports("animation-timeline: view()");

  // CSS already handles it, or the user opted out of motion.
  if (native || reduce.matches) {
    if (reduce.matches) {
      document.querySelectorAll(".rise").forEach(function (el) { el.classList.add("seen"); });
    }
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("seen");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  document.querySelectorAll(".rise").forEach(function (el) { io.observe(el); });
})();

/* Copy-to-clipboard for the email address. A mailto: link does nothing at all
   when the visitor has no mail client registered, so give them the text. */
(function () {
  "use strict";
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy");
    if (!btn) return;
    e.preventDefault();
    var value = btn.getAttribute("data-copy") || "";
    var label = btn.textContent;

    function done(ok) {
      btn.textContent = ok ? "Copied" : "Press Cmd C";
      btn.setAttribute("data-done", "1");
      setTimeout(function () {
        btn.textContent = label;
        btn.removeAttribute("data-done");
      }, 2000);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(function () { done(true); },
                                               function () { select(); });
    } else {
      select();
    }

    function select() {
      // Fall back to selecting the address so the visitor can copy it manually.
      var target = document.getElementById(btn.getAttribute("data-target"));
      if (!target) return done(false);
      var range = document.createRange();
      range.selectNodeContents(target);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      done(false);
    }
  });
})();
