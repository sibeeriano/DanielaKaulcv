interface SectionHeaderProps {
  label: string;
  title: string;
  dark?: boolean;
}

export default function SectionHeader({ label, title, dark }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <p
        className={`text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${
          dark ? "text-gold-soft" : "text-gold"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-serif text-4xl font-bold ${dark ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
    </div>
  );
}
