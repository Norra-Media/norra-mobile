import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {IExtraStyles} from '@modules';
import WhiteCheck from '@assets/White_selected.svg';

interface IBoxImageProps extends IExtraStyles {
  uri: string;
  enableTick: boolean;
  onPress: (item: string) => void;
  enableOverlay: boolean;
  title: string;
}
const boxImageStyles = StyleSheet.create({
  imageStyles: {
    width: 110,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  tickMarck: {
    height: 40,
    width: 40,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontFamily: 'roboto',
    fontSize: 16,
    position: 'absolute',
    bottom: 8,
    fontWeight: 'bold',
  },
});

export const BoxImage = ({
  uri,
  enableTick,
  enableOverlay,
  title,
  onPress,
  secondaryStyles = [],
  styles = [],
}: IBoxImageProps) => {
  return (
    <TouchableOpacity
      onPress={onPress ? () => onPress(title) : () => {}}
      activeOpacity={0.8}>
      <ImageBackground
        source={{uri}}
        style={[boxImageStyles.imageStyles, ...styles]}
        imageStyle={{borderRadius: 5}}>
        {enableOverlay && (
          <View style={[boxImageStyles.overlay, ...secondaryStyles]} />
        )}
        {enableTick && (
          // <Image
          //   source={{uri: 'https://i.ibb.co/Nngrdb4/pngwave.png'}}
          //   style={[boxImageStyles.tickMarck]}
          // />
          <WhiteCheck {...boxImageStyles.tickMarck} />
        )}
        {title ? <Text style={boxImageStyles.title}>{title}</Text> : null}
      </ImageBackground>
    </TouchableOpacity>
  );
};
