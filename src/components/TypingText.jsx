import { useEffect, useState } from "react";

export function TypingText({ words = [] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const word = words[wordIndex % words.length];
    const complete = text === word;
    const empty = text === "";

    const timeout = setTimeout(
      () => {
        if (!deleting && complete) {
          setDeleting(true);
          return;
        }
        if (deleting && empty) {
          setDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
          return;
        }
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      },
      complete ? 1400 : deleting ? 40 : 75
    );

    return () => clearTimeout(timeout);
  }, [deleting, text, wordIndex, words]);

  if (!words || words.length === 0) return null;

  return (
    <span className="inline-flex items-center font-mono font-semibold text-cyan-300">
      {text}
      <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-300" aria-hidden="true" />
    </span>
  );
}