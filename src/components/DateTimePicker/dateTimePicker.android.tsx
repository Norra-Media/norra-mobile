import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {COLORS} from '@modules/colors';

interface IDateTimePickerProps {
  open: Boolean;
  value: string;
  onChange: (value: String) => void;
}

export default class DateTimePicker extends React.Component<
  IDateTimePickerProps
> {
  render() {
    const {open, value, onChange} = this.props;
    return (
      open && (
        <RNDateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={value ? new Date(value) : new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(event, date) => {
            onChange(String(date));
          }}
          maximumDate={new Date()}
          textColor={COLORS.PRIMARY}
        />
      )
    );
  }
}
