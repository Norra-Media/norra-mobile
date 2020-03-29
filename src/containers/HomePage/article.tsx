import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {GlobalStyles} from '@modules';
import {COLORS} from '@modules/colors';
import SliderImageGallery from '@components/sliderImageGallery';
import Upvote from '@assets/upvote.svg';
import Upvoted from '@assets/upvoted.svg';
import Commented from '@assets/commented.svg';
import Answered from '@assets/answered.svg';
import Report from '@assets/report.svg';

export class Article extends React.Component {
  renderBreadCrumb = (type: string, category: string) => {
    return (
      <View style={Style.breadCrumb}>
        <Text style={Style.articleTypeText}>{type}</Text>
        <Text style={Style.division}>></Text>
        <Text style={Style.communityTitleText}>{category}</Text>
      </View>
    );
  };

  renderMetaData = () => {
    return (
      <View style={[GlobalStyles.rowDirection, GlobalStyles.ph12]}>
        <Image
          style={GlobalStyles.userAvatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={GlobalStyles.ph12}>
          <Text style={Style.authorName}>Robert Downey Jr.</Text>
          <Text style={[Style.postedTime]}>Posted on March 15, 10:30</Text>
        </View>
      </View>
    );
  };

  renderTitle = () => {
    return (
      <Text style={Style.titleText} numberOfLines={2}>
        Change is the only constant. The same mantra applies for healthy
        lifestyle, says experts.
      </Text>
    );
  };

  renderImages = () => {
    return <SliderImageGallery />;
  };

  renderDescription = () => {
    return (
      <Text style={Style.titleText} numberOfLines={2}>
        It simply does not end in sweating. It’s lot more than a game. Below are
        the list of nutritional facts that…
      </Text>
    );
  };

  renderActivities = (type: string) => {
    return (
      <View style={[GlobalStyles.rowDirection, GlobalStyles.ph12]}>
        <TouchableOpacity style={GlobalStyles.rowDirection}>
          {type === 'Post' ? (
            <Answered height={20} width={24} style={GlobalStyles.mr4} />
          ) : (
            <Answered height={20} width={24} style={GlobalStyles.mr4} />
          )}

          <Text>{type === 'Post' ? 'Lke' : 'Answer'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[GlobalStyles.rowDirection, Style.comment]}>
          {type === 'Post' ? (
            <Commented width={24} height={20} style={GlobalStyles.mr4} />
          ) : (
            <>
              {type === 'Upvoted' ? (
                <Upvote width={15} height={15} style={GlobalStyles.mr4} />
              ) : (
                <Upvoted width={15} height={15} style={GlobalStyles.mr4} />
              )}
            </>
          )}
          <Text>{type === 'Post' ? 'Comment' : 'Upvote'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.more}>
          <Report height={5} width={17} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={Style.container}>
        {this.renderBreadCrumb('Post', 'Sports')}
        {this.renderMetaData()}
        {this.renderTitle()}
        {this.renderImages()}
        {this.renderDescription()}
        {this.renderActivities('Post')}
        <View style={Style.container}>
          {this.renderBreadCrumb('Question', 'Healthy Diet')}
          {this.renderMetaData()}
          {this.renderTitle()}
          {/* {this.renderImages()} */}
          {/* {this.renderDescription()} */}
          {this.renderActivities('Question')}
        </View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    paddingVertical: 6,
    backgroundColor: COLORS.WHITE,
    marginVertical: 12,
  },
  breadCrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 12,
  },
  division: {marginHorizontal: 3, marginTop: -2},
  articleTypeText: {
    color: COLORS.DAVYGRAY,
    fontSize: 11,
  },
  communityTitleText: {
    color: COLORS.DAVYGRAY,
    fontSize: 11,
    fontWeight: 'bold',
  },
  authorName: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  postedTime: {
    fontSize: 10,
    color: COLORS.VERYDARKGRAY,
  },
  titleText: {
    fontSize: 14,
    color: COLORS.BLACK,
    padding: 12,
  },
  comment: {
    marginLeft: 50,
  },
  more: {
    position: 'absolute',
    top: '40%',
    right: 24,
  },
});
