import cookie from "cookie";

// export const handle = async ({request, resolve}) => {
//   console.log("handle");
//   // console.log({request});
//    const response = await resolve(request);
//    return {
//      ...response
//    }
// }

 export async function getSession(request) {
   const cookies = cookie.parse(request?.headers?.cookie || '');
   console.log("Get session cookies", cookies);

  if(!cookies.lbt_session){
    return { authenticated: false};
  }
  const lbtSession = JSON.parse(cookies?.lbt_session);
  
  if(!lbtSession.access_token){
    return { authenticated: false};
  }
  else {
    const req = await fetch("https://discord.com/api/v9/users/@me", {
      method: 'GET',
      headers: {'Authorization': `Bearer ${lbtSession.access_token}`}
    });
    const discordUser = await req.json();
    const {id, username, email} = discordUser;

    return {authenticated: true, id, username, email}
  }
}