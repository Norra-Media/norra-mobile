import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CloseBlack from '@assets/Cross.svg';
import BackArrow from '@assets/Back_Arrow.svg';

interface IBackButtonProps {
  onClick: () => void;
  isCloseButton?: boolean; // true for cross button else normal back button
}

const bbStyle = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 0,
    alignItems: 'center',
  },
});

export const BackButton: React.FC<IBackButtonProps> = ({
  onClick,
  isCloseButton,
}) => {
  const BACK_IMAGE = isCloseButton ? CloseBlack : BackArrow;
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={1}
      style={bbStyle.container}>
      <BACK_IMAGE width={35} height={35} />
      {/* <SvgUri width={24} height={24} uri={ isCloseButton?GeneralImages.CLOSE_BLACK:GeneralImages.BACK_BUTTON_IMAGE } /> */}
    </TouchableOpacity>
  );
};
