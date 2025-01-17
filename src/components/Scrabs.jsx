import { Link } from "react-router-dom"
import cards from "../utils/constants"
import CardSection from "./CardSection"

export default function Scrabs(){
  return(
    <section className="scrabs" id="scrabs">
      <div className="container container_scrabs">
      <h3 className="scrabs__title">скрабы</h3>
      <CardSection cards={cards}/>
      {cards.length >= 4 ? <Link className="scrabs__button" to='/assortment' onClick={() => window.scrollTo(0,0)}>весь ассортимент</Link> : ''}
      </div>
    </section>
  )
}