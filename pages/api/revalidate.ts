import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Revalidating static pages");
    await res.revalidate("/");

    return res.json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating", err);
    return res.status(500).send("Error revalidating");
  }
}
