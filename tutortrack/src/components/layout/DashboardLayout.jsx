import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, Calendar, GraduationCap, Users, CreditCard, MessageCircle } from 'lucide-react'

const links = [
  { label: 'Tutor', icon: GraduationCap, to: '/tutor' },
  { label: 'Student', icon: Users, to: '/student' },
  { label: 'Parent', icon: CreditCard, to: '/parent' },
]

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/10 bg-slate-900 p-6">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-emerald-300">TutorTrack</div>
          <div className="mt-2 text-2xl font-bold">Smart Prep</div>
        </div>
        <nav className="space-y-2">
          {links.map((item) => {
            const Icon = item.icon
            return (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 ${isActive ? 'bg-emerald-400 text-slate-950' : 'text-slate-300 hover:bg-white/8'}`}> 
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400">
              <Calendar size={20} />
              <span>Schedule</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400">
              <MessageCircle size={20} />
              <span>Messages</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
          </div>
        </nav>
      </aside>
      <main className="ml-72 min-h-screen p-10">
        <Outlet />
      </main>
    </div>
  )
}
