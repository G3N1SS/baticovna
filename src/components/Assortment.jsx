import CardSection from "./CardSection";
import Header from "./Header";
import cards from "../utils/constants";

export default function Assortment({}){
  return(
    <div className="page">
      <Header/>
      <main>
        <div className="container container_scrabs">
          <CardSection cards={cards}/>
        </div>
      </main>
    </div>
  )
}