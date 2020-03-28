import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '@modules/colors';
import BackArrow from '@assets/back_arrow.svg';

interface ICustomHeaderProps {
  title: string;
  onLeftButtonPress: () => void;
}
export default class CustomHeader extends React.Component<ICustomHeaderProps> {
  render() {
    return (
      <View style={Style.stickyheader}>
        <TouchableOpacity onPress={this.props.onLeftButtonPress}>
          <BackArrow height={15} width={15} />
        </TouchableOpacity>
        <Text style={Style.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  stickyheader: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY,
    height: 50,
    zIndex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 24,
    color: COLORS.PRIMARY,
  },
});
