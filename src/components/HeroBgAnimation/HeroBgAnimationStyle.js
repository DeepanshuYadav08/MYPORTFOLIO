import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-30px) translateX(20px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`;

export const Div = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;

export const Orb = styled.div`
  position: absolute;
  width: ${({ size }) => size || "300px"};
  height: ${({ size }) => size || "300px"};
  border-radius: 50%;
  background: ${({ color }) => color};
  filter: blur(80px);
  opacity: 0.4;
  animation: ${float} ${({ duration }) => duration || "12s"} ease-in-out infinite;
`;
