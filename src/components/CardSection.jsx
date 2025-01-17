import Card from "./Card"

export default function CardSection({cards}){
  return(
  <ul className="scrabs__list">
  {cards.map(data => {
    return(
      <Card card={data} key={data.name}/>
    )
  })}
  </ul>)
}