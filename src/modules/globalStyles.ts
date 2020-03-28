import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const GlobalStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.WHITE},
  alignItemsCentre: {alignItems: 'center'},
  alignSelfCentre: {alignSelf: 'center'},
  viewPaddingWithHeader: {
    paddingTop: 60,
  },
});
