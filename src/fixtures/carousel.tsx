import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'exoflex';

import { CarouselItem } from '../types/types';
import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';

export const carouselData: Array<CarouselItem> = [
  {
    render: () => (
      <Text weight="bold" style={styles.title}>
        {t('Made in Spain')}
      </Text>
    ),
    image:
      'https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      
  }
];

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    color: COLORS.white,
    fontSize: FONT_SIZE.ohShit,
    textTransform: 'uppercase'
  },
});
