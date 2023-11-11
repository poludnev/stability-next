import ReactDOM from 'react-dom';
export const Modal = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  if (typeof window === 'object') {
    const containerElement: HTMLElement | null = document?.getElementById('modal-container');
    return containerElement !== null ? ReactDOM.createPortal(children, containerElement) : <></>;
  }
  return <>{children}</>;
};
