import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextStyle,
  StyleProp,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {COLORS} from '@modules/colors';

interface IFloatingLabelInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  mandatory?: boolean;
  hint?: string;
  error?: boolean;
  warningMessage?: string;
  maxLength?: number;
  showCharacterCount?: boolean;
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
    const {
      label,
      value,
      mandatory,
      hint,
      error,
      warningMessage,
      maxLength,
      showCharacterCount,
      ...props
    } = this.props;
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
          style={[
            Style.textInput,
            error ? Style.errorBorder : Style.primaryBorder,
          ]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          maxLength={maxLength}
          autoCompleteType={'email'}
          blurOnSubmit
        />
        {error && warningMessage && (
          <Text style={[Style.hint, Style.errorMessage]}>{warningMessage}</Text>
        )}
        {Boolean(hint) && !(error && warningMessage) && (
          <Text style={Style.hint}>{hint}</Text>
        )}
        {Boolean(maxLength) && Boolean(showCharacterCount) && (
          <Text style={Style.characterCount}>
            {value.length + '/' + maxLength}
          </Text>
        )}
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
    borderBottomWidth: 1,
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
  characterCount: {
    position: 'absolute',
    top: 36,
    right: 0,
    fontSize: 10,
    color: COLORS.GRAY44,
  },
});
