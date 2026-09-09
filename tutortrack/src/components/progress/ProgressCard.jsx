export default function ProgressCard({ label, score, trend }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white">{label}</span>
        <span className="text-emerald-300">{trend}</span>
      </div>
      <div className="mt-3 h-2 rounded bg-white/10">
        <div className="h-2 rounded bg-emerald-400" style={{ width: `${score}%` }}></div>
      </div>
      <div className="mt-3 text-sm text-slate-400">{score}% complete</div>
    </div>
  )
}
