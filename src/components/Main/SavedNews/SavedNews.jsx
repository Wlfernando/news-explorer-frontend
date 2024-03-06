import NewsCardList from '../../Cards/NewsCardList/NewsCardList'
import SavedCard from '../../Cards/SavedCard/SavedCard.jsx'
import { useFetchedNewsContext } from '../../../hooks/useGlobalContext.js'

export default function SavedNews() {
  const cards = useFetchedNewsContext()
  return (
  <main style={{width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
    <div style={{width: '100%', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F5F6F7', flexGrow: 1}}>
      <NewsCardList>
        {cards.map(card => <SavedCard key={card.title} {...card}/>)}
      </NewsCardList>
    </div>
  </main>
  )
}