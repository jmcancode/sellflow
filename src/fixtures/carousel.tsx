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
        {t('Made in Spain', 'Designed in San Antonio')}
      </Text>
    ),
    image:
      'https://images.unsplash.com/photo-1451930393367-e1e01fc2bacc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  }
];

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    color: COLORS.darkWhite,
    fontSize: FONT_SIZE.ohShit,
    textTransform: 'uppercase'
  },
});
