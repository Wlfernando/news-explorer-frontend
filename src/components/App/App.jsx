import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import SearchedNews from '../ShearchedNews/SearchedNews.jsx'
import './App.css'

export default function App() {
  return (
    <div className='page'>
      <Header />
      <SearchedNews />
      <About />
      <Footer />
    </div>
  )
}