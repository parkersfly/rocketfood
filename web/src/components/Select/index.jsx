import { Container } from "./styles";

export function SelectInput({ onChange }) {
  return (
    <Container>
      <label htmlFor="foodCategory" className="roboto robotoSmallRegular">
        Categoria
      </label>
      <div>
        <select
          name="foodCategory"
          id="foodCategory"
          className="roboto robotoSmallerRegular"
          onChange={onChange}
        >
          <option value="" disabled selected>Selecione a categoria</option>
          <option value="refeicao">Refeição</option>
          <option value="sobremesas">Sobremesas</option>
          <option value="bebidas">Bebidas</option>
        </select>
      </div>
    </Container>
  );
}
