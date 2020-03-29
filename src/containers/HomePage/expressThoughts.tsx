import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {GlobalStyles} from '@modules';
import {COLORS} from '@modules/colors';

export class ExpressThoughts extends React.Component {
  render() {
    return (
      <View style={[GlobalStyles.rowDirection, Style.suggestionView]}>
        <Image
          style={GlobalStyles.userAvatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TouchableOpacity
          style={GlobalStyles.ph12}
          onPress={() => Alert.alert('hai')}>
          <Text style={Style.suggestionText}>
            Your thoughts are important..!!
          </Text>
          <Text style={[Style.suggestionText, Style.highlightText]}>
            Start expressing them now...
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  suggestionText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  highlightText: {
    fontWeight: '500',
  },
  suggestionView: {
    borderBottomEndRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * 4},
    shadowOpacity: 0.1,
    shadowRadius: 0.8 * 4,
    padding: 20,
    paddingHorizontal: 12,
  },
});
