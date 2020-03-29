import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '@modules/colors';

export class SuggestedCommunities extends React.Component {
  renderItem = () => {
    return (
      <View style={Style.subContainer}>
        <Image
          style={Style.image}
          source={{
            uri:
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg',
          }}
        />
        <TouchableOpacity style={Style.joinButton}>
          <Text style={Style.joinButtonText}>JOIN</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.headerText}>Suggested Communities</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={Style.scrollViewContent}
          showsHorizontalScrollIndicator={false}>
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
        </ScrollView>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    paddingVertical: 6,
    height: 230,
    backgroundColor: COLORS.WHITE,
  },
  subContainer: {
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  headerText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    fontWeight: '500',
    paddingHorizontal: 12,
  },
  image: {
    height: 155,
    width: 152,
    borderRadius: 5,
  },
  joinButton: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 10,
    width: 152,
    alignItems: 'center',
    padding: 2,
    marginVertical: 5,
  },
  scrollViewContent: {
    paddingHorizontal: 6,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.PRIMARY,
  },
});
