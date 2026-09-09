import { Link } from 'react-router-dom'

export default function AuthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <section className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/8 p-10 shadow-2xl">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">TutorTrack</div>
          <h1 className="mt-3 text-4xl font-bold">Welcome back</h1>
          <p className="mt-2 text-slate-400">Sign in to your prep dashboard.</p>
        </div>
        <form className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-400">Email address</span>
            <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" value="avery@tutortrack.app" readOnly />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-400">Password</span>
            <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" value="••••••••" readOnly />
          </label>
          <Link to="/tutor" className="block rounded-2xl bg-emerald-400 px-4 py-3 text-center font-semibold text-slate-950">Enter Dashboard</Link>
        </form>
      </section>
    </main>
  )
}
