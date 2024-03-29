import moonImg from "./assets/icons/moon.svg";
import sunImg from "./assets/icons/sun.svg";
import shoppingCard from "./assets/shopping-cart.svg";
import logo from "./assets/logo.svg";
import ringImg from "./assets/ring.svg";
import { useState, useContext } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext, ThemeContext } from "./ context";

export default function Header() {
  const [showCard, setShowCard] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  console.log(state.cartData);

  function handleShowCardDetails() {
    setShowCard(true);
  }

  function handleCardClose() {
    setShowCard(false);
  }
  return (
    <>
      {showCard && <CardDetails onClose={handleCardClose} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ringImg} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? sunImg : moonImg}
                  width="24"
                  height="24"
                  alt="sum"
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleShowCardDetails}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={shoppingCard} width="24" height="24" alt="Shopping" />
                {state.cartData.length > 0 && (
                  <span
                    className="rounded-full absolute top-[-12px] 
                  left-[28px] bg-[#12CF6F]
                   text-white text-center p-[2px] w-[30px] h-[30px]"
                  >
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
