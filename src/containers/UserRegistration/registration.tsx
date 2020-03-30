import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Moment from 'moment';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Camera from '@assets/camera_edit_option.svg';
import UploadProfileLogo from '@assets/upload_profile_pic.svg';
import RedSubmitIcon from '@assets/red_submit.svg';
import {
  DateTimePicker,
  KeyboardShift,
  ImageInput,
  FloatingLabelInput,
  FloatingLabelView,
  CustomHeader,
  ImageData,
} from '@components';
import {
  RootStackParamList,
  GlobalStyles,
  validateEmail,
  COLORS,
} from '@modules';

type RegistrationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Registration'
>;
type RegistrationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Registration'
>;

enum FIELDS {
  NAME,
  EMAIL,
  ABOUT,
  DOB,
}
interface IRegistrationProps {
  navigation: RegistrationScreenNavigationProp;
  route: RegistrationScreenRouteProp;
}
interface IRegistrationState {
  name: string;
  about: string;
  email: string;
  dob: string;
  showDatePicker: boolean;
  imageOptions: boolean;
  image: ImageData | {};
  errors: {name: boolean; email: boolean; dob: boolean};
  emailEditable: boolean;
}
export class Registration extends React.Component<
  IRegistrationProps,
  IRegistrationState
> {
  state = {
    name: this.props.route.params.name || '',
    about: '',
    email: this.props.route.params.email || '',
    dob: '',
    showDatePicker: false,
    imageOptions: false,
    image: this.props.route.params.photo
      ? {uri: this.props.route.params.photo}
      : ({} as ImageData),
    errors: {name: false, email: false, dob: false},
    emailEditable: this.props.route.params.email ? false : true,
  };

  handleTextChange = (field: FIELDS, text: string) => {
    switch (field) {
      case FIELDS.NAME:
        this.setState({
          name: text,
          errors: {...this.state.errors, name: false},
        });
        break;
      case FIELDS.EMAIL:
        this.setState({
          email: text,
          errors: {...this.state.errors, email: false},
        });
        break;
      case FIELDS.ABOUT:
        this.setState({about: text});
        break;
      case FIELDS.DOB:
        this.setState({
          dob: text,
          errors: {...this.state.errors, dob: false},
        });
        break;
    }
  };

  toggleDatePicker = (value: boolean) => {
    this.setState({showDatePicker: value});
  };

  toggleImageOptions = (value: boolean) => {
    this.setState({imageOptions: value});
  };
  handleImageChange = (image: ImageData) => {
    this.setState({image: {...image}});
  };

  submitData = () => {
    const {name, about, email, dob} = this.state;
    let errors = {name: false, email: false, dob: false};
    if (!name) {
      errors.name = true;
    }
    if (!email || !validateEmail(email)) {
      errors.email = true;
    }
    if (!dob) {
      errors.dob = true;
    }
    this.setState({errors});
  };

  render() {
    const {
      name,
      email,
      dob,
      about,
      showDatePicker,
      imageOptions,
      image,
      errors,
      emailEditable,
    } = this.state;

    return (
      <View style={GlobalStyles.container}>
        <SafeAreaView />
        <CustomHeader
          type={'SIMPLE'}
          title={'Sign Up'}
          onLeftButtonPress={this.props.navigation.goBack}
        />
        <KeyboardShift extraStyles={GlobalStyles.viewPaddingWithHeader}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
              <View style={Styles.childContainer}>
                <TouchableOpacity
                  style={Styles.profileImageWrapper}
                  onPress={() => this.toggleImageOptions(true)}>
                  {image && image.uri ? (
                    <Image style={Styles.profileImage} source={image} />
                  ) : (
                    <UploadProfileLogo />
                  )}
                  {image && image.uri && (
                    <Camera style={Styles.pictureEditIcon} />
                  )}
                </TouchableOpacity>
                <View style={Styles.inputRow}>
                  <FloatingLabelInput
                    label="Name"
                    mandatory={true}
                    value={name}
                    hint={'Your name will be added to all your posts.'}
                    onChangeText={(text: string) =>
                      this.handleTextChange(FIELDS.NAME, text)
                    }
                    error={errors.name}
                    warningMessage={'Please enter your name.'}
                  />
                </View>
                <View style={Styles.inputRow}>
                  <FloatingLabelInput
                    label="About"
                    value={about}
                    hint={'Tell us something about yourself.'}
                    onChangeText={(text: string) =>
                      this.handleTextChange(FIELDS.ABOUT, text)
                    }
                    showCharacterCount={true}
                    maxLength={100}
                  />
                </View>
                <View style={Styles.inputRow}>
                  <FloatingLabelInput
                    label={'Email address'}
                    mandatory={true}
                    value={email}
                    hint={"Be assured! We won't spam you."}
                    onChangeText={(text: string) =>
                      this.handleTextChange(FIELDS.EMAIL, text)
                    }
                    maxLength={50}
                    numberOfLines={1}
                    placeholderTextColor={COLORS.SPEECH_BLUE}
                    autoCompleteType={'email'}
                    autoCapitalize={'none'}
                    error={errors.email}
                    warningMessage={'Please enter a valid email address.'}
                    editable={emailEditable}
                  />
                </View>
                <View style={Styles.inputRow}>
                  <FloatingLabelView
                    label={'Date of Birth'}
                    mandatory={true}
                    value={
                      dob ? Moment(new Date(dob)).format('DD/MM/YYYY') : ''
                    }
                    hint={"Don't worry! The date is safe with us."}
                    onPress={() => {
                      this.toggleDatePicker(true);
                    }}
                    error={errors.dob}
                    warningMessage={'Please enter your date of birth.'}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={Styles.submitButton}
              onPress={this.submitData}>
              <RedSubmitIcon width={50} height={50} />
            </TouchableOpacity>
          </ScrollView>
        </KeyboardShift>
        <DateTimePicker
          display={'calendar'}
          open={showDatePicker}
          value={dob}
          onChange={date => {
            this.toggleDatePicker(false);
            if (date !== 'undefined') {
              this.handleTextChange(FIELDS.DOB, String(date));
            }
          }}
          onClose={() => this.toggleDatePicker(false)}
        />
        <ImageInput
          open={imageOptions}
          onClose={() => this.toggleImageOptions(false)}
          handleImage={(imageData: ImageData) =>
            this.handleImageChange(imageData)
          }
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
    flex: 1,
  },
  childContainer: {
    width: 266,
  },
  inputRow: {
    paddingVertical: 5,
  },
  profileImageWrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 105,
    height: 105,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  pictureEditIcon: {
    position: 'absolute',
    right: '25%',
    bottom: '20%',
  },
  submitButton: {
    alignSelf: 'flex-end',
    margin: 30,
  },
});
