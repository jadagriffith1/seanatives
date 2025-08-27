"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Guest = {
  id: string;
  bookingId: string;
  name: string;
  email: string;
  phone: string;
};

interface GuestsContextType {
  guests: Guest[];
  refreshGuests: () => Promise<void>;
  addGuest: (guest: Omit<Guest, "id">) => Promise<boolean>;
  isLoading: boolean;
}

const GuestsContext = createContext<GuestsContextType | undefined>(undefined);

export function useGuests() {
  const context = useContext(GuestsContext);
  if (context === undefined) {
    throw new Error("useGuests must be used within a GuestsProvider");
  }
  return context;
}

interface GuestsProviderProps {
  children: ReactNode;
}

export function GuestsProvider({ children }: GuestsProviderProps) {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGuests = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/guests");
      if (res.ok) {
        const data: Guest[] = await res.json();
        setGuests(data);
      } else {
        console.error("Failed to fetch guests");
      }
    } catch (error) {
      console.error("Error fetching guests:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshGuests = fetchGuests;

  const addGuest = async (guestData: Omit<Guest, "id">): Promise<boolean> => {
    try {
      const res = await fetch("/api/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guestData),
      });

      if (res.ok) {
        const newGuest = await res.json();
        setGuests((prev) => [...prev, newGuest]);
        return true;
      } else {
        console.error("Failed to add guest");
        return false;
      }
    } catch (error) {
      console.error("Error adding guest:", error);
      return false;
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const value: GuestsContextType = {
    guests,
    refreshGuests,
    addGuest,
    isLoading,
  };

  return (
    <GuestsContext.Provider value={value}>{children}</GuestsContext.Provider>
  );
}
