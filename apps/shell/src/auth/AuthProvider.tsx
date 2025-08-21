// apps/shell/src/auth/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
// (mô phỏng) bạn có thể dùng @react-keycloak/web
const AuthCtx = createContext({ token: "", isAuthenticated: false });
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState("");
  useEffect(() => {
    // TODO: init OIDC, lấy token
    setToken(sessionStorage.getItem("token") ?? "");
  }, []);
  return (
    <AuthCtx.Provider value={{ token, isAuthenticated: !!token }}>
      {children}
    </AuthCtx.Provider>
  );
}