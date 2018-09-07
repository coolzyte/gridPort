// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(progress, {
  strokeWidth: 4,
  easing: "easeInOut",
  duration: 2400,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,

  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + " %");
  }
});

bar.animate(0.9); // Number from 0.0 to 1.0
