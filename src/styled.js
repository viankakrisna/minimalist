import {e} from './elements'

function createRawCSSReducer(exp, props){
  return function rawCSSReducer(res, string, i){
    if (typeof exp[i] === 'function'){
      res += string + exp[i](props)
      return res
    } 
    res += string
    return res
  }
}

export default function styled(Component){
  return function createStyled(css, ...exp){
    return function styledComponent(props){
      const interpolatedCSS = css.raw.reduce(createRawCSSReducer(exp, props), '')
      const className = [(Component.name || 'styled'), hashCode(interpolatedCSS)].join('_')
      const styleAppended = document.getElementById(className)
      const style = document.createElement('style')
      style.innerHTML = interpolatedCSS.replace(/\&/g, '.'+className)
      style.id = className
    
      if (!styleAppended){
        document.head.appendChild(style)
      }
      return e(Component, {
        ...props,
        className
      })
    }
  }
}

function hashCode(str) {
  return Math.abs(str.split('').reduce((res, currentChar) =>
    ((res << 6) - res) + currentChar.charCodeAt(0), 0));
}