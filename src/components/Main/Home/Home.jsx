import About from "../../About/About.jsx";
import Header from "../../Header/Header.jsx";
import SearchRsults from "../../SearchResults/SearchResults.jsx";
import SignInModal from "../../Modals/SignInModal/SignInModal.jsx";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal.jsx";
import InfoToolTip from "../../Modals/InfoToolTip/InfoToolTip.jsx";

export default function Home({
  modals: [{signIn, signUp, toolTip}, openModal]
}) {
  return <main>
    <Header />
    <SearchRsults />
    <About />
    <SignInModal isOpen={signIn} />
    <SignUpModal isOpen={signUp} />
    <InfoToolTip isOpen={toolTip} />
  </main>
}