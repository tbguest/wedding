import type { NextApiRequest, NextApiResponse } from "next";
import { Attendee } from "@/db/models/attendee";
import { User } from "@prisma/client";
import { z } from "zod";

const schema = z.object({
  attending: z.boolean(),
  name: z.string(),
  additions: z.string().optional(),
  message: z.string().optional(),
});

interface ExtendedNextApiRequest extends NextApiRequest {
  body: User;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<User>
) {
  const data = req.body;
  schema.parse({ ...data });
  const result = await Attendee.create({
    data,
  });
  res.status(200).json(result);
}
