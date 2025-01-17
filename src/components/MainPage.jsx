import About from "./About";
import Header from "./Header";
import Scrabs from "./Scrabs";
import Whyus from "./Whyus";
import Footer from "./Footer";

export default function MainPage(){
  return(
    <div className="page">
      <Header/>
      <main>
        <About/>
        <Scrabs/>
        <Whyus/>
      </main>
      <Footer/>
    </div>
  )
}