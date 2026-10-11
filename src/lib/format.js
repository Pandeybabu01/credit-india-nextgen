// Indian number formatting: lakh / crore
export function formatINR(n) {
  const v = Math.round(n)
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`
  return `₹${v.toLocaleString('en-IN')}`
}
export const formatFull = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`
