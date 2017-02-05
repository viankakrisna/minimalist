import { slideInUp } from './animation';

export function cardMixin(props) {
    return `
    width: 640px;
    max-width: 100%;
    background: white;
    border-radius: 2px;
    padding: 1.5em;
    margin: 1em auto;
    display: block;
    animation: ${slideInUp} 500ms;
    transform-origin: bottom center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  `;
}
