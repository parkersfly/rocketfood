import { FavoritesContainer, FavoritesDishWrapper } from './styles'

import bolinhosIMG from '../../assets/plates/bolinhos.jpg'

export function Favorites() {
  return (
    <FavoritesContainer>
      <h3>Meus favoritos</h3>

      <FavoritesDishWrapper>
        <div className="card">
          <img src={bolinhosIMG} alt="" />
          <div className="card-info">
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </div>

        <div className="card">
          <img src={bolinhosIMG} alt="" />
          <div className="card-info">
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </div>

        <div className="card">
          <img src={bolinhosIMG} alt="" />
          <div className="card-info">
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </div>

        <div className="card">
          <img src={bolinhosIMG} alt="" />
          <div className="card-info">
            <strong>Salada Radish</strong>
            <button>Remover dos Favoritos</button>
          </div>
        </div>
      </FavoritesDishWrapper>
    </FavoritesContainer>
  )
}
