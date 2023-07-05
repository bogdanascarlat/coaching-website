import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18next from "i18next";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Solutions from "../src/pages/Solutions/Solutions";
import Events from "../src/pages/Events/Events";
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
    path: "/events",
    element: <Events />,
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
