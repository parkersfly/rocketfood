import { QntdAndPriceContainer } from './styles'

import { Receipt } from '@phosphor-icons/react'
import { Minus, Plus } from 'lucide-react'

import { Button } from '../../../components/Button'

export function QntdAndPrice({ price, handleAddItem, handleRemoveItem, qntd }) {
  return (
    <QntdAndPriceContainer>
      <div className="flex justify-center">
        <div className="count flex items-center">
          <button onClick={handleRemoveItem}>
            <Minus size={24} />
          </button>

          <p>{qntd > 9 ? qntd : `0${qntd}`}</p>

          <button onClick={handleAddItem}>
            <Plus size={24} />
          </button>
        </div>

        <Button
          className="buttonMobile"
          text={`pedir ∙ R$ ${price}`}
          icon={Receipt}
        />

        <Button className="buttonWeb" text={`incluir ∙ R$ ${price}`} />
      </div>
    </QntdAndPriceContainer>
  )
}
