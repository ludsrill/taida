import Home from './pages/Home'
import About from './pages/About'
import { Router } from './components/Router'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
]

function App () {
  return (
    <>
      <Router routes={routes} />
    </>
  )
}

export default App
