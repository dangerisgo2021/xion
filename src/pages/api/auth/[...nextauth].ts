import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getClient } from "database/mongodb";

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    callbacks: {
      async session({ session, user }) {
        console.log({ session, user });
        return {
          ...session,
          user: {
            ...session.user,
            id: user.id,
          },
        };
      },
    },
    providers: [
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),
    ],
    adapter: MongoDBAdapter({
      db: (await getClient).db(process.env.MONGODB_NAME),
    }),
  });
}
