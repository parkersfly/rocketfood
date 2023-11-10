import { Container, Banner } from "./styles";

import { useSearch } from "../../../hooks/search";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../../services/api";

import { Section } from "../../../components/Section";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Card } from "../../../components/Card";

import cakeBanner from "../../../assets/cakeBanner.png";
import cakeBannerWeb from "../../../assets/cakeBannerWeb.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function Home() {
  const [plates, setPlates] = useState([]);

  const navigate = useNavigate();

  function handlePlateDetails(id) {
    navigate(`/details/?${id}`);
  }

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get("/plates");
      
      setPlates(response.data);
    }

    fetchPlates();
  });

  return (
    <Container>
      <Header />

      <main className="flex column">
        <div className="main-content">
          <Banner>
            <div>
              <img src={cakeBanner} alt="" className="mobileImage" />
              <img src={cakeBannerWeb} alt="" className="webImage" />
              <div className="bannerTitle">
                <h2 className="poppins">Sabores inigualáveis</h2>
                <p className="poppins">
                  Sinta o cuidado do preparo com ingredientes selecionados.
                </p>
              </div>
            </div>
          </Banner>

          <Section title="Refeições">
            <Swiper
              navigation={true}
              breakpoints={{
                428: {
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
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates.map(
                (plate) =>
                  plate.category === "refeicao" && (
                    <SwiperSlide>
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

          {plates.map((plate) => {
            plate.category === "sobremesas" && (
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
                            key={String(plate.id)}
                            data={plate}
                            onClick={() => handlePlateDetails(plate.id)}
                          />
                        </SwiperSlide>
                      )
                  )}
                </Swiper>
              </Section>
            );
          })}

          {
          plates.map((plate) => {
            plate.category === "bebidas" && (
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
                            key={String(plate.id)}
                            data={plate}
                            onClick={() => handlePlateDetails(plate.id)}
                          />
                        </SwiperSlide>
                      )
                  )}
                </Swiper>
              </Section>
            );
          })}
        </div>
      </main>

      <Footer />
    </Container>
  );
}
