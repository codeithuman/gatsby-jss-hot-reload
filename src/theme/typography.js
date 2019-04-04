import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'

const theme = {
  title: 'Design Vancouver Theme',
  baseFontSize: '16px',
  baseLineHeight: '28px',
  scaleRatio: 1.5625, // h1 font-size is 16px * 1.5625 = 25px
  headerFontFamily: ['sans-serif'],
  bodyFontFamily: ['sans-serif'],
  headerGray: 0,
  headerGrayHue: 0,
  bodyGray: 0,
  bodyGrayHue: 0,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  bodyColor: '#262525',
  blockMarginBottom: '22px',
  includeNormalize: true,
  // overrideStyles: (verticalRhythm, options, styles) => {
  //   return
  // },
  // overrideThemeStyles: (verticalRhythm, options, styles) => {
  //   return
  // },
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
// export const rhythm = typography.rhythm
// export const scale = typography.scale