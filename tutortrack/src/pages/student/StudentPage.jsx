import { useSessions } from '../../hooks/useSessions.js'

export default function StudentPage() {
  const { sessions, loading } = useSessions()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Student Portal</p>
          <h1 className="mt-2 text-4xl font-bold">My Learning Plan</h1>
        </div>
        <button className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950">Request Help</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Panel title="Current Sessions">
          {loading ? 'Loading...' : sessions.map((session) => (
            <div className="rounded-2xl border border-white/10 p-4" key={session.id}>
              <div className="font-semibold">{session.topic}</div>
              <div className="text-sm text-slate-400">{session.date} {session.start}-{session.end}</div>
            </div>
          ))}
        </Panel>
        <Panel title="Assignments">
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="font-semibold">Reading reflection</div>
            <div className="text-sm text-slate-400">Due Sep 12</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-4 mt-3">
            <div className="font-semibold">Number patterns</div>
            <div className="text-sm text-slate-400">Due Sep 14</div>
          </div>
        </Panel>
      </div>
    </section>
  )
}

function Panel({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 text-lg font-semibold">{title}</div>
      {children}
    </section>
  )
}
