import "./styles/app.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import GridImage from "./components/GridImage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Reviews />
      <GridImage />
      <Footer />
    </div>
  );
}

export default App;
