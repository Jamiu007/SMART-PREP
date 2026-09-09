import { useProgress } from '../../hooks/useProgress.js'

export default function ParentPage() {
  const { progress, loading } = useProgress()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Family Portal</p>
          <h1 className="mt-2 text-4xl font-bold">Parent Overview</h1>
        </div>
        <button className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950">Send Message</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Panel title="Learning Progress">
          {loading ? 'Loading...' : progress.map((item) => (
            <div className="rounded-2xl border border-white/10 p-4" key={item.metric}>
              <div className="flex justify-between">
                <span className="font-semibold">{item.metric}</span>
                <span className="text-emerald-300">{item.trend}</span>
              </div>
              <div className="mt-3 w-full h-2 rounded bg-white/10">
                <div className="h-2 rounded bg-emerald-400" style={{ width: `${item.score}%` }}></div>
              </div>
            </div>
          ))}
        </Panel>
        <Panel title="Payments">
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="flex justify-between">
              <span>September</span>
              <span className="text-emerald-300">Paid</span>
            </div>
            <div className="mt-2 text-3xl font-bold">$120</div>
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
