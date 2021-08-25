import React from 'react';

import LottieView from 'react-lottie';

import loadAnimation from '../../assets/loading1.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

const LottieLoading = (): JSX.Element => (
    <LottieView
      options={defaultOptions}
      height={'60%'}
      width={'60%'}
      style={{ alignSelf: 'center' }}
    />
);

export default LottieLoading;
