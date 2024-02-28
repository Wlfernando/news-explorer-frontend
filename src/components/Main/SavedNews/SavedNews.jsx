import NewsCardList from '../../Cards/NewsCardList/NewsCardList'
import SavedHeader from '../../Header/SavedHeader/SavedHeader.jsx'
import SavedCard from '../../Cards/SavedCard/SavedCard.jsx'

export default function SavedNews() {
  return <main style={{width: '100%'}}>
    <SavedHeader />
    <div style={{width: '100%', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F5F6F7'}}>
      <NewsCardList>
        {Array(5).fill(<SavedCard />)}
      </NewsCardList>
    </div>
  </main>
}