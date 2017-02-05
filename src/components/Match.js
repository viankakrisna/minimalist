import { getState } from '../lib/state';
const Match = props => {
  const show = getState('location').pathname === props.pathname;
  return show ? props.children[0] : null;
};
export default Match;
