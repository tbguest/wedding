import { prisma } from "./client";
import { Prisma } from "@prisma/client";

const create = ({ data }: { data: Prisma.UserCreateInput }) => {
  return prisma.user.create({
    data: data,
  });
};

export const Attendee = {
  create,
};
