import type { NextApiRequest, NextApiResponse } from "next";
import { Attendee } from "@/db/models/attendee";
import { User } from "@prisma/client";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: User;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<User[]>
) {
  const result = await Attendee.list();
  res.status(200).send(result);
}
