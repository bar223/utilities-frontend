import { useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { formatNumber, nextUtilityId, type Utility } from '../../entities/utility/model'
import { UtilityVideo } from '../../shared/ui/UtilityMedia'

export function UtilityFeedPage({ utilities }: { utilities: Utility[] }) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const utility = id ? utilities.find((item) => item.id === Number(id)) : utilities[0]
  useEffect(() => { document.title = utility ? `${utility.name} — Лента` : 'Лента коммунальных услуг' }, [utility])
  if (!utility) return <main className="feed-empty"><Alert variant="light">
    {utilities.length ? 'Услуга не найдена в текущем списке.' : 'По выбранному тарифу услуг нет.'}
    <Link to="/utilities" className="d-block mt-3">Вернуться к плитке</Link>
  </Alert></main>
  function next() {
    const nextId = nextUtilityId(utilities, utility!.id)
    if (nextId !== undefined) navigate(`/utilities/feed/${nextId}`)
  }
  return <main className="feed-page">
    <div className="feed-media">
      <UtilityVideo source={utility.videoUrl} poster={utility.imageUrl} name={utility.name} />
      <div className="feed-side-actions"><span className="feed-likes" aria-label={`Лайков: ${utility.likesCount}`}>♥<small>{utility.likesCount}</small></span>
        <Button className="feed-next" onClick={next} aria-label="Следующая услуга">↓</Button></div>
      <p className="feed-tariff">{formatNumber(utility.tariffRate)} руб/{utility.measurementUnit}</p>
    </div>
    <div className="feed-info"><h1>{utility.name}</h1><p>{utility.description}</p>
      <p className="consumption-norm">Норматив потребления: {formatNumber(utility.consumptionNorm)} {utility.measurementUnit}</p></div>
  </main>
}
