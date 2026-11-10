import { useEffect, useState, type FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'

interface Props { appliedTariff: number | null; onApply: (tariff: number | null) => void }

export function TariffFilter({ appliedTariff, onApply }: Props) {
  const [sliderTariff, setSliderTariff] = useState(appliedTariff ?? 101)
  useEffect(() => { setSliderTariff(appliedTariff ?? 101) }, [appliedTariff])
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onApply(sliderTariff === 101 ? null : sliderTariff)
  }
  return <Form onSubmit={submit} className="tariff-filter">
    <div className="tariff-label"><Form.Label htmlFor="tariffRate">Тариф до:</Form.Label>
      <output htmlFor="tariffRate">{sliderTariff === 101 ? 'не ограничен' : `${sliderTariff} руб.`}</output></div>
    <Form.Range id="tariffRate" name="tariffRate" min={0} max={101} step={1} value={sliderTariff}
      onChange={(event) => setSliderTariff(Number(event.target.value))} />
    <Button type="submit" className="primary-button">Применить</Button>
    <span className="visually-hidden" aria-live="polite">{appliedTariff === null ? 'Фильтр не установлен' : `Применён тариф до ${appliedTariff}`}</span>
  </Form>
}
