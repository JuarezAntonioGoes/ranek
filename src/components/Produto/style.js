import styled, { keyframes } from "styled-components";

const animationLoading = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  position: fixed;
  left: calc(50% - 2rem);
  top: calc(50% - 2rem);
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 15px solid #616161;
  border-bottom: 15px solid transparent;
  animation: ${animationLoading} 0.5s linear infinite;
`;

export const Titulo = styled.h1`
  margin: 1rem 3rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ListagemImage = styled.li`
  list-style: none;

  img {
    border-radius: 4px;
    width: 20rem;
  }
`;

export const ContainerPreco = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: #00e676;
    transition: 0.3s;

    &:hover {
      background-color: #00c180;
    }
  }

  p {
    font-size: 1.5rem;

    span {
      color: #1b5e20;
    }
  }
`;
