import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {COLORS} from '@modules/colors';

interface IFloatingLabelInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  mandatory?: boolean;
  hint?: string;
}
interface IFloatingLabelInputState {
  isFocused: boolean;
}

export default class FloatingLabelInput extends React.Component<
  IFloatingLabelInputProps,
  IFloatingLabelInputState
> {
  state = {
    isFocused: false,
  };
  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {label, value, mandatory, hint, ...props} = this.props;
    const {isFocused} = this.state;
    const labelStyle: StyleProp<TextStyle> = {
      position: 'absolute',
      left: 0,
      top: !(isFocused || value) ? 25 : -2,
      fontSize: !(isFocused || value) ? 16 : 14,
      color: !(isFocused || value) ? COLORS.PRIMARY : COLORS.SECONDARY,
    };
    return (
      <View style={Style.contatiner}>
        <Text style={labelStyle}>{label + (mandatory ? ' *' : '')}</Text>
        <TextInput
          {...props}
          value={value}
          style={[Style.textInput]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
        {Boolean(hint) && <Text style={Style.hint}>{hint}</Text>}
      </View>
    );
  }
}

const Style = StyleSheet.create({
  contatiner: {
    paddingTop: 10,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: COLORS.PRIMARY,
    borderBottomWidth: 1,
    color: COLORS.PRIMARY,
    fontSize: 16,
  },
  hint: {
    color: COLORS.SECONDARY,
    fontSize: 12,
    paddingVertical: 5,
  },
});
