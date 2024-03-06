import './NewsCardList.css';

export default function NewsCardList({children}) {
  return (
  <ul className="news-card-list">
    {children}
  </ul>
  )
}