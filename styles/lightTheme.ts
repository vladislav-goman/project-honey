import { colors, breakpoints, fonts } from './share';
import { mixins } from './mixins';

export const theme = {
  ...colors,
  ...breakpoints,
  ...mixins,
  ...fonts,
  midTransition: 'all 0.3s',
  primaryColor: colors.flushOrange,
  primaryFontColor: colors.tuatara,
  secondaryFontColor: colors.silverChalice,
  primaryFont: fonts.montserrat,
  headerFont: fonts.sourceSansPro,
};
