// components/SoftSkillsSection.tsx
import { Compass, BrainCircuit, Kanban, Handshake } from "lucide-react"

export default function SoftSkillsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-white">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Soft Skills & Leadership
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base">
            Human skills that strengthen collaboration, leadership, and efficiency
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
              <Compass className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Team Leadership
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Coaching ENSAM Girls basketball team and leading university teams with motivation and vision.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
              <BrainCircuit className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Problem Solving
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ability to analyze complex technical and administrative situations and deliver effective solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
              <Kanban className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Project Management
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Planning, prioritization, and monitoring using structured methodologies such as Gantt and PERT.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
              <Handshake className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Communication
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Strong interpersonal skills, customer relations, and efficient knowledge management.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
