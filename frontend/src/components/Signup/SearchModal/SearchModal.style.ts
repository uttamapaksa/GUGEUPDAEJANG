import styled from 'styled-components';

export const modalStyle: any = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 10,
  },
  content: {
    display: 'flex',
    flexDirextion: 'column',
    backgroundColor: 'rgba(255 ,255,255,0.95)',
    zIndex: 10,
    overflow: 'auto',
    margin: 'auto',
    width: '40vh',
    height: '60vh',
    border: '5px solid white', 
    borderRadius: '20px',
  },
};