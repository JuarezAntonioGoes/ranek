import React from "react";
import { Link } from "react-router-dom";
import { Head } from "../Head";
import { Header } from "../Header";
import { ContainerProducts, TitleProduct, ProductItem } from "./style";

export const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const styleLink = { height: "100%", width: "100%", textDecoration: "none" };
  const [title, setTitle] = React.useState("Ranek");

  React.useEffect(() => {
    document.querySelector("head title").textContent = "Ranek | Produtos";
    handleFetch();
  }, []);

  async function handleFetch() {
    const result = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto"
    );

    const JSON = await result.json();
    setProdutos([...JSON]);
    setTitle("Produtos");
  }

  return (
    <>
      <Header />

      <TitleProduct>Produtos</TitleProduct>

      <ContainerProducts>
        <Head title={title} />

        {produtos.map(({ id, fotos, nome }) => (
          <ProductItem key={id}>
            <Link to={"produto/" + id} style={styleLink}>
              <img src={fotos[0].src} alt={fotos[0].titulo} />
              <h2>{nome}</h2>
            </Link>
          </ProductItem>
        ))}
      </ContainerProducts>
    </>
  );
};
