export const GOOGLE_SIGNIN_CONFIGURATIONS = {
  scopes: [], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '930089845590-s078k7ii6rt64eoaor9id17p21gdk3v9.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId:
    '930089845590-h9l64aorv23u7egacsjt6svi2t4mj3v1.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
};

export enum LOGINTYPES {
  FACEBOOK,
  GOOGLE,
  EMAIL,
}
