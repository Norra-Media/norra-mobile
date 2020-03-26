import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, BackButton, NorraButton, BoxImage} from '@components';
import {PRIMARY_NAVY_BLUE, CategoryPageMsg} from '@modules';

interface ICategState {
  options: Array<string>;
  selectedOpt: Array<string>;
}

export class Categories extends Component<any, ICategState> {
  state = {
    options: ['Sports', 'Hygiene', 'Healthy Diet'],
    selectedOpt: [''],
  };

  optionClickHandler = (item: string) => {
    const {selectedOpt} = this.state;
    let newSelectedOpt = selectedOpt;
    let isPreset = selectedOpt.indexOf(item);
    if (isPreset === -1) {
      newSelectedOpt.push(item);
    } else {
      newSelectedOpt = selectedOpt.filter(e => e !== item);
    }
    this.setState({selectedOpt: newSelectedOpt});
  };

  render() {
    const {options, selectedOpt} = this.state;
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
            {options.map(ele => (
              <BoxImage
                enableOverlay={true}
                enableTick={selectedOpt.includes(ele)}
                onPress={this.optionClickHandler}
                title={ele}
                uri={'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg'}
                styles={[categoriesStyle.card]}
              />
            ))}
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
