import React from "react";

/**
 * Renders text containing **bold** segments, turning them into
 * <strong> elements styled with the accent/primary text color.
 */
export function RichText({ text }: { text: string }): React.ReactElement {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
