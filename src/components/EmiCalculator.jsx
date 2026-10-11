import { useId, useMemo, useState } from 'react'
import { formatFull, formatINR } from '../lib/format.js'

// Illustrative defaults only. Real rates are set by each lender.
const TYPES = [
  { id: 'home', label: 'Home', rate: 8.75, years: 20, amount: [500000, 20000000, 100000], maxYears: 30, defAmount: 4000000 },
  { id: 'personal', label: 'Personal', rate: 12, years: 3, amount: [50000, 3000000, 10000], maxYears: 7, defAmount: 500000 },
  { id: 'car', label: 'Car', rate: 9.5, years: 5, amount: [100000, 5000000, 25000], maxYears: 8, defAmount: 800000 },
  { id: 'business', label: 'Business', rate: 14, years: 4, amount: [100000, 10000000, 50000], maxYears: 10, defAmount: 1500000 },
]

export function calcEmi(principal, annualRate, years) {
  const r = annualRate / 12 / 100
  const n = Math.round(years * 12)
  if (r === 0) return principal / n
  const f = Math.pow(1 + r, n)
  return (principal * r * f) / (f - 1)
}

function Slider({ id, label, value, min, max, step, onChange, display }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-muted">{label}</label>
        <output htmlFor={id} className="font-display text-lg font-semibold">{display}</output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-2 w-full cursor-pointer accent-steel"
      />
    </div>
  )
}

export default function EmiCalculator() {
  const uid = useId().replace(/:/g, '')
  const [type, setType] = useState('home')
  const cfg = TYPES.find((t) => t.id === type)
  const [amount, setAmount] = useState(cfg.defAmount)
  const [rate, setRate] = useState(cfg.rate)
  const [years, setYears] = useState(cfg.years)

  function choose(t) {
    const c = TYPES.find((x) => x.id === t)
    setType(t); setAmount(c.defAmount); setRate(c.rate); setYears(c.years)
  }

  const { emi, total, interest, share } = useMemo(() => {
    const emi = calcEmi(amount, rate, years)
    const total = emi * years * 12
    const interest = total - amount
    return { emi, total, interest, share: amount / total }
  }, [amount, rate, years])

  // Donut geometry
  const R = 70
  const C = 2 * Math.PI * R
  const principalLen = C * share

  return (
    <div className="rounded-2xl border border-navy/10 bg-white/70 p-5 shadow-[0_1px_0_rgba(11,27,46,.05)] sm:p-7">
      <h2 className="font-display text-2xl font-semibold leading-tight sm:text-[28px]">Estimate your monthly EMI</h2>

      <div role="tablist" aria-label="Loan type" className="mt-5 grid grid-cols-4 gap-1 rounded-full bg-mist-2 p-1">
        {TYPES.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={type === t.id}
            onClick={() => choose(t.id)}
            className={`rounded-full px-2 py-2 text-sm font-semibold transition-colors ${
              type === t.id ? 'bg-navy text-mist' : 'text-muted hover:text-navy'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 sm:gap-7">
        <svg viewBox="0 0 180 180" className="h-32 w-32 shrink-0 animate-bloom sm:h-40 sm:w-40" role="img"
          aria-label={`Of the total ${formatINR(total)} payable, ${formatINR(amount)} is principal and ${formatINR(interest)} is interest.`}>
          <g transform="rotate(-90 90 90)" fill="none" strokeWidth="22">
            <circle cx="90" cy="90" r={R} stroke="#D4A545" />
            <circle cx="90" cy="90" r={R} stroke="#24497A" strokeDasharray={`${principalLen} ${C}`} />
          </g>
          <text x="90" y="86" textAnchor="middle" fontSize="11" fill="#4A5A6E">Interest</text>
          <text x="90" y="106" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0B1B2E">{Math.round((1 - share) * 100)}%</text>
        </svg>
        <div className="min-w-0">
          <p className="text-sm text-muted">Monthly EMI</p>
          <p className="font-display text-4xl font-bold tracking-tight text-steel sm:text-5xl" aria-live="polite">{formatFull(emi)}</p>
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-steel" /><dt className="text-muted">Principal</dt><dd className="ml-auto whitespace-nowrap font-semibold">{formatINR(amount)}</dd></div>
            <div className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-gold" /><dt className="text-muted">Interest</dt><dd className="ml-auto whitespace-nowrap font-semibold">{formatINR(interest)}</dd></div>
            <div className="flex items-center gap-2 border-t border-navy/10 pt-1"><span className="h-3 w-3" /><dt className="text-muted">Total</dt><dd className="ml-auto whitespace-nowrap font-semibold">{formatINR(total)}</dd></div>
          </dl>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <Slider id={`${uid}-a`} label="Loan amount" value={amount} min={cfg.amount[0]} max={cfg.amount[1]} step={cfg.amount[2]} onChange={setAmount} display={formatINR(amount)} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Slider id={`${uid}-r`} label="Interest rate" value={rate} min={6} max={24} step={0.25} onChange={setRate} display={`${rate}%`} />
          <Slider id={`${uid}-y`} label="Tenure" value={years} min={1} max={cfg.maxYears} step={1} onChange={setYears} display={`${years} ${years === 1 ? 'yr' : 'yrs'}`} />
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted">
        An illustration only. Your actual rate, fees and EMI are set by the lender based on your profile.
      </p>
    </div>
  )
}
