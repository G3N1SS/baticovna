export default function Card({card}){
  return(
    <li className="scrab__card card">
        <img src={card.link} alt={card.name} className="card__img" />
        <h4 className="card__title">{card.name}</h4>
          <ul className="card__list">
            {card.list.map(data => {
              return(
                <li className="card__list-item" key={data}>{data}</li>
              )
            })}
          </ul>
        <p className="card__caption">{card.caption}</p>
        <p className="card__price">ЦЕНА: {card.price}₽</p>
    </li>
  )
}