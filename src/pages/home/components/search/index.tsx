import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
