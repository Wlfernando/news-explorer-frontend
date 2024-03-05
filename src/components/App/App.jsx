import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import Footer from '../Footer/Footer.jsx'
import './App.css'
import Home from '../Main/Home/Home.jsx'
import SavedNews from '../Main/SavedNews/SavedNews.jsx'

export default function App() {
  return (
    <div className='page'>
      <Switch>
        <Route path='/saved-news'>
          <SavedNews />
        </Route>
        <Route path='/' >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}