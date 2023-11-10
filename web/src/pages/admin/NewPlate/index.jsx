import { Container, Form, Content } from "./styles";

import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { SelectInput } from "../../../components/Select";
import { PlateItem } from "../../../components/PlateItem";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";

import { api } from "../../../services/api";

import { CaretLeft, UploadSimple } from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { formToJSON } from "axios";

export function NewPlate() {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [picture, setPicture] = useState();
  const [pictureFile, setPictureFile] = useState(null);

  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleAddPlate() {
    // if(!title){
    //   return alert("Insira o nome do prato")
    // }

    // if(newTag){
    //   return alert("Ops! Tem uma tag não adicionada no campo :/ . Pra corrigir isso basta clicar no + ou deixar o campo em branco.")
    // }

    // try {
    //   const fileUploadForm = new FormData();
    //   fileUploadForm.append("picture", pictureFile);

    //   // await api.patch("/plates/plateImage", fileUploadForm )

    //   await api.post("/plates", fileUploadForm);
    // } catch(e){
    //   console.log(e)
    // }

    await api.post("/plates", {
      title,
      category,
      price,
      description,
      tags
    });

    alert("Prato criado com sucesso!")
    navigate("/")

  }

  async function handleInsertPlateImage(event) {
    const file = event.target.files[0];

    setPictureFile(file);

    const picturePreview = URL.createObjectURL(file);
    setPicture(picturePreview);
  }

  return (
    <Container>
      <Header admin />
      <Content>
        <button onClick={handleBack} className="poppins">
          <CaretLeft size={22} />
          voltar
        </button>
        <Form>
          <h1 className="poppins poppins400Medium">Novo prato</h1>

          <div className="divider1 flex column">
            <Input
              type="file"
              title="Imagem do prato"
              icon={UploadSimple}
              labelTitle="Selecione a imagem"
              htmlFor="plateImage"
              id="plateImage"
              onChange={handleInsertPlateImage}
            />

            <Input
              type="text"
              title="Nome"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setTitle(e.target.value)}
            />

            <SelectInput onChange={(e) => setCategory(e.target.value)} />
          </div>

          <div className="divider2 flex column">
            <div className="ingredientsList">
              <p className="roboto robotoSmallRegular">Ingredientes</p>
              <div className="ingredients">
                {tags.map((tag, index) => (
                  <PlateItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <PlateItem
                  isNew
                  placeholder="Adicionar"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </div>
            
            <div className="price">
              <label htmlFor="preco">Preço</label>
              <div className="priceInput flex items-center">
                <span>R$</span>
                <input 
                type="number"
                min="0.01"
                step="0.01"
                placeholder="00,00"
                onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="description">
            <p className="roboto">Descrição</p>
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value=""
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="saveButton">
            <Button text="Salvar alterações" onClick={handleAddPlate} />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
