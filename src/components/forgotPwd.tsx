'use client'
import { useRouter } from "next/navigation";
import React from "react";


const ForgotPwd = () => {
  const router = useRouter();

  const handleSave = () => {
    router?.push("/");
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <p>forgot your password .</p>
    </div>
  );
};

export default ForgotPwd;
