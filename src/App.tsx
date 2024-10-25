import { useState } from "react";
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

function App() {
  const [isOpen, setIsOpen] = useState(false);
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
    </div>
  );
}

export default App;
