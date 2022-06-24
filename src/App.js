import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import data from "./data";

const App = () => {
  return (
    <>
      <Header/>
      <Card data={data}/>
      <Footer/>
    </>
  )
}

export default App