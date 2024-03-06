import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import Footer from '../Footer/Footer.jsx'
import './App.css'
import Home from '../Main/Home/Home.jsx'
import SavedNews from '../Main/SavedNews/SavedNews.jsx'
import SavedHeader from '../Header/SavedHeader/SavedHeader.jsx'
import HomeHeader from '../Header/HomeHeader/HomeHeader.jsx'

export default function App() {
  return (
    <div className='page'>
      <Switch>
        <Route path='/saved-news'>
          <SavedHeader />
          <SavedNews />
        </Route>
        <Route path='/' >
          <HomeHeader />
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}