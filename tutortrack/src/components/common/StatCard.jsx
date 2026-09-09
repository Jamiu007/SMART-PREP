export default function StatCard({ label, value, detail }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
      <div className="mt-2 text-3xl font-bold text-white">{value}</div>
      {detail && <div className="mt-2 text-xs text-slate-400">{detail}</div>}
    </div>
  )
}
