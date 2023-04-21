import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Values from "./components/Values/Values";
import Description from "./components/Description/Description";
import Comparison from "./components/Comparison/Comparison";
import Work from "./components/Work/Work";
import Invite from "./components/Invite/Invite";
import Questions from "./components/Questions/Questions";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Values />
    <Description />
    <Comparison />
    <Work />
    <Invite />
    <Questions />
    <Form />
    <Footer />
  </div>
);

export default App;
