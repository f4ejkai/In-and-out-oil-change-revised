import {useLocation, useNavigate} from 'react-router-dom';
import {AuthConsumer as useAuth} from "../auth";
import Logo from '../assets/logo.png'
export const Header = () => {
  const {logout, authed} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className={'d-flex p-3 bg-warning text-white align-items-center'}>
      <h2
        role={'button'}
        onClick={() => navigate('')}
        className={'me-auto text-black'}>
        <img className={'me-2'} src={Logo} width={60}/>
        In and out oil change service</h2>
      <button
        onClick={() => navigate('best-price')}
        className={`hover btn btn-text ${pathname === '/best-price' ? 'text-primary' : 'text-white'} me-2`}>Our Best Price</button>
      {authed && (
        <>
          <button onClick={() => navigate('/bookings')} className={`hover btn btn-text ${pathname === '/bookings' ? 'text-primary' : 'text-white'}`}>My Bookings</button>
          <button onClick={() => {
            logout().then(() => {
              navigate('/login')
            })
          }} className={'hover btn btn-text text-white'}>Log out</button>
        </>
      )}
      {!authed && (
        <>
          <button
            onClick={() => navigate('login')}
            className={`hover btn btn-text me-1 ${pathname === '/login' ? 'text-primary' : 'text-white'}`}>Login</button>
          <span className={'me-1'}>/</span>
          <button
            onClick={() => navigate('register')}
            className={`hover btn btn-text me-1 ${pathname === '/register' ? 'text-primary' : 'text-white'}`}>Register</button>
        </>
      )}
    </header>
  )
}
