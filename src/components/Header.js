import {useLocation, useNavigate} from 'react-router-dom';
import {AuthConsumer as useAuth} from "../auth";
import Logo from '../assets/logo.png'
export const Header = () => {
  const {logout, authed} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className={'d-flex p-3 bg-dark text-white align-items-center'}>
      <h1
        role={'button'}
        onClick={() => navigate('')}
        className={'me-auto text-black text-white'}>
        <img className={'me-2 '} alt='xx' src={Logo} width={60}/>
        In and out oil change service</h1>
      <button
        role={'button'}
        onClick={() => navigate('best-price')}
        className={`hover btn btn-text ${pathname === '/best-price' ? 'text-primary' : 'text-white'} me-2`}>Our Best Price</button>
      {authed && (
        <>
          <button aria-label="Aria Name"
        role={'button'} onClick={() => navigate('/bookings')} className={`hover btn btn-text ${pathname === '/bookings' ? 'text-primary' : 'text-white'}`}>My Bookings</button>
          <button aria-label="Aria Name"
        role={'button'} onClick={() => {
            logout().then(() => {
              navigate('/login')
            })
          }} className={'hover btn btn-text text-white'}>Log out</button>
        </>
      )}
      {!authed && (
        <>
          <button
          role={'button'}
            onClick={() => navigate('login')}
            className={`hover btn btn-text me-1 ${pathname === '/login' ? 'text-primary' : 'text-white'}`}>Login</button>
          <span className={'me-1'}>/</span>
          <button
          role={'button'}
            onClick={() => navigate('register')}
            className={`hover btn btn-text me-1 ${pathname === '/register' ? 'text-primary' : 'text-white'}`}>Register</button>
        </>
      )}
    </header>
  )
}
