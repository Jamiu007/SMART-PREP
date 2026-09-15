import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileUp,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../../context/ToastContext.jsx";

const tabs = ["My plan", "Assignments", "Progress", "Messages"];
export default function StudentPage() {
  const [tab, setTab] = useState("My plan");
  const { push } = useToast();
  return (
    <section className="mx-auto max-w-5xl">
      <p className="text-sm font-semibold text-emerald-600">
        Your exam prep space
      </p>
      <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Keep going, Blessing.</h1>
          <p className="mt-2 text-sm text-slate-500">
            You have one session and two tasks to focus on this week.
          </p>
        </div>
        <button
          onClick={() => push("Message thread with Mr. Adewale opened.")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#10243c] px-4 py-3 text-sm font-bold text-white"
        >
          <MessageCircle size={17} />
          Ask your tutor
        </button>
      </div>
      <div className="mt-7 flex gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-[#0f1b2d]">
        {tabs.map((x) => (
          <button
            key={x}
            onClick={() => setTab(x)}
            className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold ${tab === x ? "bg-emerald-500 text-white" : "text-slate-500"}`}
          >
            {x}
          </button>
        ))}
      </div>
      {tab === "My plan" && <Plan />}
      {tab === "Assignments" && <Assignments push={push} />}{" "}
      {tab === "Progress" && <Progress />}
      {tab === "Messages" && <Messages push={push} />}
    </section>
  );
}
function Plan() {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <Card title="Up next">
        <div className="rounded-2xl bg-[#10243c] p-5 text-white">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-200">
              CONFIRMED
            </span>
            <CalendarDays size={20} className="text-emerald-300" />
          </div>
          <p className="mt-6 text-xs font-bold text-slate-300">
            WEDNESDAY · 4:00–5:00 PM
          </p>
          <h2 className="mt-2 text-xl font-extrabold">
            Mathematics: Differentiation
          </h2>
          <p className="mt-2 text-sm text-slate-300">with Mr. Adewale</p>
          <button className="mt-6 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-[#10243c]">
            Session details
          </button>
        </div>
        <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
          Need a different time? Propose one and your tutor must confirm it.
        </p>
      </Card>
      <Card title="This week">
        <div className="space-y-4">
          <Goal label="Assignments complete" value="3 of 5" width="60%" />
          <Goal label="Mathematics syllabus" value="60%" width="60%" />
          <Goal label="Attendance" value="94%" width="94%" />
        </div>
      </Card>
    </div>
  );
}
function Assignments({ push }) {
  return (
    <div className="mt-6 space-y-4">
      <Card title="Due soon">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex justify-between gap-4">
            <div>
              <p className="font-extrabold">Differentiation past questions</p>
              <p className="mt-1 text-sm text-amber-800">
                Due tomorrow, 11:59 pm · Mathematics
              </p>
            </div>
            <Clock3 className="text-amber-600" />
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Complete questions 1–20. Upload a photo of your written work, or add
            a text answer.
          </p>
          <button
            onClick={() =>
              push(
                "Submission area opened. Attach a photo, file, or text answer.",
              )
            }
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#10243c] px-4 py-2.5 text-sm font-bold text-white"
          >
            <FileUp size={16} />
            Submit work
          </button>
        </div>
      </Card>
      <Card title="Recently graded">
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4">
          <div>
            <p className="font-bold">Quadratic equations drill</p>
            <p className="mt-1 text-sm text-emerald-700">
              Tutor feedback: Great method—double-check signs in Q7.
            </p>
          </div>
          <span className="text-2xl font-extrabold text-emerald-700">
            18/20
          </span>
        </div>
      </Card>
    </div>
  );
}
function Progress() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <Card title="Mathematics syllabus">
        <div className="space-y-3">
          {[
            "Algebraic expressions",
            "Quadratic equations",
            "Differentiation",
          ].map((x) => (
            <p key={x} className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={17} className="text-emerald-500" />
              {x}
            </p>
          ))}
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <span className="h-4 w-4 rounded border border-slate-300" />
            Probability · coming up
          </p>
        </div>
      </Card>
      <Card title="Your mock scores">
        <div className="flex h-44 items-end gap-5 border-b border-l border-slate-200 px-5 pb-2">
          <Bars h="42%" n="42" l="Feb" />
          <Bars h="56%" n="56" l="Mar" />
          <Bars h="63%" n="63" l="Apr" />
          <Bars h="78%" n="78" l="May" />
        </div>
        <p className="mt-4 text-sm font-semibold text-emerald-600">
          You’re up 15 points since February.
        </p>
      </Card>
    </div>
  );
}
function Messages({ push }) {
  return (
    <div className="mt-6 flex min-h-[430px] flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-200 dark:bg-[#0f1b2d] dark:ring-slate-800">
      <div className="border-b border-slate-100 pb-4">
        <p className="font-bold">Mr. Adewale</p>
        <p className="text-xs text-slate-500">Mathematics tutor</p>
      </div>
      <div className="flex-1 py-6 text-sm">
        <p className="max-w-sm rounded-2xl rounded-tl-sm bg-slate-100 p-3 dark:bg-slate-800">
          Good afternoon sir, is Question 5 compulsory?
        </p>
        <p className="ml-auto mt-4 max-w-sm rounded-2xl rounded-tr-sm bg-emerald-500 p-3 text-white">
          Focus on Questions 1–4 today. We’ll review Question 5 in our session.
        </p>
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-xl bg-slate-100 px-4 py-3 text-sm dark:bg-slate-800"
          placeholder="Write a message…"
        />
        <button
          onClick={() => push("Message sent.")}
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
function Goal({ label, value, width }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-emerald-500" style={{ width }} />
      </div>
    </div>
  );
}
function Bars({ h, n, l }) {
  return (
    <div className="flex flex-1 flex-col justify-end gap-1 text-center">
      <small className="font-bold text-emerald-600">{n}</small>
      <span className="rounded-t bg-emerald-400" style={{ height: h }} />
      <small className="text-xs text-slate-500">{l}</small>
    </div>
  );
}
