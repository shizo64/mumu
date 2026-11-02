audio.volume = 0.3;

(function () {
  "use strict";
  var track = document.getElementById("track");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  if (!track || !prev || !next) { return; }

  function step() { return Math.max(track.clientWidth * 0.7, 250); }

  prev.addEventListener("click", function () {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });
  next.addEventListener("click", function () {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });
})();
