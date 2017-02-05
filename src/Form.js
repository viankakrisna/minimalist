import { form } from './elements';
import { colors } from './theme';
import styled from './styled';

export default styled(function Form(props) {
  return form({
    ...props,
    onSubmit: event => {
      event.preventDefault();
      if (typeof props.onSubmit === 'function') {
        props.onSubmit();
      }
    }
  });
})`
  & {
    max-width: 100%;
    width: ${props => props.small ? '320px' : '100%'};
    margin-left: auto;
    margin-right: auto;
  }
  & fieldset {
    padding: 1em;
    background: white;
    border-radius: 2px;
    margin-top: 1em;
    border: 0;
    margin-bottom: 0;
  }
  & fieldset > div {
    margin-bottom: 0.5em
  }
  & label {
    display: block;
    margin-bottom: 0.25em;
  }
  & input {
    padding: 0.5em 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
    border: 0;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 0.5em;
  }
  & input:focus {
    outline: none;
    border-bottom: 1px solid ${() => colors.blue.shade_500};
  }

  & fieldset > *:first-child {
    margin-top: 0;
  }
  & [disabled] input,
  & input[disabled]{
    background: transparent;
  }
`;
