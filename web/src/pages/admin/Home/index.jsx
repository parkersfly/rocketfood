import { Container, Content, Banner } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";

import { useNavigate } from "react-router-dom";

import cakeBanner from "../../../assets/cakeBanner.png";
import cakeBannerWeb from "../../../assets/cakeBannerWeb.png";

import { useSearch } from "../../../hooks/search";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function Home() {
  const [plates, setPlates] = useState([])

  const navigate = useNavigate();

  function handlePlateDetails(id) {
    navigate(`/details/?${id}`);
  }
  
  useEffect(() => {
    async function fetchPlates(){
      const response = await api.get("/plates")
      
      setPlates(response.data)
    }

    fetchPlates()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <main>
          <Banner>
            <div>
              <img src={cakeBanner} alt="" className="mobileImg" />
              <img src={cakeBannerWeb} alt="" className="webImg" />
              <div>
                <h2 className="poppins">Sabores inigualáveis</h2>
                <p className="poppins">
                  Sinta o cuidado do preparo com ingredientes selecionados.
                </p>
              </div>
            </div>
          </Banner>

         <Section title="Refeições">
            <Swiper
              slidesPerView={1}
              spaceBetween={27}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1368: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates.map(
                (plate) =>
                  plate.category === "refeicao" && (
                    <SwiperSlide key={plate}>
                      <Card
                        key={String(plate.id)}
                        data={plate}
                        onClick={() => handlePlateDetails(plate.id)}
                      />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </Section>

          <Section title="Sobremesas">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates.map(
                (plate) =>
                  plate.category === "sobremesas" && (
                    <SwiperSlide key={plate}>
                      <Card
                        admin
                        key={String(plate.id)}
                        data={plate}
                        onClick={() => handlePlateDetails(plate.id)}
                      />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </Section>

          <Section title="Bebidas">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates.map(
                (plate) =>
                  plate.category === "bebidas" && (
                    <SwiperSlide key={plate}>
                      <Card
                        admin
                        key={String(plate.id)}
                        data={plate}
                        onClick={() => handlePlateDetails(plate.id)}
                      />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </Section> 
        </main>
        <Footer />
      </Content>
    </Container>
  );
}
