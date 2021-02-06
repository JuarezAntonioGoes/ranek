import React from "react";
import { useParams } from "react-router-dom";
import { Head } from "../Head";
import {
  Container,
  ContainerPreco,
  ListagemImage,
  Loading,
  Titulo,
} from "./style";

export const Produto = () => {
  const [produto, setProduto] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState("Ranek");

  const params = useParams();

  React.useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    setLoading(true);
    const request = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
    );

    const JSON = await request.json();

    setProduto({ ...JSON });
    setLoading(false);
    setTitle(JSON.id);
  }

  const { nome, fotos = [], preco } = produto;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Titulo>{nome}</Titulo>

          <Container>
            <Head title={title} />
            <div>
              <ul>
                {fotos.map(({ titulo, src }) => (
                  <ListagemImage key={titulo}>
                    <img src={src} alt={titulo} />
                  </ListagemImage>
                ))}
              </ul>
            </div>
            <ContainerPreco>
              <p>
                Preço: <span>R$ {preco},00</span>
              </p>
              <button>Adicionar ao carrinho</button>
            </ContainerPreco>
          </Container>
        </>
      )}
    </>
  );
};
