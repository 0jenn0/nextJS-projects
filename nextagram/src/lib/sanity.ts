import { createClient } from "@sanity/client";
import sanityClient from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-05-20",
  //   token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
