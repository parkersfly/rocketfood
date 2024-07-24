import { Container } from './styles'

import { useState } from 'react'

import {
  CakeSlice,
  Check,
  ChevronDown,
  ChevronUp,
  CupSoda,
  Utensils,
} from 'lucide-react'

export function SelectInput({ nameClass }) {
  const [displayOptionSelected, setDisplayOptionSelected] = useState(
    'Selecione a categoria',
  )

  const [openOptions, setOpenOptions] = useState(false)

  function handleSelectAndCloseOptions(event) {
    setDisplayOptionSelected(event.target.dataset.label)

    setOpenOptions(false)
  }

  // const selectedValue = document.getElementById('selected-value')
  // const optionsViewButton = document.getElementById('options-view-button')
  // const inputsOptions = document.querySelectorAll('.option input')

  // inputsOptions.forEach((input) => {
  //   input.addEventListener('click', (event) => {
  //     selectedValue.textContent = input.dataset.label

  //     console.log(categorySelected)

  //     const isMouseOrTouch =
  //       event.pointerType === 'mouse' || event.pointerType === 'touch'

  //     isMouseOrTouch && optionsViewButton.click()
  //   })
  // })

  return (
    <Container className={`select ${nameClass}`}>
      <div className={`select ${nameClass}`}>
        <div id="category-select">
          <label htmlFor="options-view-button">Categoria</label>
          <input
            type="checkbox"
            id="options-view-button"
            onClick={() => setOpenOptions(!openOptions)}
          />

          <div id="select-button">
            <div id="selected-value">{displayOptionSelected}</div>

            <div id="chevrons">
              <ChevronDown className="chevron-down" />
              <ChevronUp className="chevron-up" />
            </div>
          </div>
        </div>

        <ul id="options" data-set-open-options={openOptions}>
          <li className="option">
            <input
              type="radio"
              name="category"
              value="meal"
              data-label="Refeição"
              onClick={(e) => handleSelectAndCloseOptions(e)}
            />

            <Utensils />
            <span className="label">Refeição</span>
            <Check />
          </li>

          <li className="option">
            <input
              type="radio"
              name="category"
              value="dessert"
              data-label="Sobremesa"
              onClick={(e) => handleSelectAndCloseOptions(e)}
            />

            <Utensils />
            <span className="label">Sobremesa</span>
            <Check />
          </li>

          <li className="option">
            <input
              type="radio"
              name="category"
              value="drink"
              data-label="Bebida"
              onClick={(e) => handleSelectAndCloseOptions(e)}
            />

            <Utensils />
            <span className="label">Bebida</span>
            <Check />
          </li>
        </ul>
      </div>
    </Container>
  )
}
