/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hsl-to-rgb-for-reals";
exports.ids = ["vendor-chunks/hsl-to-rgb-for-reals"];
exports.modules = {

/***/ "(ssr)/./node_modules/hsl-to-rgb-for-reals/converter.js":
/*!********************************************************!*\
  !*** ./node_modules/hsl-to-rgb-for-reals/converter.js ***!
  \********************************************************/
/***/ ((module) => {

eval("// expected hue range: [0, 360)\n// expected saturation range: [0, 1]\n// expected lightness range: [0, 1]\nvar hslToRgb = function(hue, saturation, lightness){\n  // based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB\n  if( hue == undefined ){\n    return [0, 0, 0];\n  }\n\n  var chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation;\n  var huePrime = hue / 60;\n  var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));\n\n  huePrime = Math.floor(huePrime);\n  var red;\n  var green;\n  var blue;\n\n  if( huePrime === 0 ){\n    red = chroma;\n    green = secondComponent;\n    blue = 0;\n  }else if( huePrime === 1 ){\n    red = secondComponent;\n    green = chroma;\n    blue = 0;\n  }else if( huePrime === 2 ){\n    red = 0;\n    green = chroma;\n    blue = secondComponent;\n  }else if( huePrime === 3 ){\n    red = 0;\n    green = secondComponent;\n    blue = chroma;\n  }else if( huePrime === 4 ){\n    red = secondComponent;\n    green = 0;\n    blue = chroma;\n  }else if( huePrime === 5 ){\n    red = chroma;\n    green = 0;\n    blue = secondComponent;\n  }\n\n  var lightnessAdjustment = lightness - (chroma / 2);\n  red += lightnessAdjustment;\n  green += lightnessAdjustment;\n  blue += lightnessAdjustment;\n\n  return [\n      Math.abs(Math.round(red * 255)),\n      Math.abs(Math.round(green * 255)),\n      Math.abs(Math.round(blue * 255))\n  ];\n\n};\n\nmodule.exports = hslToRgb;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHNsLXRvLXJnYi1mb3ItcmVhbHMvY29udmVydGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3Blbi1yZXN1bWUvLi9ub2RlX21vZHVsZXMvaHNsLXRvLXJnYi1mb3ItcmVhbHMvY29udmVydGVyLmpzPzVlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwZWN0ZWQgaHVlIHJhbmdlOiBbMCwgMzYwKVxuLy8gZXhwZWN0ZWQgc2F0dXJhdGlvbiByYW5nZTogWzAsIDFdXG4vLyBleHBlY3RlZCBsaWdodG5lc3MgcmFuZ2U6IFswLCAxXVxudmFyIGhzbFRvUmdiID0gZnVuY3Rpb24oaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3Mpe1xuICAvLyBiYXNlZCBvbiBhbGdvcml0aG0gZnJvbSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWI0NvbnZlcnRpbmdfdG9fUkdCXG4gIGlmKCBodWUgPT0gdW5kZWZpbmVkICl7XG4gICAgcmV0dXJuIFswLCAwLCAwXTtcbiAgfVxuXG4gIHZhciBjaHJvbWEgPSAoMSAtIE1hdGguYWJzKCgyICogbGlnaHRuZXNzKSAtIDEpKSAqIHNhdHVyYXRpb247XG4gIHZhciBodWVQcmltZSA9IGh1ZSAvIDYwO1xuICB2YXIgc2Vjb25kQ29tcG9uZW50ID0gY2hyb21hICogKDEgLSBNYXRoLmFicygoaHVlUHJpbWUgJSAyKSAtIDEpKTtcblxuICBodWVQcmltZSA9IE1hdGguZmxvb3IoaHVlUHJpbWUpO1xuICB2YXIgcmVkO1xuICB2YXIgZ3JlZW47XG4gIHZhciBibHVlO1xuXG4gIGlmKCBodWVQcmltZSA9PT0gMCApe1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gMDtcbiAgfWVsc2UgaWYoIGh1ZVByaW1lID09PSAxICl7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gY2hyb21hO1xuICAgIGJsdWUgPSAwO1xuICB9ZWxzZSBpZiggaHVlUHJpbWUgPT09IDIgKXtcbiAgICByZWQgPSAwO1xuICAgIGdyZWVuID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH1lbHNlIGlmKCBodWVQcmltZSA9PT0gMyApe1xuICAgIHJlZCA9IDA7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfWVsc2UgaWYoIGh1ZVByaW1lID09PSA0ICl7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gMDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9ZWxzZSBpZiggaHVlUHJpbWUgPT09IDUgKXtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgZ3JlZW4gPSAwO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH1cblxuICB2YXIgbGlnaHRuZXNzQWRqdXN0bWVudCA9IGxpZ2h0bmVzcyAtIChjaHJvbWEgLyAyKTtcbiAgcmVkICs9IGxpZ2h0bmVzc0FkanVzdG1lbnQ7XG4gIGdyZWVuICs9IGxpZ2h0bmVzc0FkanVzdG1lbnQ7XG4gIGJsdWUgKz0gbGlnaHRuZXNzQWRqdXN0bWVudDtcblxuICByZXR1cm4gW1xuICAgICAgTWF0aC5hYnMoTWF0aC5yb3VuZChyZWQgKiAyNTUpKSxcbiAgICAgIE1hdGguYWJzKE1hdGgucm91bmQoZ3JlZW4gKiAyNTUpKSxcbiAgICAgIE1hdGguYWJzKE1hdGgucm91bmQoYmx1ZSAqIDI1NSkpXG4gIF07XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaHNsVG9SZ2I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hsl-to-rgb-for-reals/converter.js\n");

/***/ })

};
;