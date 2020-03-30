import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import BottomModal from '@components/bottomModal';
import {COLORS} from '@modules/colors';

interface IDateTimePickerProps {
  open: Boolean;
  onClose: () => void;
  value: string;
  onChange: (value: string) => void;
  display: 'spinner' | 'default' | 'clock' | 'calendar' | undefined;
}
interface IDateTimePickerState {
  date: Date | undefined;
}

export default class DateTimePicker extends React.Component<
  IDateTimePickerProps,
  IDateTimePickerState
> {
  state = {
    date: this.props.value ? new Date(this.props.value) : new Date(),
  };
  onClose = () => {
    this.setState({
      date: this.props.value ? new Date(this.props.value) : new Date(),
    });
    this.props.onClose();
  };
  render() {
    const {date} = this.state;
    return (
      <BottomModal open={this.props.open} onClose={this.onClose}>
        <View style={Style.wrapperView}>
          <RNDateTimePicker
            timeZoneOffsetInMinutes={0}
            value={new Date(date) || new Date()}
            mode={'date'}
            is24Hour={true}
            display={this.props.display || 'default'}
            onChange={(event, value) => {
              this.setState({date: value});
            }}
            maximumDate={new Date()}
            textColor={COLORS.PRIMARY}
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
    backgroundColor: COLORS.BRIGHT_RED,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  submitText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
});
