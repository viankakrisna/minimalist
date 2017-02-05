import { keyframes } from './styled';
export const zoomIn = keyframes`
  0% {
    opacity: 0;
    border-radius: 100%;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

