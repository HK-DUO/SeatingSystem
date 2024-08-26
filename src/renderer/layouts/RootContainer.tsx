import {ReactNode} from "react";

function RootContainer({ children }: { children: ReactNode }) {
  return <div className="root-container">
    {children}
  </div>;
}

export default RootContainer;
