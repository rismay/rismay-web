(function (root) {

  var RismayLogo = root.RismayLogo = (root.RismayLogo || {});

  var Logo = RismayLogo.Logo = function (svg_element) {
    this.svg = d3.select(svg_element);

    this.svg.attr({
        "width": 35,
        "height": 73
    });

    this.anchor = this.svg.append("a").attr({
      "xlink:href":"/"
    });

    this.$svg = $(svg_element)[0];

    //r
    this.anchor.append("path").attr({
      class: "logo",
      id: "rpath",
      d:"M 22.85, 32.27 L 36.11, 54.52 L 27.84, 54.52 L 15.33, 32.82 L 12.49, 32.82 L 9.83, 54.52 L 2, 54.52 L 8.49, 1.75 L 18.85, 1.75 C 22.22, 1.75 24.9, 2.06 26.88, 2.67 C 28.84, 3.24 30.55, 4.29 32.01, 5.82 C 34.77, 8.64 36.15, 12.29 36.15, 16.75 C 36.15, 24.94 31.71, 30.11 22.85, 32.27 M 15.4, 9.03 L 13.35, 25.98 L 16.94, 25.98 C 19.58, 25.98 21.55, 25.73 22.85, 25.23 C 24.24, 24.73 25.4, 23.88 26.34, 22.67 C 27.61, 20.98 28.25, 19 28.25, 16.72 C 28.25, 14.05 27.48, 12.11 25.94, 10.88 C 24.4, 9.65 21.98, 9.03 18.68, 9.03 L 15.4, 9.03",
      "stroke-width": "3.0",
      "stroke-linecap": "round",
      stroke: "black",
      fill: ColorPalette.color(ColorPalette.Gradient.WHITE, 0, 1, false)
    });

    this.anchor.append("path").attr({
      id: "big",
      class: "logo",
      d:"M 29.44, 40.5 L 35.77, 51.13 L 47.39, 48.32 L 39.67, 57.66 L 46.04, 68.27 L 34.94, 63.41 L 27.26, 72.78 L 28.11, 60.44 L 17, 55.62 L 28.63, 52.85 L 29.44, 40.5",

    });

    this.anchor.append("path").attr({ class: "logo",
      id: "small",
      d:"M 31.6, 49.75 L 34.47, 54.59 L 39.71, 53.32 L 36.23, 57.56 L 39.11, 62.39 L 34.1, 60.17 L 30.64, 64.42 L 31.02, 58.81 L 26, 56.61 L 31.24, 55.36 L 31.6, 49.75",
      fill: ColorPalette.color(ColorPalette.Gradient.WHITE, 0, 1, false)
    });

    this.scale();
    // this.spin();
  }

  Logo.prototype.scale = function scale() {
    this.svgWidth = this.$svg.getBoundingClientRect().width;
    // this.scaleFactor = this.svgWidth / (this.radius + this.rightCircleX + 5);
    //this.svg.attr("height", 73 * 1); //this.scaleFactor);
    // d3.selectAll(".logo").attr("transform", "scale( "+ this.scaleFactor + ")");
  }

  Logo.prototype.dynamic = function () {
    d3.select(window).on('resize', this.scale.bind(this));
    return this;
  }

  Logo.prototype.spin = function () {
    var that = this;
    var svg = d3.selectAll("#rpath").each(repeat);

    function repeat() {
      d3.select(this)
      .transition()
      .duration(2250)
      .attr("transform", "rotate(0)")
      .transition()
      .attr("transform", "rotate(90)")
      .ease('sine')
      .each("end", repeat);
    }

    return this;
  }

}(this));
