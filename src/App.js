import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Comparison from "./components/Comparison/Comparison";
import Work from "./components/Work/Work";
import Invite from "./components/Invite/Invite";
import QuestionsSlider from "./components/QuestionsSlider/QuestionsSlider";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

const App = () => {
  const slides = [
    {
      title: "Ce este coachingul si cum poate ajuta?",
      content:
        "Coachingul este un process de dezvoltare personala si/sau profesionala care are scopul de a te ajuta sa iti atingi obiectivele pe termen scurt, mediu si lung, si sa iti maximizezi potentialul.Voi lucra cu tine pentru a identifica obiectivele tale, a dezvolta un plan de actiune si a te ghida sa iti depasesti barierele personale si profesionale. Voi adresa intrebari deschise si voi asculta activ sit e voi ghida sa gasesti raspunsurile de care ai nevoie. Vom lucra intr-un mediu sigur, non-judecativ, in care iti poti exprima gandurile si sentimentele.",
    },
    {
      title: "Cine poate beneficia de coaching?",
      content:
        "Orice persoana care doreste sa se cunoasca mai bine si doreste sa isi imbunatateasca viata personala sau profesionala, poate beneficia de coaching.",
    },
    {
      title: "Cum se desfasoara o sedinta de coaching?",
      content:
        "O sedinta individuala de coaching dureaza 60 de minute si poate fi realizata online sau fata in fata. Voi discuta cu tine despre obiectivele tale si vom identifica cele mai bune strategii pentru a le atinge. In functie de nevoile tale, vom stabili frecventa sedintelor, care poate fi saptamanala sau la 2 saptamani si de asemenea si numarul de sedinte de care ai nevoie.",
    },
    {
      title: "Cum aleg un coach potrivit pentru mine?",
      content:
        "Incearca sa cauti pe cineva cu care simti ca rezonezi in zona in care ai nevoie de ghidaj. E bine sa alegi pe cineva in care sa simti cu adevarat ca poti sa ai incredere si care te face sa ai deschiderea necesara pentru a fi sincer cu tine si cu obiectivele tale. Cel mai important, cauta un coach care se poate adapta ;a nevoile tale individuale.",
    },
    {
      title: "Care este diferenta dintre coaching si psihoterapie?",
      content:
        "Coachingul se concentreaza pe situatiile tale prezente si imbunatatirea performantei tale viitoare. Indiferent ca vorbim de situatii emotionale, coachingul aduce tehnici adaptate pentru a gasi solutii practice pentru a gasi un echilibru in prezent si viitor. Psihoterapia se concentreaza pe tratarea situatiilor trecute si traumelor sau problemelor de sanatate mentala.",
    },
    {
      title: "Cat dureaza procesul de coaching?",
      content:
        "In functie de obiectivele si progresul facut in timpul sedintelor, procesul poate dura de la cateva sedinte pana la cateva luni de lucru impreuna.",
    },
    {
      title: "Sedintele sunt confidentiale?",
      content:
        "Da, coachingul se bazeaza incredere si confidentialitate, tocmai pentru a crea un spatiu de siguranta si liniste pentru cel care beneficiaza de coaching.",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <Description />
      <Comparison />
      <Work />
      <Invite />
      <QuestionsSlider slides={slides} />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
