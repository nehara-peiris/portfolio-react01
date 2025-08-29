import type { PropsWithChildren } from "react";
export default function SectionHeading({ children }: PropsWithChildren) {
    return <p className="uppercase tracking-widest text-xs text-muted">{children}</p>;
}