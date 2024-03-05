import About from "../../About/About.jsx";
import SearchRsults from "../../Cards/SearchResults/SearchResults.jsx";
import SignInModal from "../../Modals/SignInModal/SignInModal.jsx";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal.jsx";
import InfoToolTip from "../../Modals/InfoToolTip/InfoToolTip.jsx";
import HomeHeader from "../../Header/HomeHeader/HomeHeader.jsx";

export default function Home() {
  return <main>
    <HomeHeader />
    <SearchRsults />
    <About />
    <SignInModal />
    <SignUpModal />
    <InfoToolTip />
  </main>
}