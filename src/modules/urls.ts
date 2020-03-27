export const facebookGraphUrl = (token: string) =>
  'https://graph.facebook.com/v2.5/me?fields=email,name,picture.type(large)&access_token=' +
  token;
