import { Link } from '../components/Link'

export default function Home () {
  return (
    <>
      <h1>HOME</h1>
      <p>Esta es la pagina de inicio</p>
      <Link to='/about'>Sobre mi</Link>
    </>
  )
}
