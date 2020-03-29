import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '@modules/colors';
import BackArrow from '@assets/back_arrow.svg';
import Hamburger from '@assets/hamburger.svg';
import NorraLogo from '@assets/norra_logo.svg';

interface ICustomHeaderProps {
  title?: string;
  onLeftButtonPress: () => void;
  type: 'HOME' | 'SIMPLE';
}
export default class CustomHeader extends React.Component<ICustomHeaderProps> {
  renderHomeHeader = () => {
    return (
      <View style={[Style.stickyheader, Style.homeHeader]}>
        <TouchableOpacity
          onPress={this.props.onLeftButtonPress}
          style={Style.hamburger}>
          <Hamburger height={20} width={20} />
        </TouchableOpacity>
        <NorraLogo height={200} width={100} />
      </View>
    );
  };
  renderSimpleHeader = () => {
    return (
      <View style={Style.stickyheader}>
        <TouchableOpacity onPress={this.props.onLeftButtonPress}>
          <BackArrow height={15} width={15} />
        </TouchableOpacity>
        <Text style={Style.headerText}>{this.props.title}</Text>
      </View>
    );
  };
  render() {
    switch (this.props.type) {
      case 'HOME':
        return this.renderHomeHeader();
      case 'SIMPLE':
        return this.renderSimpleHeader();
    }
  }
}

const Style = StyleSheet.create({
  stickyheader: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHTGRAYISHBLUE,
    height: 50,
    zIndex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 24,
    color: COLORS.PRIMARY,
  },
  homeHeader: {
    justifyContent: 'center',
  },
  hamburger: {
    position: 'absolute',
    top: '30%',
    left: 24,
  },
});
