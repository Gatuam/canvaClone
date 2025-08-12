export const runtime = "nodejs";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./dbConfig/db.connect";
import { User } from "@/models/User.model";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      
     
      if (account && user) {
        await connectToDb();
        const dbUser = await User.findOne({
          email: user.email
        });
        if (dbUser) {
          token.userId = dbUser._id.toString();
          console.log("User ID set in token:", token.userId);
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      session.idToken = token.idToken;
      session.userId = token.userId;
      console.log("Session created with userId:", session.userId);
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
        const newUser = await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account?.provider,
        });
        console.log("New user created with ID:", newUser._id); 
      }
    },
  },
});