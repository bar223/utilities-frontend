import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Utility } from './model'
import { formatNumber } from './model'
import { UtilityImage } from '../../shared/ui/UtilityMedia'

export function UtilityCard({ utility }: { utility: Utility }) {
  return <Card as={Link} to={`/utilities/feed/${utility.id}`} className="utility-card" data-testid="utility-card">
    <UtilityImage className="utility-card-image" source={utility.imageUrl} alt={utility.name} />
    <Card.Body>
      <Card.Title as="h2">{utility.name}</Card.Title>
      <p className="card-tariff">{formatNumber(utility.tariffRate)} руб/{utility.measurementUnit}</p>
      <p className="card-likes"><span aria-hidden="true">♥</span> <span aria-label={`Лайков: ${utility.likesCount}`}>{utility.likesCount}</span></p>
    </Card.Body>
  </Card>
}
