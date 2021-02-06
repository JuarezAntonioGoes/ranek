import styled, { keyframes } from "styled-components";

const animationContainer = keyframes`
  from{
    opacity:0;
    transform: translatex(-20px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
  margin-bottom: 2rem;
  animation: ${animationContainer} 0.3s forwards;
`;

export const ProductItem = styled.div`
  width: 20rem;
  height: 30rem;
  box-sizing: border-box;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 80%;
    border-radius: 4px;
  }

  h2 {
    color: #252525;
  }
`;

export const TitleProduct = styled.h1`
  text-transform: uppercase;
  margin: 3rem;
  margin-left: 10%;
`;
