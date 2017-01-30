import { div, n, input, e, ul, li, img, h1 } from './elements';
import Form from './Form';
import { zoomIn } from './animation';
import { colors } from './theme';
import {
  tumblrSearch,
  tumblrErrorMessage,
  tumblrMessageClear,
  tumblrSearchFormChange
} from './mutators';
import { setState, getState } from './state';
import styled from './styled';
import Button from './Button';

const TumblrMessage = styled(function TumblrMessage({ className }) {
  const m = getState('tumblrMessage');
  if (m.message) {
    setTimeout(
      () => {
        if (getState('tumblrMessage')) {
          setState(tumblrMessageClear());
        }
      },
      1500
    );
  }
  return div({ className }, m.message);
})`
& {
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  transition: 250ms;
  padding: 1em;
  color: white;
    background: ${() => {
  switch (getState('tumblrMessage').type) {
    case 'success':
      return colors.green.shade_700;
    case 'error':
      return colors.red.shade_700;
    default:
      return 'transparent';
  }
}};
  transform: ${() =>
  getState('tumblrMessage').message ? 'translateY(0)' : 'translateY(100%)'};
}
`;

function TumblrForm() {
  return e(
    Form,
    n,
    input({
      placeholder: 'Search Tumblr',
      name: 'query',
      value: getState('tumblrSearchForm').query,
      onInput: event =>
        setState(
          tumblrSearchFormChange({ [event.target.name]: event.target.value })
        )
    }),
    e(
      Button,
      {
        bg: colors.blue.shade_700,
        onClick: event =>
          getState('tumblrSearchForm')
            ? setState(tumblrSearch(getState('tumblrSearchForm')))
            : setState(tumblrErrorMessage('You need to input your tumblr!'))
      },
      'Search Tumblr'
    )
  );
}

const TumblrList = styled(function TumblrList({ className }) {
  return ul(
    { className },
    getState('tumblrList').map(
      tumblr =>
        li(
          { key: tumblr.id },
          div(
            n,
            tumblr.photos
              ? img({ src: tumblr.photos[0].original_size.url })
              : null,
            tumblr.body
          )
        )
    )
  );
})`
  & button {
      float: right;
    }
  & li {
    transform-origin: left top;
    animation: ${zoomIn} 250ms;
  }
  & li:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const Tumblr = props =>
  div(
    { className: 'page' },
    div({ className: 'page-header' }, h1(n, 'Tumblr Example')),
    div({ className: 'page-content' }, e(TumblrForm), e(TumblrList)),
    e(TumblrMessage)
  );

export default Tumblr;

