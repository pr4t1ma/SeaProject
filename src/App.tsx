import { useEffect, useState } from "react";
import "./App.css";

const items = [
  { label: "Home", href: "./" },
  { label: "About", href: "./about" },
  { label: "Services", href: "./services" },
  { label: "Portfolio", href: "./portfolio" },
  { label: "Blog", href: "./blog" },
  { label: "Contact", href: "./contact" },
  { label: "FAQ", href: "./faq" },
];
type Pokemon = {
  name: string;
  type: string;
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemonData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
      (res) => res.json()
    );
    const data = response.results;
    setPokemons(data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-red-700 text-3xl">Here will be the main heading</h1>
      <div className="header">
        <nav>
          {isOpen ? (
            <ul className="">
              {items.map((item) => {
                return (
                  <li className="flex gap-10 my-20">
                    <a href="" key={item.href}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-2"
              >
                Closed
              </button>
            </ul>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 text-white px-6 py-2"
            >
              Open
            </button>
          )}
        </nav>
      </div>
      <div>
        <h4>Pokemon list</h4>
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
