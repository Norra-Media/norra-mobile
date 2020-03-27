import React from 'react';
import {
  View,
  Text,
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '@modules/colors';

interface IFloatingLabelViewProps {
  label: string;
  value: string;
  onPress: () => void;
  mandatory?: boolean;
  hint?: string;
  error?: boolean;
  warningMessage?: string;
}

export default class FloatingLabelView extends React.Component<
  IFloatingLabelViewProps
> {
  render() {
    const {
      label,
      value,
      mandatory,
      hint,
      error,
      warningMessage,
      onPress,
    } = this.props;
    const labelStyle: StyleProp<TextStyle> = {
      position: 'absolute',
      left: 0,
      top: !value ? 25 : -2,
      fontSize: !value ? 16 : 14,
      color: !value ? COLORS.PRIMARY : COLORS.SECONDARY,
    };
    return (
      <TouchableOpacity style={Style.contatiner} onPress={onPress}>
        <Text style={labelStyle}>{label + (mandatory ? ' *' : '')}</Text>
        <View
          style={[
            Style.textInput,
            error ? Style.errorBorder : Style.primaryBorder,
          ]}>
          <Text style={Style.value}>{value}</Text>
        </View>
        {error && warningMessage && (
          <Text style={[Style.hint, Style.errorMessage]}>{warningMessage}</Text>
        )}
        {Boolean(hint) && !(error && warningMessage) && (
          <Text style={Style.hint}>{hint}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const Style = StyleSheet.create({
  contatiner: {
    paddingTop: 18,
  },
  textInput: {
    height: 30,
    width: '100%',
    borderBottomWidth: 1,
  },
  value: {
    color: COLORS.PRIMARY,
    fontSize: 16,
  },
  hint: {
    color: COLORS.SECONDARY,
    fontSize: 12,
    paddingVertical: 5,
  },
  primaryBorder: {
    borderColor: COLORS.PRIMARY,
  },
  errorBorder: {
    borderColor: COLORS.WARNING_RED,
  },
  errorMessage: {
    color: COLORS.WARNING_RED,
  },
});
