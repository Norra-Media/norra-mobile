import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, BackButton, NorraButton, BoxImage} from '@components';
import {PRIMARY_NAVY_BLUE, CategoryPageMsg} from '@modules';

export class Categories extends Component {
  render() {
    return (
      <View style={categoriesStyle.container}>
        <Header styles={[categoriesStyle.headerStyle]}>
          <BackButton
            onClick={() => console.log('back')}
            isCloseButton={true}
          />
          <NorraButton onClick={() => {}} styles={[categoriesStyle.letsGoBtn]}>
            {CategoryPageMsg.topBtn}
          </NorraButton>
        </Header>
        <View style={categoriesStyle.bodyWrapper}>
          <Text style={[categoriesStyle.pageCaption]}>
            {CategoryPageMsg.pageTitle}
          </Text>
          <Text
            style={[categoriesStyle.pageCaption, categoriesStyle.pageSubtitle]}>
            {CategoryPageMsg.subTitle}
          </Text>
          <View style={categoriesStyle.cardsWrapper}>
            <BoxImage
              enableOverlay={true}
              enableTick={false}
              onPress={() => {}}
              title={'Sports'}
              uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
              styles={[categoriesStyle.card]}
            />
            <BoxImage
              enableOverlay={true}
              enableTick={true}
              onPress={() => {}}
              title={'Sports'}
              uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
              styles={[categoriesStyle.card]}
            />
            <BoxImage
              enableOverlay={true}
              enableTick={true}
              onPress={() => {}}
              title={'Sports'}
              uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
              styles={[categoriesStyle.card]}
            />
            <BoxImage
              enableOverlay={true}
              enableTick={true}
              onPress={() => {}}
              title={'Sports'}
              uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
              styles={[categoriesStyle.card]}
            />
            <BoxImage
              enableOverlay={true}
              enableTick={true}
              onPress={() => {}}
              title={'Sports'}
              uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
              styles={[categoriesStyle.card]}
            />
            <BoxImage
              enableOverlay={true}
              enableTick={true}
              onPress={() => {}}
              title={'Sports'}
              uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
              styles={[categoriesStyle.card]}
            />
          </View>
        </View>
      </View>
    );
  }
}

const categoriesStyle = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  letsGoBtn: {
    justifyContent: 'flex-end',
  },
  pageCaption: {
    color: PRIMARY_NAVY_BLUE,
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: 'roboto',
  },
  pageSubtitle: {
    fontSize: 18,
  },
  bodyWrapper: {
    paddingHorizontal: 8,
  },
  cardsWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  card: {
    marginVertical: 8,
  },
});
