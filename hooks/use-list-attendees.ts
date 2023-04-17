import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const useListAttendees = () => {
  return useQuery({
    queryKey: ["attendees"],
    queryFn: async () => {
      const res = await fetch("/api/list-attendees");
      const data = await res.json();
      return data;
    },
  });
};
