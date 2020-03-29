export const COLORS = {
  white: {
    main: '#ffffff',
    one: '#fafafa',
  },
  black: {
    main: '#111111',
    full: '#000000',
  },
  blue: {
    main: '#1890ff',
    one: '#001529',
    two: '#002140',
    three: '#15bde8',
  },
  red: {
    error: '#F5212d',
    two: '#ef506c',
  },
  green: {
    one: '#52c41a',
  },
  yellow: {
    one: '#ffe816',
  },
  grey: {
    one: '#d9d9d9',
    three: '#f0f2f5',
    four: '#6d7278',
  },
};

export const FONT_SIZES = {
  size1: '38px',
  size2: '30px',
  size3: '24px',
  size4: '20px',
  size5: '16px',
  size6: '14px',
  size7: '12px',
};

export const MEDIA_SIZES = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const DEVICES = {
  mobile: `(min-width: ${MEDIA_SIZES.mobile})`,
  tablet: `(min-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(min-width: ${MEDIA_SIZES.laptop})`,
  desktop: `(min-width: ${MEDIA_SIZES.desktop})`,
};
