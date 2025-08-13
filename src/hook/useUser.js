import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useUser() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleUser = async () => {
      if (session?.user && !user) {
        try {
          setLoading(true);

          // First try to create/get user
          const createResponse = await fetch("/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: session.user.email,
              name: session.user.name,
              image: session.user.image,
              provider: "google",
            }),
          });

          if (createResponse.ok) {
            const result = await createResponse.json();
            setUser(result.user);
          }
        } catch (error) {
          console.error("Error handling user:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    handleUser();
  }, [session, user]);

  return {
    user,
    session,
    loading: loading || status === "loading",
    isAuthenticated: status === "authenticated",
  };
}
