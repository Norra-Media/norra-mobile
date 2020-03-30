import React from 'react';
import {
  ScrollView,
  Image,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {SCREEN_WIDTH} from '@modules';
import {COLORS} from '@modules/colors';

export default class SliderImageGallery extends React.Component {
  refScrollView: ScrollView | null = null;
  state = {
    currentIndex: 0,
  };
  renderPagination = (itemsCount: number, currentIndex: number) => {
    const list = new Array(itemsCount).fill(0);
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 12,
        }}>
        {list.map((val, index) => (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              borderColor: COLORS.VERYDARKGRAY,
              borderWidth: 1,
              marginHorizontal: 3,
              backgroundColor:
                currentIndex === index ? COLORS.VERYDARKGRAY : COLORS.WHITE,
            }}
          />
        ))}
      </View>
    );
  };

  onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {layoutMeasurement, contentOffset} = event.nativeEvent;
    const xValue = Math.round(contentOffset.x / layoutMeasurement.width);
    this.setState({currentIndex: xValue});
    this.refScrollView?.scrollTo({
      x: xValue * layoutMeasurement.width,
    });
  };

  render() {
    return (
      <View>
        <ScrollView
          ref={scrollView => (this.refScrollView = scrollView)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScrollEndDrag={this.onScrollEndDrag}
          bounces={false}>
          <Image
            style={{height: 200, width: SCREEN_WIDTH}}
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg',
            }}
          />
          <Image
            style={{height: 200, width: SCREEN_WIDTH}}
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg',
            }}
          />
          <Image
            style={{height: 200, width: SCREEN_WIDTH}}
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg',
            }}
          />
          <Image
            style={{height: 200, width: SCREEN_WIDTH}}
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg',
            }}
          />
          <Image
            style={{height: 200, width: SCREEN_WIDTH}}
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg',
            }}
          />
        </ScrollView>
        {this.renderPagination(5, this.state.currentIndex)}
      </View>
    );
  }
}
