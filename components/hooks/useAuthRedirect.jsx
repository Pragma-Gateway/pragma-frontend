import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/authContext";

const useAuthRedirect = () => {
  const [token] = useAuth();
  const [returnValue, setReturnValue] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      setReturnValue(token);
    } else {
      setReturnValue(false);
      router.push("/login");
    }
  }, [token]);

  return returnValue;
};

export default useAuthRedirect;
