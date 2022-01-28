import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/authContext";

const useAuthRedirect = () => {
  const [token] = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  return token;
};

export default useAuthRedirect;
