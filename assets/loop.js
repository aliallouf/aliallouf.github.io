// Draws the illustrative loop-sensor signal and drives the vehicle across the road once.
(function () {
  const car = document.getElementById("car");
  const trace = document.getElementById("trace");
  const ghost = document.getElementById("trace-ghost");
  const probe = document.getElementById("probe");
  const replay = document.getElementById("replay");

  const LOOP = [420, 540];
  const HALF_CAR = 62;
  const BASELINE = 212;
  const DEPTH = 70;
  const START = 70;
  const END = 890;

  // Signal depends on how much of the loop is covered by the vehicle.
  function level(x) {
    const overlap = Math.max(0, Math.min(x + HALF_CAR, LOOP[1]) - Math.max(x - HALF_CAR, LOOP[0]));
    const share = overlap / (LOOP[1] - LOOP[0]);
    return BASELINE + DEPTH * share * share * (3 - 2 * share);
  }

  function pathUpTo(limit) {
    let d = "M0 " + BASELINE;
    for (let x = 0; x <= limit; x += 4) d += " L" + x + " " + level(x).toFixed(1);
    return d + " L" + limit.toFixed(1) + " " + level(limit).toFixed(1);
  }

  function draw(x) {
    car.setAttribute("transform", "translate(" + x + " 75)");
    trace.setAttribute("d", pathUpTo(x));
    probe.setAttribute("cx", x);
    probe.setAttribute("cy", level(x));
  }

  ghost.setAttribute("d", pathUpTo(960));

  let frame;
  function play() {
    cancelAnimationFrame(frame);
    const began = performance.now();
    function step(now) {
      const t = Math.min(1, Math.max(0, (now - began) / 3800));
      draw(START + (END - START) * t);
      if (t < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
  }

  replay.addEventListener("click", play);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    draw(480);
  } else {
    play();
  }
})();
