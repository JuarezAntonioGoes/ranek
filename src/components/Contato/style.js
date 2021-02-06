import styled, { keyframes } from "styled-components";

const animationContainer = keyframes`
 from{
    opacity: 0;
    transform: translatex(-20px);
 }
 to{
    opacity:initial;
    transform: initial;
 }
`;

export const ContainerContato = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  max-width: 960px;
  margin: 0 auto;
  animation: ${animationContainer} 0.3s forwards;
`;

export const ImageContatoStyle = styled.img`
  width: 100%;
  height: auto;
  grid-column: 1/2;
  border-radius: 4px;
`;

export const Lista = styled.ul`
  padding: 0;

  li {
    list-style: none;
    margin: 1rem 0;
    font-size: 1.1rem;

    a {
      text-decoration: none;
      color: #252525;
      transition: 0.2s;

      &:hover {
        color: #7777;
      }
    }
  }

  li::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 0.2rem;
    background-color: #4a148c;

    margin: 0.2rem 0.4rem;
    border: none;
  }
`;
