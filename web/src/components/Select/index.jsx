import { Container } from './styles'

import {
  CakeSlice,
  Check,
  ChevronDown,
  ChevronUp,
  CupSoda,
  Utensils,
} from 'lucide-react'

export function SelectInput({ onClick, value, nameClass }) {
  const selectedValue = document.getElementById('selected-value')
  const optionsViewButton = document.getElementById('options-view-button')
  const inputsOptions = document.querySelectorAll('.option input')

  inputsOptions.forEach((input) => {
    input.addEventListener('click', (event) => {
      selectedValue.textContent = input.dataset.label

      const isMouseOrTouch =
        event.pointerType === 'mouse' || event.pointerType === 'touch'

      isMouseOrTouch && optionsViewButton.click()
    })
  })

  return (
    <Container className={`select ${nameClass}`}>
      <div id="category-select">
        <label htmlFor="options-view-button">Categoria</label>
        <input type="checkbox" id="options-view-button" />

        <div id="select-button">
          <div id="selected-value">Selecione a categoria</div>

          <div id="chevrons">
            <ChevronDown className="chevron-down" />
            <ChevronUp className="chevron-up" />
          </div>
        </div>
      </div>

      <ul id="options">
        <li className="option">
          <input
            type="radio"
            name="category"
            value="refeicao"
            data-label="Refeicao"
            onClick={onClick}
          />

          <Utensils />
          <span className="label">Refeição</span>
          <Check />
        </li>

        <li className="option">
          <input
            type="radio"
            name="category"
            value="sobremesas"
            data-label="Sobremesas"
            onClick={onClick}
          />

          <CakeSlice />
          <span className="label">Sobremesas</span>
          <Check />
        </li>

        <li className="option">
          <input
            type="radio"
            name="category"
            value="bebidas"
            data-label="Bebidas"
            onClick={onClick}
          />

          <CupSoda />
          <span className="label">Bebidas</span>
          <Check />
        </li>
      </ul>
    </Container>
  )
}
