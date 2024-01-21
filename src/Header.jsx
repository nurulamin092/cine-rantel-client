import sunImg from "./assets/icons/sun.svg";
import shoppingCard from "./assets/shopping-cart.svg";
import logo from "./assets/logo.svg";
import ringImg from "./assets/ring.svg";
export default function Header() {
  return (
    <>
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
              >
                <img src={sunImg} width="24" height="24" alt="sum" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={shoppingCard} width="24" height="24" alt="Shopping" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
