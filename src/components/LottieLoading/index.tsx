import React from 'react';

import LottieView from 'react-lottie';

import loadAnimation from '../../assets/loading1.json';
import dotsLoading from '../../assets/dotsLoading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

interface ILottie {
  dots?: boolean
}

const LottieLoading = ({ dots }: ILottie): JSX.Element => (
    <LottieView
      options={{...defaultOptions, animationData: dots ? dotsLoading : loadAnimation }}
      height={dots ? '50%' : '60%'}
      width={dots ? '30%' : '60%'}
      style={{ alignSelf: 'center', marginTop: dots ? 50 : 0 }}
    />
);

export default LottieLoading;
