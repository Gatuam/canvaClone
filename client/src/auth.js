import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./dbConfig/db.connect";
import UserModel from "./models/User.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
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
  events:{
    async  signIn({user, account, profile}) {
      await connectToDb();
      const existUser = await UserModel.findOne({
        email : user.email
      });
      if(!existUser){
        await UserModel.create({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account?.provider,
        })
      }
    }
  }
});
