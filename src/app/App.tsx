import { useEffect } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { UtilityTilePage } from '../pages/utility-tile/UtilityTilePage'
import { UtilityFeedPage } from '../pages/utility-feed/UtilityFeedPage'
import { TabBar } from '../widgets/tab-bar/TabBar'
import { LoginPage } from '../pages/login/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUtilities, RootState, setTariff } from './store'

export function App() {
  const dispatch = useDispatch<any>()
  const { items, tariff } = useSelector((state: RootState) => state.utilities)
  useEffect(() => { dispatch(fetchUtilities()) }, [dispatch])
  const utilities = items.filter(item => tariff === null || item.tariffRate <= tariff)
  return <div className="app-frame">
    <Routes>
      <Route path="/" element={<Navigate to="/utilities" replace />} />
      <Route path="/utilities" element={<UtilityTilePage utilities={utilities} appliedTariff={tariff} onApply={value => dispatch(setTariff(value))} />} />
      <Route path="/utilities/feed" element={<UtilityFeedPage utilities={utilities} />} />
      <Route path="/utilities/feed/:id" element={<UtilityFeedPage utilities={utilities} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<main className="not-found"><h1>Страница не найдена</h1><Link to="/utilities">Открыть коммунальные услуги</Link></main>} />
    </Routes>
    <TabBar />
  </div>
}
