import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function ContainerPrin({children}: Props) {
  return (
    <main className="max-w-screen mx-auto">
      {children}
    </main>
  )
}

export default ContainerPrin; // <- sem parênteses
