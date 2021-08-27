import React from 'react';

import LottieView from 'react-lottie';

import primaryLoad from '../../assets/primaryLoad.json';
import dotsLoad from '../../assets/dotsLoad.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

interface ILottie {
  dots?: boolean
}

const LottieLoading = ({ dots }: ILottie): JSX.Element => (
    <LottieView
      options={{...defaultOptions, animationData: dots ? dotsLoad : primaryLoad }}
      height={dots ? '20%' : '60%'}
      width={dots ? '20%' : '60%'}
      style={{ alignSelf: 'center', marginTop: dots ? 50 : 0 }}
    />
);

export default LottieLoading;
