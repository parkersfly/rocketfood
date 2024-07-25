import { Container } from './styles'

import { useEffect, useState } from 'react'

import {
  CakeSlice,
  ChevronDown,
  ChevronUp,
  Check,
  Beef,
  Beer,
} from 'lucide-react'

const DishesCategory = [
  { id: 1, value: 'meal', dataLabel: 'Refeição', icon: <Beef /> },
  { id: 2, value: 'dessert', dataLabel: 'Sobremesa', icon: <CakeSlice /> },
  { id: 3, value: 'drink', dataLabel: 'Drink', icon: <Beer /> },
]

export function SelectInput({ nameClass, setCategory, category }) {
  const [displayOptionSelected, setDisplayOptionSelected] = useState('')

  const [openOptions, setOpenOptions] = useState(false)

  function handleSelectAndCloseOptions(event) {
    setDisplayOptionSelected(event.target.dataset.label)

    setOpenOptions(false)

    setCategory(event.target.value)
  }

  window.addEventListener('keydown', (e) => {
    if (!openOptions) return

    if (e.key === 'Escape') {
      setOpenOptions(false)
    }
  })

  useEffect(() => {
    switch (category) {
      case 'meal':
        setDisplayOptionSelected('Refeição')
        break

      case 'dessert':
        setDisplayOptionSelected('Sobremesa')
        break

      case 'drink':
        setDisplayOptionSelected('Bebida')
        break

      default:
        setDisplayOptionSelected('Selecione a categoria')
    }
  }, [category])

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
          {DishesCategory.map((disheCategory) => {
            const { id, value, dataLabel, icon } = disheCategory
            return (
              <li key={id} className="option">
                <input
                  type="radio"
                  name="category"
                  value={value}
                  data-label={dataLabel}
                  onClick={(e) => handleSelectAndCloseOptions(e)}
                />

                {icon}
                <span className="label">{dataLabel}</span>
                <Check />
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}
