import type { NextApiRequest, NextApiResponse } from "next";
import { Attendee } from "@/db/attendee";
import { User } from "@prisma/client";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: User;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<User>
) {
  // TODO: validate inputs
  const data = req.body;
  console.log("data", data);
  const result = await Attendee.create({
    data,
  });
  res.status(200).json(result);
}
