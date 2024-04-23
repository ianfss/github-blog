import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { Search } from './components/search'
import { HomePageContainer } from './styles'

export function HomePage() {
  return (
    <HomePageContainer>
      <Profile />
      <Search />
      <Posts />
    </HomePageContainer>
  )
}
