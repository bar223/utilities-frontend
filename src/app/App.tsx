import { useState } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { UtilityTilePage } from '../pages/utility-tile/UtilityTilePage'
import { UtilityFeedPage } from '../pages/utility-feed/UtilityFeedPage'
import { TabBar } from '../widgets/tab-bar/TabBar'
import { UTILITIES_MOCK } from '../entities/utility/mock'
import { selectUtilities } from '../entities/utility/model'

export function App() {
  // Поднятое состояние передаётся страницам явно через props. Без Context/Redux.
  const [appliedTariff, setAppliedTariff] = useState<number | null>(null)
  const utilities = selectUtilities(UTILITIES_MOCK, appliedTariff)
  return <div className="app-frame">
    <Routes>
      <Route path="/" element={<Navigate to="/utilities" replace />} />
      <Route path="/utilities" element={<UtilityTilePage utilities={utilities} appliedTariff={appliedTariff} onApply={setAppliedTariff} />} />
      <Route path="/utilities/feed" element={<UtilityFeedPage utilities={utilities} />} />
      <Route path="/utilities/feed/:id" element={<UtilityFeedPage utilities={utilities} />} />
      <Route path="*" element={<main className="not-found"><h1>Страница не найдена</h1><Link to="/utilities">Открыть коммунальные услуги</Link></main>} />
    </Routes>
    <TabBar />
  </div>
}
