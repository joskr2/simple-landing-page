import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const providers = [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ]

  return await NextAuth(req, res, {
    providers
  })
}

export { handler as GET, handler as POST }

