import { User } from "@prisma/client";

export async function useCreateAttendee(data: User) {
  const res = await fetch("/api/create-attendee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
