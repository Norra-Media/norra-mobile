import React from 'react';
import BottomModal from './bottomModal';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Camera from '../../assets/camera_edit_option.svg';
interface IImageInputProps {
  open: boolean;
  onClose: () => void;
  handleImage: (any) => void;
}

export default class ImageInput extends React.Component<IImageInputProps> {
  openImagePicker = () => {
    this.props.onClose();
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.props.handleImage({
        image: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        },
      });
    });
  };
  openCamera = () => {
    this.props.onClose();
    ImagePicker.openCamera({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
      forceJpg: true,
    }).then(image => {
      console.log(image);
      this.props.handleImage({
        image: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        },
      });
    });
  };
  render() {
    return (
      <BottomModal open={this.props.open} onClose={this.props.onClose}>
        <View style={Style.wrapper}>
          <TouchableOpacity style={Style.option} onPress={this.openImagePicker}>
            <Text style={Style.optionsText}>Gallery</Text>
          </TouchableOpacity>
          <View style={Style.greyLine} />
          <TouchableOpacity style={Style.option} onPress={this.openCamera}>
            <Text style={Style.optionsText}>Camera</Text>
            <Camera />
          </TouchableOpacity>
        </View>
      </BottomModal>
    );
  }
}

const Style = StyleSheet.create({
  wrapper: {
    padding: 24,
    flexDirection: 'column',
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  greyLine: {
    backgroundColor: '#707070',
    height: 1,
  },
  optionsText: {
    fontSize: 16,
    color: '#000080',
    fontWeight: '400',
  },
});
