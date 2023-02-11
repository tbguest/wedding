import { User } from "@prisma/client";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

type UserNoId = Omit<User, "id" | "createdAt">;

// TODO: Think about this abstraction and whether full control of the options
// should be passed to outside
// See discussion here: https://stackoverflow.com/questions/74622064/typescript-not-correctly-inferring-correctly-when-trying-to-wrap-usemutation-in
export const useCreateAttendee = (
  options?: UseMutationOptions<unknown, unknown, UserNoId, unknown>
) => {
  return useMutation(
    (data: UserNoId) => {
      return fetch("/api/create-attendee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    { ...options }
  );
};
