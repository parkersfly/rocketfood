import { Container, Content } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Tag } from "../../../components/Tag";
//import { Count } from '../../../components/Count'
import { Button } from "../../../components/Button";

import salad from "../../../assets/plates/salad.png";

import { useSearch } from "../../../hooks/search";

import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { api } from "../../../services/api";

export function Details() {
  const { plates } = useSearch()

  // async function letMeSeeThePlate(){
  //   await api.get
  // }

  return (
    <Container>
      <Header />
      <Content>
        <button className="poppins">
          <CaretLeft size={32} />
          voltar
        </button>
        <main className="flex column justify-center items-center">
          <img src={salad} alt="" />

          <div className="info">
            <h3 className="poppins">Salada Ravanello</h3>

            <p className="poppins">
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <div className="tagsWrapper">
              <Tag text="alface" />
              <Tag text="cebola" />
              <Tag text="pão naan" />
              <Tag text="pepino" />
              <Tag text="rabanete" />
              <Tag text="tomate" />
            </div>

            <div className="qntdAndPrice flex justify-center">
              <Button
                className="poppins buttonMobile"
                text="pedir ∙ R$ 25,00"
                icon={Receipt}
              />

              <Button className="poppins buttonWeb" text="incluir ∙ R$ 25,00" />
            </div>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
