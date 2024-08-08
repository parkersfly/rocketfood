import { Container } from './styles'

import { useState } from 'react'

import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { Circle } from '@phosphor-icons/react'

export function SelectInput({ setOrderStatus }) {
  const [displayOptionSelected, setDisplayOptionSelected] = useState('Pendente')

  const [openOptions, setOpenOptions] = useState(false)

  const dishesStatus = [
    { status: 'Pendente', value: 'pendente' },
    { status: 'Preparando', value: 'preparando' },
    { status: 'Entregue', value: 'entregue' },
  ]

  function handleSelectAndCloseOptions(event) {
    setDisplayOptionSelected(event.target.dataset.label)

    setOrderStatus(displayOptionSelected)
  }

  // window.addEventListener('keydown', (e) => {
  //   if (!openOptions) return

  //   if (e.key === 'Escape') {
  //     setOpenOptions(false)
  //   }
  // })

  return (
    <Container className="select">
      <div className="select">
        <div id="category-select">
          <input
            type="checkbox"
            id="options-view-button"
            onClick={() => setOpenOptions(!openOptions)}
          />

          <div id="select-button">
            <div
              id="selected-value"
              data-change-circle-color={displayOptionSelected}
            >
              <Circle size={8} weight="fill" />
              {displayOptionSelected}
            </div>

            <div id="chevrons">
              <ChevronDown className="chevron-down" />
              <ChevronUp className="chevron-up" />
            </div>
          </div>
        </div>

        <ul id="options" data-set-open-options={openOptions}>
          {dishesStatus.map((disheStatus) => {
            const { status, value } = disheStatus
            return (
              <li className="option" key={status}>
                <div className="status">
                  <Circle size={8} weight="fill" />

                  <input
                    type="radio"
                    name="status"
                    value={value}
                    data-label={status}
                    onClick={handleSelectAndCloseOptions}
                  />

                  <span className="label">{status}</span>
                  <Check size={16} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}
