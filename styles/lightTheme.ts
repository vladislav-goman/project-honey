import { colors, breakpoints } from './share';
import { mixins } from './mixins';

export const theme = {
  ...colors,
  ...breakpoints,
  ...mixins,
  midTransition: 'all 0.3s',
  primaryColor: colors.flushOrange,
};
