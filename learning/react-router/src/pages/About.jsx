import { Link } from '../components/Link'

export default function About () {
  return (
    <>
      <h1>About</h1>
      <div>
        <p>Esta es la pagina sobre mi</p>
        <img src='https://avatars.githubusercontent.com/u/40694133?v=4' alt='me' />

      </div>
      <Link to='/'>Home</Link>
    </>
  )
}
