interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-2">
        <h1 className="max-w-3xl text-[40px] font-semibold tracking-[-0.04em] text-[color:var(--text-primary)] lg:text-[52px]">
          {title}
        </h1>
        <p className="max-w-2xl text-[17px] leading-7 text-[color:var(--text-secondary)]">{description}</p>
      </div>
    </div>
  );
}
