import React from 'react';
import {
  View,
  Text,
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface IFloatingLabelViewProps {
  label: string;
  value: string;
  onPress: () => void;
  mandatory?: boolean;
  hint?: string;
}

export class FloatingLabelView extends React.Component<
  IFloatingLabelViewProps
> {
  render() {
    const {label, value, mandatory, hint, onPress} = this.props;
    const labelStyle: StyleProp<TextStyle> = {
      position: 'absolute',
      left: 0,
      top: !value ? 18 : 0,
      fontSize: !value ? 16 : 14,
      color: !value ? '#000080' : '#9494ff',
    };
    return (
      <TouchableOpacity style={Style.contatiner} onPress={onPress}>
        <Text style={labelStyle}>{label + (mandatory ? ' *' : '')}</Text>
        <View style={Style.textInput}>
          <Text style={Style.value}>{value}</Text>
        </View>
        {Boolean(hint) && <Text style={Style.hint}>{hint}</Text>}
      </TouchableOpacity>
    );
  }
}

const Style = StyleSheet.create({
  contatiner: {
    paddingTop: 18,
  },
  textInput: {
    height: 26,
    width: '100%',
    borderColor: '#000080',
    borderBottomWidth: 1,
  },
  value: {
    color: '#000080',
    fontSize: 16,
  },
  hint: {
    color: '#9494ff',
    fontSize: 12,
    paddingVertical: 5,
  },
});
