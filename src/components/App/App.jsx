import useModal from '../../hooks/useModal.js'
import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import InfoToolTip from '../Modals/InfoToolTip/InfoToolTip.jsx'
import SignInModal from '../Modals/SignInModal/SignInModal.jsx'
import SignUpModal from '../Modals/SignUpModal/SignUpModal.jsx'
import SearchRsults from '../SearchResults/SearchResults.jsx'
import './App.css'

export default function App() {
  const [modals, openModal, closeAllModals] = useModal('signIn', 'signUp', 'toolTip');

  return (
    <div className='page'>
      <Header />
      <SearchRsults />
      <About />
      <SignUpModal />
      <InfoToolTip isOpen/>
      <Footer />
    </div>
  )
}