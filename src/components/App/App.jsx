import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import NewsCardList from '../NewsCardList/NewsCardList.jsx'
import SavedNews from '../SavedNews/SavedNews.jsx'
import SearchedNews from '../ShearchedNews/SearchedNews.jsx'
import './App.css'

export default function App() {
  return (
    <div className='page'>
      <Header />
      <NewsCardList>
        {Array(5).fill(<SearchedNews />)}
      </NewsCardList>
      <About />
      <Footer />
    </div>
  )
}