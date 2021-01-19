import { Animated } from 'react-native';


const { add, multiply } = Animated;


export const TransitionIOSSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

export function forVerticalIOS({
    current,
    inverted,
    next,
    layouts: { screen },
  }) {
    const translateY = multiply(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [screen.height, 0],
        extrapolate: 'clamp',
      }),
      inverted
    );
    const progress = add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0
    );
    const opacity = progress.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    const overlayOpacity = progress.interpolate({
      inputRange: [0, 1, 1.0001, 2],
      outputRange: [0, 0.3, 1, 1],
    });

    return {
      cardStyle: {
        transform: [
          // Translation for the animation of the current card
          { translateY },
        ],
      },
      overlayStyle: { opacity: overlayOpacity },
    };
  }


  export function forHorizontalIOS({
    current,
    next,
    inverted,
    layouts: { screen }}) {
    const translateFocused = multiply(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [screen.width, 0],
        extrapolate: 'clamp',
      }),
      inverted
    );

    const translateUnfocused = next
      ? multiply(
          next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, screen.width * -0.3],
            extrapolate: 'clamp',
          }),
          inverted
        )
      : 0;

    const overlayOpacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.07],
      extrapolate: 'clamp',
    });

    const shadowOpacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.3],
      extrapolate: 'clamp',
    });

    return {
      cardStyle: {
        transform: [
          // Translation for the animation of the current card
          { translateX: translateFocused },
          // Translation for the animation of the card on top of this
          { translateX: translateUnfocused },
        ],
      },
      overlayStyle: { opacity: overlayOpacity },
      shadowStyle: { shadowOpacity },
    };
  }
