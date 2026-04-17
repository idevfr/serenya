import type { PropsWithChildren } from "react";

function ContainerLayout({ children }: PropsWithChildren) {
  return <div className="bg-background mx-32 max-w-screen">{children}</div>;
}

export default ContainerLayout;
