import React, { useState } from "react";

const QuestionsSlider = () => {
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const { title, content } = slides[currentSlide];

  return (
    <div class="flex flex-col items-center text-center mx-auto mb-40 max-w-screen-lg">
      <h2 class="text-3xl font-bold mb-3 text-center">Intrebari frecvente</h2>
      <div class="h-60 flex flex-col justify-center items-center slider-content overflow-y-auto">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? "" : "hidden"}>
            <h2 class="text-2xl font-bold mb-4 mt-10">{slide.title}</h2>
            <p class="text-lg leading-relaxed mb-6">{slide.content}</p>
          </div>
        ))}
      </div>
      <div class="flex justify-between w-full max-w-400">
        <button
          onClick={goToPreviousSlide}
          class="flex justify-center items-center max-w-400px text-base font-bold px-4 py-1 border-none rounded-md bg-[#1a202c] hover:bg-[#2d3748] text-white cursor-pointer transition ease-in-out duration-200 w-[15%] h-12"
        >
          Anterioara
        </button>
        <button
          onClick={goToNextSlide}
          class="flex justify-center items-center max-w-400px text-base font-bold px-4 py-1 border-none rounded-md bg-[#1a202c] hover:bg-[#2d3748] text-white cursor-pointer transition ease-in-out duration-200 w-[15%] h-12"
        >
          Urmatoare
        </button>
      </div>
    </div>
  );
};
export default QuestionsSlider;
