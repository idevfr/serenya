import type { PropsWithChildren } from "react";

function ContainerLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background max-w-screen p-10 md:p-32">{children}</div>
  );
}

export default ContainerLayout;
