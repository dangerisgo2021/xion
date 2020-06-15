export const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
};
console.log("process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI : ", process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI)