import NewsInfo from '../../NewsInfo/NewsInfo'
import HeaderWithTools from '../HeaderWithTools/HeaderWithTools'
import './SavedHeader.css'

export default function SavedHeader() {
  return (
  <HeaderWithTools classMod={'saved'}>
    <NewsInfo />
  </HeaderWithTools>
  )
}