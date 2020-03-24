import {ViewStyle, ImageStyle, TextStyle} from 'react-native';

export interface IExtraStyles {
  styles?: Array<ViewStyle | ImageStyle | TextStyle>;
  secondaryStyles?: Array<ViewStyle | ImageStyle | TextStyle>;
}
