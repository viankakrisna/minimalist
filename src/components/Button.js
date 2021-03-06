import { button } from '../lib/elements';
import styled from '../lib/styled';
export default styled(function Button({ className, children, ...props }) {
  return button({ className, ...props }, children);
})`
& {
  background: ${props => props.bg};
  color: ${props => props.color || 'white'};
  box-sizing: border-box;
  border-color: transparent;
  transition: 250ms;
  cursor: pointer;
  padding: 0.5em 1em;
  font-size: ${props => {
  switch (true) {
    case props.small:
      return '0.7em';
    default:
      return '1em';
  }
}};
  line-height: 1em;
  width: ${props => props.block ? '100%' : 'auto'};
  display: ${props => props.block ? 'block' : 'inline-block'};
  text-transform: uppercase;
  border-radius: 2px;
  margin-bottom: 1em;
}
&:after {
}
&:hover {
  opacity: 0.7;
}
&:active {
  outline: none;
}
&[disabled] {
  opacity: 0.5;
  pointer-events: none;
}
`;
