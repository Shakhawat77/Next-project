import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import  clientPromise from "@/lib/dbConnect";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const client = await clientPromise;
        const users = client.db().collection("users");

        const user = await users.findOne({ email: credentials?.email });
        if (!user) return null;

     
        

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
