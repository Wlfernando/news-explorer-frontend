import About from "../../About/About.jsx";
import SearchRsults from "../../Cards/SearchResults/SearchResults.jsx";
import SignInModal from "../../Modals/SignInModal/SignInModal.jsx";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal.jsx";
import InfoToolTip from "../../Modals/InfoToolTip/InfoToolTip.jsx";
import HomeHeader from "../../Header/HomeHeader/HomeHeader.jsx";

export default function Home({
  modals: [{signIn, signUp, toolTip}, openModal]
}) {
  return <main>
    <HomeHeader />
    <SearchRsults />
    <About />
    <SignInModal isOpen={signIn} />
    <SignUpModal isOpen={signUp} />
    <InfoToolTip isOpen={toolTip} />
  </main>
}