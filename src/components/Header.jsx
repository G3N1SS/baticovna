import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import banner from '../images/Banner.png'
import logo from '../images/CELESTIAL ELIXIR.png'

export default function Header(){
  const  {pathname} = useLocation()

  return(
  <header className="header">
    <div className="container container_header">
    <Link to='/' className="header__logo"><img src={logo} alt="" className="header__logo" /></Link>
    <p className="header__title-caption">ощущение нежности с <span className="header__title-caption_bold bold">celestial</span> - скрабы для идеальной кожи</p>
    <nav className="header__nav">
      <HashLink to='/#scrabs' className="header__nav-link" smooth>скрабы</HashLink>
      {pathname === '/assortment' && <Link className="header__nav-link" to ='/'>главная</Link>}
      <HashLink to='/#contacts' className="header__nav-link" smooth>контакты</HashLink>
      <HashLink to='/#about' className="header__nav-link" smooth>о нас</HashLink>
    </nav>
    {pathname === '/' &&
    <>
    <div className="header__banner">
      <img src={banner} alt='Баннер' className='header__banner-image'/>
      <h2 className="header__banner-title">celest<span className="header__banner-title_white">ial</span></h2>
    </div>
    <p className="header__banner-caption">освежи свою кожу с <span className="bold">celestial</span> - нежность и чистота каждый день</p>
    </>
    }
    </div>
  </header>
  )
}