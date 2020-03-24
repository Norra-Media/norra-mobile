/**
 * Header component. Positioned absolute at top of the page
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {IExtraStyles, WHITE, BLACK} from '@modules';

interface IHeaderProps extends IExtraStyles {}

import {StyleSheet} from 'react-native';

// exporting headerStyles for bottomShadow
export const headerStyles = StyleSheet.create({
  bottomShadow: {
    backgroundColor: WHITE,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.035,
    shadowRadius: 4,
    elevation: 5,
  },
});

export const Header: React.FunctionComponent<IHeaderProps> = ({
  styles = [],
  children,
}) => <View style={[[...styles]]}>{children}</View>;
