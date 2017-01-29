import { e } from './elements';

//take the exp and props variable, and create a reducer function for that.
function interpolateExpressionReducer(exp, props) {
  //combine the array of css.raw to a string, and invoke any function with props
  return function rawCSSReducer(res, string, i) {
    if (typeof exp[i] === 'function') {
      res += string + exp[i](props);
      return res;
    }
    if (exp[i]) {
      res += string + exp[i];
      return res;
    }
    res += string;
    return res;
  };
}

//styled-components wannabe! take a component
export default function styled(Component) {
  //then create tagged template literal for that component
  return function createStyled(css, ...exp) {
    //return a named function, easier to debug in the stack trace
    return function styledComponent(props) {
      const interpolatedCSS = css.raw.reduce(
        interpolateExpressionReducer(exp, props),
        ''
      );

      //use the component function name, else just use styled prefix
      const className = [
        Component.name || 'styled',
        //generates a unique identifier based on the css string
        hashCode(interpolatedCSS)
      ].join('_');

      renderStyle(className, interpolatedCSS);

      return e(Component, { ...props, className });
    };
  };
}

export function keyframes(css) {
  const interpolated = css.raw.reduce(interpolateExpressionReducer);
  const hash = [ 'keyframes', hashCode(interpolated) ].join('_');
  const style = [ '@keyframes ', hash, '{', interpolated, '}' ].join('');
  renderStyle(hash, style);
  return hash;
}

function renderStyle(className, interpolatedCSS) {
  //only append the style in the head if it's not there
  const styleAppended = document.getElementById(className);
  if (!styleAppended) {
    //create the style node
    const style = document.createElement('style');
    style.innerHTML = interpolatedCSS.replace(/&/g, '.' + className);
    style.id = className;

    //append it!
    document.head.appendChild(style);
  }
}

function hashCode(str) {
  return Math.abs(
    str
      .split('')
      .reduce(
        (res, currentChar) => (res << 6) - res + currentChar.charCodeAt(0),
        0
      )
  );
}

