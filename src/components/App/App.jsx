import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import SearchRsults from '../SearchResults/SearchResults.jsx'
import './App.css'

export default function App() {
  return (
    <div className='page'>
      <Header />
      <SearchRsults />
      <About />
      <Footer />
    </div>
  )
}