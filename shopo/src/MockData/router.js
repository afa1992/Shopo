import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";
import Shop from "../Pages/Shop/Shop";

const router = [
  {
    id: Math.random(),
    name: "Homepage",
    path: "/",
    exact: true,
    component: <Homepage />,
    fallback: <Homepage />,
  },
  {
    id: Math.random(),
    name: "Shop",
    path: "/shop",
    exact: true,
    component: <Shop />,
  },
  {
    id: Math.random(),
    name: "About",
    path: "/about",
    exact: true,
    component: <About />,
  },
  {
    id: Math.random(),
    name: "Contact",
    path: "/contact",
    exact: true,
    component: <Contact />,
  },

  {
    id: Math.random(),
    name: "Blog",
    path: "/blog",
    exact: true,
    component: <Blog />,
  },
  {
    id: Math.random(),
    name: "Error",
    path: "*",
    component: <Error />,
  },
];

export default router;
