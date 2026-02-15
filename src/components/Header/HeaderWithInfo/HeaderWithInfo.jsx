import NewsInfo from '../../NewsInfo/NewsInfo'
import Header from '../Header/Header'
import './HeaderWithInfo.css'

export default function HeaderWithinfo() {
  return (
  <Header classMod={'saved'}>
    <NewsInfo />
  </Header>
  )
}