export default function PaymentCard({ amount, status }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/6 p-6">
      <div className="flex items-center justify-between">
        <span className="text-slate-400">Payment</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-emerald-300">{status}</span>
      </div>
      <div className="mt-4 text-3xl font-bold">${amount}</div>
    </div>
  )
}
