import Typography from 'typography';
const typography = new Typography({
  title: 'Bootstrap',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ],
  scaleRatio: 2.25,
  bodyWeight: 400,
  headerWeight: 500,
  boldWeight: 'bold',
  overrideStyles: function overrideStyles(ref, options) {
    var adjustFontSizeTo = ref.adjustFontSizeTo,
      scale = ref.scale,
      rhythm = ref.rhythm;
    return {
      body: { color: (0, grey)(23, 204) },
      h1: scale(4 / 4),
      h2: scale(3 / 4),
      h3: scale(2 / 4),
      h4: scale(1 / 6),
      h5: scale((-1) / 6),
      h6: scale((-2) / 6),
      blockquote: Object.assign({}, scale(1 / 4), {
        borderLeft: rhythm(1 / 6) + ' solid #eceeef',
        paddingTop: rhythm(1 / 3),
        paddingBottom: rhythm(1 / 3),
        paddingLeft: rhythm(2 / 3),
        paddingRight: rhythm(2 / 3)
      }),
      'blockquote > :last-child': { marginBottom: 0 },
      'blockquote cite': Object.assign(
        {},
        adjustFontSizeTo(options.baseFontSize),
        {
          color: (0, grey)(54, 204),
          fontWeight: options.bodyWeight,
          fontStyle: 'normal'
        }
      )
    };
  }
});

export default typography;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function grey(lightness, hue, darkBackground) {
  if (typeof hue === 'undefined') {
    hue = 0;
  }
  if (typeof darkBackground === 'undefined') {
    darkBackground = false;
  }

  // Convert named hues into numeric lightness value.
  if (hue === 'cool') {
    hue = 237;
  } else if (hue === 'slate') {
    hue = 122;
  } else if (hue === 'warm') {
    hue = 69;
  }

  if (!isNumeric(hue)) {
    throw new Error('Hue is not a number');
  }

  if (!isNumeric(lightness)) {
    throw new Error('Lightness is not a number');
  }

  if (lightness > 100) {
    lightness = 100;
  }
  if (lightness < 0) {
    lightness = 0;
  }

  var saturation = 0;
  if (hue !== 0) {
    var a = 19.92978;
    var b = -0.3651759;
    var c = 0.001737214;
    saturation = a + b * lightness + c * Math.pow(lightness, 2);
  }

  var opacity = 0;
  if (darkBackground) {
    opacity = lightness / 100;
    lightness = '100%,';
  } else {
    opacity = (100 - lightness) / 100;
    lightness = '0%,';
  }

  return 'hsla(' + hue + ',' + saturation + '%,' + lightness + opacity + ')';
}

