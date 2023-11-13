import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  height?: string;
  width?: string;
  top? : string;
  color?: string;
}

const rotate = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

export const SpinnerWrapper = styled.div<SpinnerProps>`
  /* border: 1px solid red; */
  position: fixed;
  top : ${props => props.top};
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "100px"};
  display: inline-block;
  overflow: hidden;
`;

export const SpinnerInner = styled.div<SpinnerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  div {
    left: 50%;
    top: 25%;
    position: absolute;
    animation: ${rotate} linear 1s infinite;
    background: ${props => props.color || '#000000'};
    border-radius: 2vh / 2.08vh;
    width: ${props => props.width ? `${(parseInt(props.width) * 4) / 150}vh` : "4vh"};
    height: ${props => props.height ? `${(parseInt(props.height) * 16) / 150}vh` : "16vh"};
    transform-origin: ${props => props.width ? `${(parseInt(props.width) * 2) / 150}vh` : "2vh"} ${props => props.height ?  `${(parseInt(props.height) * 42) / 150}vh` : "42vh"};
  

    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.9333333333333333s;
    }
    &:nth-child(2) {
      transform: rotate(24deg);
      animation-delay: -0.8666666666666667s;
    }
    &:nth-child(3) {
      transform: rotate(48deg);
      animation-delay: -0.8s;
    }
    &:nth-child(4) {
      transform: rotate(72deg);
      animation-delay: -0.7333333333333333s;
    }
    &:nth-child(5) {
      transform: rotate(96deg);
      animation-delay: -0.6666666666666666s;
    }
    &:nth-child(6) {
      transform: rotate(120deg);
      animation-delay: -0.6s;
    }
    &:nth-child(7) {
      transform: rotate(144deg);
      animation-delay: -0.5333333333333333s;
    }
    &:nth-child(8) {
      transform: rotate(168deg);
      animation-delay: -0.4666666666666667s;
    }
    &:nth-child(9) {
      transform: rotate(192deg);
      animation-delay: -0.4s;
    }
    &:nth-child(10) {
      transform: rotate(216deg);
      animation-delay: -0.3333333333333333s;
    }
    &:nth-child(11) {
      transform: rotate(240deg);
      animation-delay: -0.26666666666666666s;
    }
    &:nth-child(12) {
      transform: rotate(264deg);
      animation-delay: -0.2s;
    }
    &:nth-child(13) {
      transform: rotate(288deg);
      animation-delay: -0.13333333333333333s;
    }
    &:nth-child(14) {
      transform: rotate(312deg);
      animation-delay: -0.06666666666666667s;
    }
    &:nth-child(15) {
      transform: rotate(336deg);
      animation-delay: 0s;
    }
  }
`;