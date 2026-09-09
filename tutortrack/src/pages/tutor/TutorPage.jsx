import { useSessions } from '../../hooks/useSessions.js'
import { useAssignments } from '../../hooks/useAssignments.js'
import { useProgress } from '../../hooks/useProgress.js'

export default function TutorPage() {
  const { sessions, loading: sessionsLoading } = useSessions()
  const { assignments, loading: assignmentsLoading } = useAssignments()
  const { progress, loading: progressLoading } = useProgress()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Tutor Dashboard</p>
          <h1 className="mt-2 text-4xl font-bold">TutorTrack</h1>
        </div>
        <button className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950">Create Session</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MetricCard label="Sessions" value={sessions.length || 3} />
        <MetricCard label="Assignments" value={assignments.length || 3} />
        <MetricCard label="Students" value="12" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Panel title="Upcoming sessions">
          {sessionsLoading ? 'Loading...' : sessions.map((session) => (
            <div className="mb-3 rounded-2xl border border-white/10 p-4" key={session.id}>
              <div className="flex justify-between">
                <span className="font-semibold">{session.topic}</span>
                <span className="text-emerald-300">{session.status}</span>
              </div>
              <div className="text-sm text-slate-400 mt-2">{session.date} · {session.start}-{session.end}</div>
            </div>
          ))}
        </Panel>
        <Panel title="Progress">
          {(progressLoading ? [] : progress).map((item) => (
            <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 p-4" key={item.metric}>
              <span>{item.metric}</span>
              <span className="font-bold">{item.score}%</span>
            </div>
          ))}
        </Panel>
      </div>

      <Panel title="Assignments">
        {assignmentsLoading ? 'Loading...' : assignments.map((a) => (
          <div className="flex justify-between rounded-2xl border border-white/10 p-4" key={a.id}>
            <div>
              <div className="font-semibold">{a.title}</div>
              <div className="text-sm text-slate-400">due {a.due}</div>
            </div>
            <span className="rounded-full bg-white/8 px-3 py-1 text-xs">{a.status}</span>
          </div>
        ))}
      </Panel>
    </section>
  )
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-2 text-4xl font-bold">{value}</div>
    </div>
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
