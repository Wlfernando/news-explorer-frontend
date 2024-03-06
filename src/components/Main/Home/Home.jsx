import About from "../../About/About.jsx";
import SearchRsults from "../../Cards/SearchResults/SearchResults.jsx";
import SignInModal from "../../Modals/SignInModal/SignInModal.jsx";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal.jsx";
import InfoToolTip from "../../Modals/InfoToolTip/InfoToolTip.jsx";
import HomeHeader from "../../Header/HomeHeader/HomeHeader.jsx";
import { useFetchedNewsContext } from "../../../hooks/useGlobalContext.js";

export default function Home() {
  const news = useFetchedNewsContext()

  return <main>
    <HomeHeader />
    {Boolean(news.length) && <SearchRsults news={news} />}
    <About />
    <SignInModal />
    <SignUpModal />
    <InfoToolTip />
  </main>
}