import { Home } from './pages/Home';
import { PokemonDetailed } from './pages/PokemonDetailed';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "pokemons/:pokemonId",
    element: <PokemonDetailed />
  }
])
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
