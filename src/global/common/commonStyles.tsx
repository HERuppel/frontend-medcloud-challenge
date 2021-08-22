import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../colors';

interface ILoading {
  loadingSize: number
}

const commonStyles = makeStyles<Theme, ILoading>(() =>
  createStyles({
    '@keyframes loadingAnimation': {
      '100%': {
        transform: 'rotate(1turn)'
      }
    },
    loadingAnimation: {
      width: ({ loadingSize }) => loadingSize,
      height: ({ loadingSize }) => loadingSize,
      borderRadius: '50%',
      border: `4px solid ${colors.blueSaphire}`,
      borderTopColor: colors.white,
      animation: '$loadingAnimation 1s infinite'
    }
  })
);


export const Loading = ({ loadingSize }: ILoading): JSX.Element => {
  const classes = commonStyles({ loadingSize });

  return (
    <div className={classes.loadingAnimation} />
  );
};

