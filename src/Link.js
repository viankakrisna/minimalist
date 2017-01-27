import {a,e} from './elements'
import {navigate} from './mutators'
import {getState, setState} from './state'
function Link (props){
  return a({
    className: [props.className, 
        getState().location.pathname === props.to ||
        getState().location.pathname === props.to.pathname
          ? 'active'
          : ''
      ]
      .filter(Boolean)
      .join(' '),
    href: props.to,
    onClick: event =>{ 
      event.preventDefault()
      setState(navigate({
        pathname: props.to
      }))
    },
    ...props
  })
}
export default Link