import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const GlobalStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.WHITE},
  miniContainer: {padding: 24},
  rowDirection: {flexDirection: 'row'},
  alignItemsCentre: {alignItems: 'center'},
  alignSelfCentre: {alignSelf: 'center'},
  ph24: {paddingHorizontal: 24},
  ph12: {paddingHorizontal: 12},
  mr4: {marginRight: 4},
  backgroundColorLightGray: {backgroundColor: COLORS.VERYLIGHTGRAY},
  viewPaddingWithHeader: {
    paddingTop: 60,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userAvatar100x100: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
