import background from '../images/about.png'

export default function About({}){
  return(
    <section className="about" id='about'>
      <div className="container container_about">
      <h3 className="about__title">о нас</h3>
      <p className="about__caption">
      Добро пожаловать в мир <span className='bold'>Celestial Elixir</span>, где история встречается с красотой! Наши скрабы наполнены заботой и любовью к вашей коже, передавая традиции и богатство нашего бренда. Откройте для себя несравненное великолепие нашего продукта: натуральные ингредиенты, растительные масла и ценные минералы, созданные специально для вашей кожи. Погрузитесь в удовольствие и дайте вашей коже роскошное омолаживающее SPA-ухода с <span className="bold">Celestial Elixir</span>. Выберите нас, и ваша кожа будет благодарить вас каждый день!
      </p>
      </div>
      <img src={background} alt="" className="about__img" />
    </section>
  )
}