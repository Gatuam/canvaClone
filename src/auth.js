import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./dbConfig/db.connect";
import {User} from "@/models/User.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.idToken = token.idToken;
      return session;
    },
  },
  events: {
    async signIn({ user, account }) {
      await connectToDb();
      const existUser = await User.findOne({
        email: user.email,
      });
      if (!existUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account?.provider,
        });
      }
    },
  },
});
