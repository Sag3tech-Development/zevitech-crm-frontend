import React from "react";

import AuthenticationForm from "@/components/forms/authentication-form";

const AuthenticationPage = () => {
  return (
    <main className="h-[100svh] w-[100svw] bg-black overflow-hidden flex-center">
      <AuthenticationForm />
    </main>
  );
};

export default AuthenticationPage;
