import useModal from '../../hooks/useModal.js'
import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import SignInModal from '../Modals/SignInModal/SignInModal.jsx'
import SearchRsults from '../SearchResults/SearchResults.jsx'
import './App.css'

export default function App() {
  const [modals, openModal, closeAllModals] = useModal('sign-in', 'sign-up');

  return (
    <div className='page'>
      <Header />
      <SearchRsults />
      <About />
      <SignInModal isOpen />
      <Footer />
    </div>
  )
}