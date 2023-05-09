import "./App.css";

import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Solutions from "../src/pages/Solutions/Solutions";
import Events from "../src/pages/Events/Events";
import Contact from "../src/pages/Contact/Contact";

import "./styles/tailwind.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

<BrowserRouter>
  <App />
</BrowserRouter>;
