import { Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function Icon({ kind }: { kind: 'feed' | 'add' | 'tile' | 'login' }) {
  const paths = { feed: 'M3 11 12 4l9 7M5 10v10h5v-6h4v6h5V10', add: 'M12 7v10M7 12h10M4 4h16v16H4z', tile: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z', login: 'M10 7V4h10v16H10v-3M3 12h12M11 8l4 4-4 4' }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>
}

export function TabBar() {
  const { pathname } = useLocation()
  return <Nav as="nav" className="tab-bar" aria-label="Главное меню">
    <Nav.Link as={Link} to="/utilities/feed" active={pathname.startsWith('/utilities/feed')} aria-current={pathname.startsWith('/utilities/feed') ? 'page' : undefined}><Icon kind="feed" />Лента</Nav.Link>
    <Nav.Link as="button" type="button" disabled title="Добавление будет доступно в ЛР-6"><Icon kind="add" />Добавление</Nav.Link>
    <Nav.Link as={Link} to="/utilities" active={pathname === '/utilities'} aria-current={pathname === '/utilities' ? 'page' : undefined}><Icon kind="tile" />Плитка</Nav.Link>
    <Nav.Link as="button" type="button" disabled title="Вход будет доступен в ЛР-6"><Icon kind="login" />Вход</Nav.Link>
  </Nav>
}
