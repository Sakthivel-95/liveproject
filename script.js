Draggable.create("#element", {
    type: "x,y",
    bounds: "#container",
    inertia: true,
    snap: {
      x: function (value) {
        return Math.round(value / valueX) * valueX;
      },
      y: function (value) {
        return Math.round(value / valueY) * valueY;
      }
    }
  });
  