export default function ScheduleCard({ title, date, time }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/6 p-6">
      <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
        Session
      </div>
      <div className="mt-2 text-xl font-bold text-white">{title}</div>
      <div className="mt-2 text-sm text-slate-400">
        {date} · {time}
      </div>
    </section>
  );
}
