import { FormEvent, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setToken } from '../../app/store'
export function LoginPage() { const dispatch = useDispatch(); const [login, setLogin] = useState(''); const [password, setPassword] = useState(''); const [message, setMessage] = useState(''); async function submit(event: FormEvent) { event.preventDefault(); try { const { data } = await axios.post('/api/users/login', { login, password }); dispatch(setToken(data.accessToken)); setMessage('Вход выполнен') } catch { setMessage('Проверьте логин и пароль') } } return <main className="page-shell"><h1>Вход</h1><form onSubmit={submit}><input placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} /><input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} /><button type="submit">Войти</button></form><p>{message}</p></main> }
