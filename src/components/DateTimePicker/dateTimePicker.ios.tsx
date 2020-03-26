import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import BottomModal from 'components/bottomModal';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface IDateTimePickerProps {
  open: Boolean;
  onClose: () => void;
  value: String;
  onChange: (value: String) => void;
  display: 'spinner' | 'default' | 'clock' | 'calendar' | undefined;
}

export default class DateTimePicker extends React.Component<
  IDateTimePickerProps
> {
  state = {
    date: this.props.value || new Date(),
  };
  onClose = () => {
    this.setState({date: this.props.value});
    this.props.onClose();
  };
  render() {
    return (
      <BottomModal open={this.props.open} onClose={this.onClose}>
        <View style={Style.wrapperView}>
          <RNDateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={new Date(this.state.date) || new Date()}
            mode={'date'}
            is24Hour={true}
            display={this.props.display || 'default'}
            onChange={(event, date) => {
              this.setState({date});
            }}
            maximumDate={new Date()}
            textColor="#000080"
          />
          <TouchableOpacity
            style={Style.submitButton}
            onPress={() => this.props.onChange(String(this.state.date))}>
            <Text style={Style.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </BottomModal>
    );
  }
}

const Style = StyleSheet.create({
  wrapperView: {
    width: '100%',
    padding: 24,
  },
  submitButton: {
    backgroundColor: '#ED4264',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  submitText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
