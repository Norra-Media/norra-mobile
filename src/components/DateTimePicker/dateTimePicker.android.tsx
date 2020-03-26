import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface IDateTimePickerProps {
  open: Boolean;
  onClose: () => void;
  value: String;
  onChange: (value: String) => void;
}

export default class DateTimePicker extends React.Component<
  IDateTimePickerProps
> {
  render() {
    return (
      this.props.open && (
        <RNDateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={this.props.value ? new Date(this.props.value) : new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(event, date) => {
            this.props.onChange(String(date));
          }}
          maximumDate={new Date()}
          textColor="#000080"
        />
      )
    );
  }
}
