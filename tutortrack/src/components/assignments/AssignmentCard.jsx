export default function AssignmentCard({ title, due, status }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white">{title}</span>
        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
          {status}
        </span>
      </div>
      <div className="mt-3 text-sm text-slate-400">Due {due}</div>
    </div>
  );
}
