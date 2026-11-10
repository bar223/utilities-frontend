import { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { TariffFilter } from '../../features/tariff-filter/TariffFilter'
import { UtilityCard } from '../../entities/utility/UtilityCard'
import type { Utility } from '../../entities/utility/model'

interface Props { utilities: Utility[]; appliedTariff: number | null; onApply: (tariff: number | null) => void }

export function UtilityTilePage({ utilities, appliedTariff, onApply }: Props) {
  useEffect(() => { document.title = 'Коммунальные услуги — Плитка' }, [])
  return <main className="tile-page">
    <h1 className="visually-hidden">Плитка коммунальных услуг</h1>
    <TariffFilter appliedTariff={appliedTariff} onApply={onApply} />
    <div className="utility-grid">{utilities.map((utility) => <UtilityCard key={utility.id} utility={utility} />)}</div>
    {utilities.length === 0 && <Alert variant="light" role="status">По выбранному тарифу услуг нет. Передвиньте ползунок вправо и нажмите «Применить».</Alert>}
  </main>
}
