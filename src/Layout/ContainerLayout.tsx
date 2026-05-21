import type { PropsWithChildren } from "react";

function ContainerLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background max-w-screen p-10 sm:p-20 lg:p-32">
      {children}
    </div>
  );
}

export default ContainerLayout;
