type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-300 via-sky-500 to-fuchsia-400 shadow-lg shadow-cyan-500/30" />
      {description ? <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
    </div>
  );
}
