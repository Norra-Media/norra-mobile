import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image,
  Text,
} from 'react-native';
import {COLORS} from '@modules/colors';
import {SCREEN_WIDTH, GlobalStyles} from '@modules';

import WritePost from '@assets/write_post.svg';
import AskaQuestion from '@assets/ask_a_question.svg';
import QuestionsForYou from '@assets/questions_for_you.svg';
import Profile from '@assets/profile.svg';
import MyPosts from '@assets/my_posts.svg';
import MyQuestions from '@assets/my_questions.svg';

interface ILeftDrawerProps {
  open: Boolean;
  onClose?: () => void;
}
interface ILeftDrawerState {
  animation: AnimationEvent;
}
export default class Drawer extends React.Component<
  ILeftDrawerProps,
  ILeftDrawerState
> {
  animatedValue = new Animated.Value(0);
  state = {
    animation: new Animated.Value(0),
  };

  componentDidUpdate(prevProps: ILeftDrawerProps) {
    if (this.props.open && prevProps.open !== this.props.open) {
      this.handleOpen();
    }
    if (!this.props.open && prevProps.open !== this.props.open) {
      this.handleClose();
    }
  }
  componentDidMount() {
    if (this.props.open) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    if (this.props.onClose) {
      this.props.onClose();
    }
  };
  render() {
    const backdrop = {
      transform: [
        {
          translateX: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [SCREEN_WIDTH, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    };

    const slideRight = {
      transform: [
        {
          translateX: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [-800, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };

    return (
      <Animated.View style={[StyleSheet.absoluteFill, Styles.cover, backdrop]}>
        <TouchableOpacity style={Styles.closeView} onPress={this.handleClose} />
        <View style={[Styles.sheet]}>
          <Animated.View style={[Styles.popup, slideRight]}>
            <View
              style={{width: '100%', height: 69, backgroundColor: '#6DD5ED'}}
            />
            <View style={GlobalStyles.container}>
              <View style={Styles.userDetails}>
                <Image
                  style={[GlobalStyles.userAvatar100x100, Styles.pushAvatarUp]}
                  source={{
                    uri:
                      'http://icon-library.com/images/iron-man-icon/iron-man-icon-11.jpg',
                  }}
                />
                <Text style={Styles.profileName}>Abey Thomas</Text>
                <Text style={Styles.profileEmail}>
                  abey.thomas@hashedin.com
                </Text>
              </View>
              <TouchableOpacity style={Styles.option}>
                <WritePost height={18} width={20} />
                <Text style={Styles.optionText}>Write a Post</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.option}>
                <AskaQuestion height={18} width={20} />
                <Text style={Styles.optionText}>Ask a question</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.option}>
                <MyPosts height={18} width={20} />
                <Text style={Styles.optionText}>My posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.option}>
                <MyQuestions height={18} width={20} />
                <Text style={Styles.optionText}>Questions posted by you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.option}>
                <QuestionsForYou height={18} width={20} />
                <Text style={Styles.optionText}>Questions for you</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.option}>
                <Profile height={18} width={20} />
                <Text style={Styles.optionText}>My profile</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[Styles.optionText, Styles.termsAconditions]}>
              <Text style={Styles.optionText}>Terms and Conditions</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    backgroundColor: 'rgba(0,0,0,.75)',
    zIndex: 100,
  },
  sheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 80,
    height: '100%',
    justifyContent: 'flex-end',
  },
  popup: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
  },
  closeView: {
    height: '100%',
    width: '100%',
  },
  userDetails: {
    alignItems: 'center',
  },
  pushAvatarUp: {
    marginTop: -40,
  },
  profileName: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  profileEmail: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    paddingBottom: 12,
  },
  option: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  optionText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    paddingLeft: 12,
  },
  termsAconditions: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
