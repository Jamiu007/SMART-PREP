import {
  Bell,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../../context/ToastContext.jsx";
const tabs = [
  "Overview",
  "Attendance",
  "Assignments",
  "Progress",
  "Payments",
  "Messages",
];
export default function ParentPage() {
  const [tab, setTab] = useState("Overview");
  const { push } = useToast();
  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-emerald-600">
            Blessing’s learning update
          </p>
          <h1 className="mt-1 text-3xl font-extrabold">
            Hello, Mrs. Nwachukwu.
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            A clear, read-only view of how Blessing is doing.
          </p>
        </div>
        <button
          onClick={() => push("Notification preferences opened.")}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold dark:border-slate-700 dark:bg-[#0f1b2d]"
        >
          <Bell size={16} />
          Alerts
        </button>
      </div>
      <div className="mt-7 flex gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-[#0f1b2d]">
        {tabs.map((x) => (
          <button
            key={x}
            onClick={() => setTab(x)}
            className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold ${tab === x ? "bg-emerald-500 text-white" : "text-slate-500"}`}
          >
            {x}
          </button>
        ))}
      </div>
      {tab === "Overview" && <Overview />}
      {tab === "Attendance" && <Attendance />}
      {tab === "Assignments" && <Assignments />}
      {tab === "Progress" && <Progress />}
      {tab === "Payments" && <Payments push={push} />}{" "}
      {tab === "Messages" && <Messages push={push} />}
    </section>
  );
}
function Overview() {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      <Card title="Upcoming session">
        <div className="rounded-2xl bg-[#10243c] p-5 text-white">
          <CalendarDays className="text-emerald-300" />
          <p className="mt-5 text-xs font-bold text-emerald-200">
            WEDNESDAY · 4:00–5:00 PM
          </p>
          <p className="mt-2 text-xl font-extrabold">
            Mathematics: Differentiation
          </p>
          <p className="mt-1 text-sm text-slate-300">
            with Mr. Adewale · Confirmed
          </p>
        </div>
      </Card>
      <Card title="This month at a glance">
        <div className="grid grid-cols-3 gap-3">
          <Kpi n="94%" l="Attendance" />
          <Kpi n="60%" l="Syllabus" />
          <Kpi n="3/5" l="Tasks done" />
        </div>
        <p className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">
          Blessing improved her latest mock score to 78%.
        </p>
      </Card>
    </div>
  );
}
function Attendance() {
  return (
    <div className="mt-6">
      <Card title="Attendance history">
        <div className="space-y-3">
          {[
            ["14 May", "Mathematics", "Present"],
            ["10 May", "Mathematics", "Present"],
            ["7 May", "Mathematics", "Late"],
            ["3 May", "Mathematics", "Present"],
          ].map((x) => (
            <div
              key={x[0]}
              className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
            >
              <div>
                <p className="font-bold">{x[1]}</p>
                <p className="text-xs text-slate-500">{x[0]}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${x[2] === "Late" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}
              >
                {x[2]}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
function Assignments() {
  return (
    <div className="mt-6">
      <Card title="Assignment completion">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-bold text-amber-900">
            Differentiation past questions
          </p>
          <p className="mt-1 text-sm text-amber-800">
            Due tomorrow · Not submitted yet
          </p>
        </div>
        <div className="mt-3 rounded-xl bg-emerald-50 p-4">
          <p className="font-bold text-emerald-900">
            Quadratic equations drill
          </p>
          <p className="mt-1 text-sm text-emerald-800">
            Graded 18/20 · Tutor feedback available
          </p>
        </div>
      </Card>
    </div>
  );
}
function Progress() {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      <Card title="Syllabus progress">
        <p className="text-4xl font-extrabold text-emerald-600">60%</p>
        <p className="mt-1 text-sm text-slate-500">
          Mathematics topics covered
        </p>
        <div className="mt-5 h-3 rounded-full bg-slate-100">
          <div className="h-full w-3/5 rounded-full bg-emerald-500" />
        </div>
      </Card>
      <Card title="Mock test trend">
        <div className="flex h-40 items-end gap-5 border-b border-l border-slate-200 px-5">
          <B h="42%" />
          <B h="56%" />
          <B h="63%" />
          <B h="78%" />
        </div>
        <p className="mt-4 text-sm font-bold text-emerald-600">
          78% latest score · improving
        </p>
      </Card>
    </div>
  );
}
function Payments({ push }) {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-[1.1fr_.9fr]">
      <Card title="Payment status">
        <div className="rounded-2xl bg-[#10243c] p-5 text-white">
          <CircleDollarSign className="text-emerald-300" />
          <p className="mt-5 text-sm text-slate-300">May tuition balance</p>
          <p className="mt-1 text-4xl font-extrabold">₦36,000</p>
          <p className="mt-2 text-sm text-amber-200">Due 20 May</p>
          <button
            onClick={() => push("Paystack payment flow would open here.")}
            className="mt-5 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-[#10243c]"
          >
            Pay securely
          </button>
        </div>
      </Card>
      <Card title="Payment history">
        <div className="rounded-xl bg-emerald-50 p-4">
          <p className="font-bold">April tuition</p>
          <p className="mt-1 text-sm text-emerald-700">₦36,000 · Paid 19 Apr</p>
          <button
            onClick={() => push("Receipt opened.")}
            className="mt-3 text-sm font-bold text-emerald-700"
          >
            View receipt →
          </button>
        </div>
      </Card>
    </div>
  );
}
function Messages({ push }) {
  return (
    <div className="mt-6 flex min-h-[400px] flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-200 dark:bg-[#0f1b2d] dark:ring-slate-800">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
        <MessageCircle size={18} className="text-emerald-600" />
        <div>
          <p className="font-bold">Mr. Adewale</p>
          <p className="text-xs text-slate-500">Blessing’s tutor</p>
        </div>
      </div>
      <div className="flex-1 py-6">
        <p className="max-w-sm rounded-2xl bg-slate-100 p-3 text-sm dark:bg-slate-800">
          Blessing made a strong improvement in her mock test this month.
        </p>
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-xl bg-slate-100 px-4 py-3 text-sm dark:bg-slate-800"
          placeholder="Ask the tutor a question…"
        />
        <button
          onClick={() => push("Message sent to Mr. Adewale.")}
          className="grid h-11 w-11 place-items-center rounded-xl bg-[#10243c] text-white"
        >
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}
function Card({ title, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-[#0f1b2d] dark:ring-slate-800">
      <h2 className="mb-5 font-extrabold">{title}</h2>
      {children}
    </section>
  );
}
function Kpi({ n, l }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800">
      <p className="text-xl font-extrabold">{n}</p>
      <p className="mt-1 text-[11px] text-slate-500">{l}</p>
    </div>
  );
}
function B({ h }) {
  return (
    <span className="flex-1 rounded-t bg-emerald-400" style={{ height: h }} />
  );
}
