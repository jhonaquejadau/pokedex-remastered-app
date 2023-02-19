import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Loader } from "./components/Loader";
import { PrivateRoutes, PublicRoutes } from "./models";
import { ProtectedRoutes } from "./protector";
import { RoutesWithNotFound } from "./utilities";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/Login/components/SignUp/SignUp"));
const Pokedex = lazy(() => import("./pages/Pokedex/Pokedex"));
const Private = lazy(() => import("./pages/Private/Private"));


function App() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <RoutesWithNotFound>
          <Route path="/" element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<SignUp />} />
          <Route path={PublicRoutes.POKEDEX} element={<Pokedex />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
