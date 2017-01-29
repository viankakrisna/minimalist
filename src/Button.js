import { button } from './elements';
import styled from './styled';
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

