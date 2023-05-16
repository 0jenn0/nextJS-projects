import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type EmailPayload = {
  email: string;
  subject: string;
  message: string;
};

export default async function sendEmail(
  body: Body,
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
}
