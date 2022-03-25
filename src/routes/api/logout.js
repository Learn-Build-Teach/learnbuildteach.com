import cookie from "cookie";

export const get = async () => {
  const headers = {
    'Set-Cookie': cookie.serialize('lbt_session', '', {
      httpOnly: false,
      maxAge: 60*60*24*7,
      path: '/',
      sameSite: 'lax'
    }),
    location: '/'
  }
  
  return{
    status: 303,
    headers
  };
}