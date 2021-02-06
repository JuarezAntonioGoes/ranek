import { Header } from "../Header";
import ImageContato from "../../assets/img/contato.jpg";
import { ContainerContato, ImageContatoStyle, Lista } from "./style";

export const Contato = () => {
  return (
    <>
      <Header />
      <ContainerContato>
        <h1 style={{ marginTop: "1rem" }}>Contato</h1>

        <ImageContatoStyle src={ImageContato} alt="Maquina de escrever" />
        <div>
          <h2>Informações</h2>
          <Lista>
            <li>Juarez Antonio de Góes Junior</li>
            <li>juarezantoniog12@gmail.com</li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/JuarezAntonioGoes">
                JuarezAntonioGoes
              </a>
            </li>
          </Lista>
        </div>
      </ContainerContato>
    </>
  );
};
