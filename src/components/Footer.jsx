import tg from '../images/telegramm.svg'
import ig from '../images/instagramm.svg'
import logo from '../images/CELESTIAL ELIXIR.png'
import { Link } from 'react-router-dom'

export default function Footer({}){
  return(
    <footer className="footer" id='contacts'>
      <div className="container container_footer">
        <h2 className="footer__title">СПЕШИТЕ<br/>ПРИОБРЕСТИ<br/>СКРАБЫ</h2>
        <a href="" className="footer__button">КУПИТЬ</a>
        <div className="footer__links">
          <h3 className="footer__links-title">МЫ В СОЦ. СЕТЯХ</h3>
          <div className="footer__icons">
            <a href="" className="footer_tg"><img src={tg} alt="" /></a>
            <a href="" className="footer__inst"><img src={ig} alt="" /></a>
          </div>
        </div>
      </div>
      <Link className="footer__logo" to='/' onClick={() => {window.scrollTo(0,0)}}><img className="footer__logo" src={logo} alt='celestial elixir'/></Link>
      <p className="footer__logo-caption">С НАМИ КАЖДЫЙ ДЕНЬ ЛУЧШЕ</p>
    </footer>
  )
}