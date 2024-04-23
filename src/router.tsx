import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { HomePage } from './pages/home'
import { PostPage } from './pages/post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:number" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
