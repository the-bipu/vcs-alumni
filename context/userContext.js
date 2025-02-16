"use client";
import React, { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const { data: session } = useSession();
  const user = session?.user?.email || null;

  const yearData = new Date();
  let currentYear = yearData.getFullYear();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      setLoading(true);
      if (user) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_MAIN_ROUTE}/api/users/email?email=${user}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch user details");
          }

          const userData = await res.json();
          setUserData(userData);
          setAuthenticated(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        activeTab,
        setActiveTab,
        currentYear,
        authenticated,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
