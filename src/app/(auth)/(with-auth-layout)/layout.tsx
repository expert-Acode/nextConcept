import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h4>Inner layout</h4>
      {children}
    </div>
  );
};

export default layout;
