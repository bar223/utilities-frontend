import { configureStore, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Utility } from '../entities/utility/model'
type State = { items: Utility[]; tariff: number | null; token: string | null; loading: boolean; error: string | null }
const initialState: State = { items: [], tariff: null, token: localStorage.getItem('utilities.jwt'), loading: false, error: null }
export const fetchUtilities = createAsyncThunk('utilities/fetch', async () => (await axios.get<Utility[]>('/api/utilities')).data)
const slice = createSlice({ name: 'utilities', initialState, reducers: { setTariff(state, action: PayloadAction<number | null>) { state.tariff = action.payload }, setToken(state, action: PayloadAction<string | null>) { state.token = action.payload; action.payload ? localStorage.setItem('utilities.jwt', action.payload) : localStorage.removeItem('utilities.jwt') } }, extraReducers: builder => builder.addCase(fetchUtilities.pending, state => { state.loading = true }).addCase(fetchUtilities.fulfilled, (state, action) => { state.items = action.payload; state.loading = false }).addCase(fetchUtilities.rejected, state => { state.loading = false; state.error = 'Не удалось получить услуги' }) })
export const { setTariff, setToken } = slice.actions
export const store = configureStore({ reducer: { utilities: slice.reducer } })
export type RootState = ReturnType<typeof store.getState>
