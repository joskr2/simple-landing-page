import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = async () => {
  const providers = [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ]

  return await NextAuth( {
    providers
  })
}

export { handler as GET, handler as POST }

