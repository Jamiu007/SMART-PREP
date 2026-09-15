import { useAuth } from "../context/AuthContext.jsx";

export function useUser() {
  return useAuth();
}
