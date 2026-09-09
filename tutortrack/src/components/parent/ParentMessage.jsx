export default function ParentMessage({ student, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Parent Note</div>
      <div className="mt-2 font-semibold text-white">{student}</div>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </div>
  )
}
