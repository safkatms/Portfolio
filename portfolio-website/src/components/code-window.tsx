import { vars } from "./motion/vars";

const source = `public sealed class Engineer
{
    public string Name => "Safkat Mahmud Sakib";
    public string Role => "Software Engineer";
    public string Company => "ByteCode Limited";

    public string[] Stack =>
        [".NET 8", "React", "SQL Server"];

    public string[] Focus =>
    [
        "Backend architecture",
        "REST APIs & database design",
        "Multi-tenant SaaS",
    ];
}`;

type Token = { text: string; cls: string };

const KEYWORDS = /^(public|sealed|class|string)$/;

/** Minimal C# highlighter — enough for this static snippet. */
function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  const re = /("[^"]*")|([A-Za-z_][\w]*)|(=>|[[\]{}(),;])|(\s+)|(.)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    const [text, str, word, punct] = m;
    if (str) tokens.push({ text, cls: "text-accent" });
    else if (word && KEYWORDS.test(word)) tokens.push({ text, cls: "text-accent-soft" });
    else if (word === "Engineer") tokens.push({ text, cls: "text-fg" });
    else if (word) tokens.push({ text, cls: "text-fg-muted" });
    else if (punct) tokens.push({ text, cls: "text-fg-subtle" });
    else tokens.push({ text, cls: "" });
  }
  return tokens;
}

export default function CodeWindow() {
  const lines = source.split("\n");
  return (
    <figure
      className="glass glass-border relative overflow-hidden rounded-xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]"
      aria-label="Code snippet describing Safkat as a C# class"
    >
      {/* Top light edge */}
      <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Title bar */}
      <div className="flex items-center gap-4 border-b border-line/80 bg-card/40 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="rounded-md border border-line bg-ink/60 px-2.5 py-0.5 font-mono text-xs text-fg-muted">
          Engineer.cs
        </span>
      </div>

      {/* Code — each line "types" in sequence; final render is the full snippet */}
      <pre className="overflow-x-auto py-4 font-mono text-[12px] leading-6 sm:text-[13px]">
        <code className="block min-w-max">
          {lines.map((line, i) => (
            <span key={i} className="flex pr-5">
              <span aria-hidden="true" className="w-10 shrink-0 select-none pr-4 text-right text-fg-subtle/60">
                {i + 1}
              </span>
              <span className="code-line" style={vars({ "--i": i })}>
                {line.length === 0
                  ? " "
                  : tokenize(line).map((t, j) => (
                      <span key={j} className={t.cls}>
                        {t.text}
                      </span>
                    ))}
                {i === lines.length - 1 && (
                  <span aria-hidden="true" className="caret ml-1 inline-block h-[1.05em] w-[7px] translate-y-[3px] bg-accent/80" />
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>

      {/* Status bar */}
      <figcaption className="flex items-center justify-between border-t border-line/80 px-4 py-2 font-mono text-[11px] text-fg-subtle">
        <span className="flex items-center gap-2">
          <span className="pulse-ring relative h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          C# · .NET 8
        </span>
        <span>UTF-8</span>
      </figcaption>
    </figure>
  );
}
