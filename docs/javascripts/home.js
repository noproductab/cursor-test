document$.subscribe(function () {
  var hero = document.querySelector(".nl-hero");
  if (!hero) return;

  // Soft parallax on the ridge layers for a bit of presence.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ridges = hero.querySelectorAll(".nl-hero__ridge");
  var onMove = function (event) {
    var rect = hero.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width - 0.5;
    var y = (event.clientY - rect.top) / rect.height - 0.5;
    ridges.forEach(function (ridge, index) {
      var depth = (index + 1) * 4;
      ridge.style.translate = depth * x + "px " + depth * y * 0.4 + "px";
    });
  };

  hero.addEventListener("pointermove", onMove, { passive: true });
});
