import trending from "./assets/icons/trending.svg";
import newReleaseImg from "./assets/icons/newRelease.svg";
import comingSoonImg from "./assets/icons/commingSoon.svg";
import favoriteImg from "./assets/icons/favourite.svg";
import watchLaterImg from "./assets/icons/watchLater.svg";
export default function Sidebar() {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={trending} width="24" height="24" alt="trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img
                src={newReleaseImg}
                width="24"
                height="24"
                alt="newReleaseImg"
              />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={comingSoonImg} width="24" height="24" alt="" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={favoriteImg} width="24" height="24" alt="" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={watchLaterImg} width="24" height="24" alt="" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
