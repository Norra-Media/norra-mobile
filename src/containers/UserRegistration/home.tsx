import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import KeyboardShift from '../../components/keyboardShift';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import FacebookLogo from '../../../assets/facebook_logo.svg';
import GoogleLogo from '../../../assets/google_logo.svg';
import NorraLogo from '../../../assets/norra_logo.svg';
import SignupNetworkWeb from '../../../assets/signup_network_web.svg';

export default class Home extends Component {
  state = {
    email: '',
    user: null,
  };

  loginUsingGoogle = async () => {
    GoogleSignin.configure({
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
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = {
        name: userInfo.user.name,
        email: userInfo.user.email,
        photo: userInfo.user.photo,
        id: userInfo.user.id,
        loginType: 'GOOGLE',
      };
      this.setState({user});
      console.log(user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  loginUsingFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          if (result && result.grantedPermissions) {
            console.log(
              'Login success with permissions: ' +
                result.grantedPermissions.toString(),
            );
            const data = await AccessToken.getCurrentAccessToken();
            if (data) {
              console.log(data.accessToken.toString());
              this.initUser(data.accessToken.toString());
            }
          }
        }
      }
    } catch (error) {
      console.log('Login fail with error: ' + error);
    }
  };

  initUser(token: string) {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,picture.type(large)&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(userInfo => {
        const user = {
          name: userInfo.name,
          email: userInfo.email,
          photo: userInfo.picture.data.url,
          id: userInfo.id,
          loginType: 'FACEBOOK',
        };
        this.setState({user});
        console.log(user);
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK');
      });
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <KeyboardShift>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <SignupNetworkWeb style={Styles.backgroundImage} />
            <View style={Styles.childContainer}>
              <View style={Styles.innerContainer}>
                <NorraLogo style={Styles.logo} />
                <TouchableOpacity
                  style={[Styles.button, Styles.blueButton]}
                  onPress={this.loginUsingFacebook}>
                  <FacebookLogo style={Styles.signUpLogo} />
                  <Text style={[Styles.buttonText, Styles.blueText]}>
                    Continue with Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Styles.button, Styles.blueButton]}
                  onPress={this.loginUsingGoogle}>
                  <GoogleLogo style={Styles.signUpLogo} />
                  <Text style={[Styles.buttonText, Styles.blueText]}>
                    Continue with Google
                  </Text>
                </TouchableOpacity>
                <View style={Styles.divider}>
                  <View style={Styles.greyLine} />
                  <Text style={Styles.dividerText}>Or</Text>
                  <View style={Styles.greyLine} />
                </View>
                <Text style={Styles.headerText}>Email Address</Text>
                <TextInput
                  style={[
                    Styles.button,
                    Styles.blueButton,
                    Styles.blueInputField,
                  ]}
                  placeholder={'Enter your email address'}
                  keyboardType={'email-address'}
                  maxLength={50}
                  numberOfLines={1}
                  placeholderTextColor={'#3F3FA2'}
                  autoCompleteType={'email'}
                  autoCapitalize={'none'}
                  value={this.state.email}
                  onChangeText={email => this.setState({email})}
                />
                <TouchableOpacity style={[Styles.button, Styles.submitButton]}>
                  <Text style={Styles.submitButtonText}>
                    Sign up using email
                  </Text>
                </TouchableOpacity>
                <View style={Styles.loginButton}>
                  <Text>Have an account?</Text>
                  <TouchableOpacity>
                    <Text style={[Styles.buttonText, Styles.blueText]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={Styles.termsConditions}>
                  <Text style={[Styles.buttonText, Styles.blueText]}>
                    Terms and conditions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardShift>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  logo: {
    marginTop: -60,
    marginBottom: 20,
    width: 165,
    height: 48,
  },
  childContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
  },
  innerContainer: {
    width: 226,
    alignItems: 'center',
  },
  button: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 226,
    height: 39,
    borderRadius: 10,
  },
  blueButton: {
    borderColor: '#000080',
    borderWidth: 1,
  },
  buttonText: {
    paddingHorizontal: 7,
    fontSize: 14,
    fontWeight: '500',
  },
  signUpLogo: {
    width: 25,
    height: 25,
  },
  divider: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    width: 226,
  },
  greyLine: {
    flex: 1,
    backgroundColor: '#707070',
    height: 1,
  },
  dividerText: {
    color: '#707070',
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000080',
    width: '100%',
  },
  blueInputField: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000080',
  },
  submitButton: {
    backgroundColor: '#ED4264',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  blueText: {
    color: '#000080',
  },
  loginButton: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  termsConditions: {
    marginTop: 0,
  },
});
