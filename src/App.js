import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18next from "i18next";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Solutions from "../src/pages/Solutions/Solutions";
import Podcast from "./pages/Events/Podcast";
import Programs from "./pages/Events/Programs";
import Workshops from "./pages/Events/Workshops";
import Contact from "../src/pages/Contact/Contact";

import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/podcast",
    element: <Podcast />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/workshops",
    element: <Workshops />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

i18next.init({
  lng: "ro", // your language
  interpolation: { escapeValue: false }, // React already does escaping
});

const App = () => {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
