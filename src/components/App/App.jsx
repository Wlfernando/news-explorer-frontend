import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import useModal from '../../hooks/useModal.js'
import Footer from '../Footer/Footer.jsx'
import './App.css'
import Home from '../Main/Home/Home.jsx'

export default function App() {
  const modals = useModal('signIn', 'signUp', 'toolTip');

  return (
    <div className='page'>
      <Switch>
        <Route path='saved-news'>

        </Route>
        <Route path='/' exact>
          <Home modals={modals}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}