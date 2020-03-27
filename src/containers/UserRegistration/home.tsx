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
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import FacebookLogo from '@assets/facebook_logo.svg';
import GoogleLogo from '@assets/google_logo.svg';
import NorraLogo from '@assets/norra_logo.svg';
import SignupNetworkWeb from '@assets/signup_network_web.svg';
import {GOOGLE_SIGNIN_CONFIGURATIONS, LOGINTYPES} from '@modules/constants';
import {facebookGraphUrl} from '@modules/urls';
import KeyboardShift from '@components/keyboardShift';
import {COLORS} from '@modules/colors';

export default class Home extends Component {
  state = {
    email: '',
    user: null,
  };

  loginUsingGoogle = async () => {
    GoogleSignin.configure({
      ...GOOGLE_SIGNIN_CONFIGURATIONS,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = {
        name: userInfo.user.name,
        email: userInfo.user.email,
        photo: userInfo.user.photo,
        id: userInfo.user.id,
        loginType: LOGINTYPES.GOOGLE,
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
    fetch(facebookGraphUrl(token))
      .then(response => response.json())
      .then(userInfo => {
        const user = {
          name: userInfo.name,
          email: userInfo.email,
          photo: userInfo.picture.data.url,
          id: userInfo.id,
          loginType: LOGINTYPES.FACEBOOK,
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
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}>
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
                <Text style={Styles.headerText}>Continue with email</Text>
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
                  placeholderTextColor={COLORS.SPEECH_BLUE}
                  autoCompleteType={'email'}
                  autoCapitalize={'none'}
                  value={this.state.email}
                  onChangeText={email => this.setState({email})}
                />
                <TouchableOpacity style={[Styles.button, Styles.submitButton]}>
                  <Text style={Styles.submitButtonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity style={Styles.termsConditions}>
              <Text style={[Styles.buttonText, Styles.blueText]}>
                Terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  button: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 39,
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  blueButton: {
    borderColor: COLORS.PRIMARY,
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
    backgroundColor: COLORS.GRAY44,
    height: 1,
  },
  dividerText: {
    color: COLORS.GRAY44,
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.PRIMARY,
    alignSelf: 'stretch',
  },
  blueInputField: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.PRIMARY,
  },
  submitButton: {
    backgroundColor: COLORS.BRIGHT_RED,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  blueText: {
    color: COLORS.PRIMARY,
  },
  termsConditions: {
    marginTop: 0,
  },
});
