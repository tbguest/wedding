import { prisma } from "../client";
import { Prisma } from "@prisma/client";

const create = ({ data }: { data: Prisma.UserCreateInput }) => {
  return prisma.user.create({
    data,
  });
};

const list = () => {
  return prisma.user.findMany();
};

export const Attendee = {
  create,
  list,
};
