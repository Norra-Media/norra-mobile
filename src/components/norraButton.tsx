import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IExtraStyles, PRIMARY_NAVY_BLUE, WHITE} from '@modules';

// Styles
const buttonStyles = StyleSheet.create({
  longContainer: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 7,
    justifyContent: 'center',
    backgroundColor: PRIMARY_NAVY_BLUE,
  },
  textWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  longDefaultText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    // flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: WHITE,
  },
});

// Types
interface IButtonProps extends IExtraStyles {
  children: string;
  onClick: () => void;
}

// Component
export const NorraButton = ({
  styles = [],
  secondaryStyles = [],
  onClick,
  children,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.longContainer, [...styles]]}
      onPress={() => onClick()}
      activeOpacity={0.8}>
      {/* <View style={[buttonStyles.textWrapper]}> */}
      <Text style={[buttonStyles.longDefaultText, [...secondaryStyles]]}>
        {children}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};
