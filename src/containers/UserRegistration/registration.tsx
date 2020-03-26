import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import UploadProfileLogo from '../../../assets/upload_profile_pic.svg';
import {FloatingLabelInput} from 'components/floatingLabelInput';
import {FloatingLabelView} from 'components/floatingLabelView';
import KeyboardShift from 'components/keyboardShift';
import {DateTimePicker} from 'components';
import Moment from 'moment';
import ImageInput from 'components/imageInput';
import Camera from '../../../assets/camera_edit_option.svg';

enum FIELDS {
  NAME,
  EMAIL,
  ABOUT,
  DOB,
}
export class Registration extends React.Component {
  state = {
    name: '',
    about: '',
    email: '',
    dob: '',
    showDatePicker: false,
    imageOptions: false,
    image: {},
  };
  handleTextChange = (field: FIELDS, text: string) => {
    switch (field) {
      case FIELDS.NAME:
        this.setState({name: text});
        break;
      case FIELDS.EMAIL:
        this.setState({email: text});
        break;
      case FIELDS.ABOUT:
        this.setState({about: text});
        break;
      case FIELDS.DOB:
        this.setState({dob: text});
        break;
    }
  };

  toggleDatePicker = (value: Boolean) => {
    this.setState({showDatePicker: value});
  };

  toggleImageOptions = (value: Boolean) => {
    this.setState({imageOptions: value});
  };
  handleImageChange = image => {
    this.setState(image);
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
    } = this.state;
    return (
      <SafeAreaView style={Styles.layout}>
        <KeyboardShift>
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
                  onChangeText={text =>
                    this.handleTextChange(FIELDS.NAME, text)
                  }
                />
              </View>
              <View style={Styles.inputRow}>
                <FloatingLabelInput
                  label="About"
                  value={about}
                  hint={'Tell us something about yourself.'}
                  onChangeText={text =>
                    this.handleTextChange(FIELDS.ABOUT, text)
                  }
                />
              </View>
              <View style={Styles.inputRow}>
                <FloatingLabelInput
                  label={'Email address'}
                  mandatory={true}
                  value={email}
                  hint={"Be assured! We won't spam you."}
                  onChangeText={text =>
                    this.handleTextChange(FIELDS.EMAIL, text)
                  }
                />
              </View>
              <View style={Styles.inputRow}>
                <FloatingLabelView
                  label={'Date of Birth'}
                  mandatory={true}
                  value={dob ? Moment(dob).format('DD/MM/YYYY') : ''}
                  hint={"Don't worry! The date is safe with us."}
                  onPress={() => {
                    this.toggleDatePicker(true);
                  }}
                />
              </View>
            </View>
          </View>
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
          handleImage={image => this.handleImageChange(image)}
        />
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    padding: 24,
    alignItems: 'center',
    flex: 1,
  },
  childContainer: {
    width: 266,
  },
  textInput: {
    height: 29,
    width: '100%',
    borderColor: '#000080',
    borderBottomWidth: 1,
  },
  viewInput: {
    width: '100%',
    borderColor: '#000080',
    borderBottomWidth: 1,
    height: 24,
    marginTop: 5,
  },
  label: {
    color: '#9494ff',
    fontSize: 12,
    paddingVertical: 5,
  },
  inputRow: {
    paddingVertical: 5,
  },
  placeholder: {
    color: '#000080',
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
});
