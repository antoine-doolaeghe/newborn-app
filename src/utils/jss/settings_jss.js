// settings_jss.js

// STYLE CONFIG
// =============
const SettingsJss = {

  borderRadius: {
    // ORDERED BY SIZE
    // i.e. 8px before 16px
    small: '5px',
    default: '8px',
    large: '16px',
    button: '20px',
    iconKey: '25px',
    xLarge: '32px',
    xxLarge: '40px',
  },

  colours: {
    black: '#000000',
    blue: '#0CA9F4',
    brightBlue: '#0B5578',
    brightGreen: '#5FC457',
    brightRed: '#E85B55',
    brightYellow: '#FCBA23',
    charcoal: '#555555',
    cyan: '#35CBD9',
    darkBlueGrey: '#1D2B34',
    darkGreen: '#3A7835',
    darkGrey: '#425765',
    darkOrange: '#FF7505',
    darkRed: '#903632',
    darkTurquoise: '#08CBD9',
    darkYellow: '#D28302',
    error: '#E85B55',
    green: '#08CBD9',
    lightGreen: '#B5E914',
    grey: '#728592',
    greySeven: '#777777',
    lightGrey: '#DCDCDC',
    lightTurquoise: '#06B6C2',
    lightBlue: '#D2F2F8',
    mediumGrey: '#C1CdCD',
    midGrey: '#E6EBEB',
    orange: '#FFA30B',
    paleGrey: '#F5F7F7',
    pink: '#EE0F6A',
    purple: '#9468f8',
    red: '#C10101',
    scoreGrey: '#C1CDCD',
    scoreHistoric: '#728592',
    scoreOrange: '#FE882F',
    scoreRed: '#E85B55',
    scoreYellow: '#FCBA23',
    scoreWhite: '#FFFFFF',
    sidebarBG: '#263742',
    sidebarGrey: '#C1CDCD',
    teal: '#06B7C3',
    turquoise: '#E6EBEB',
    veryLightGrey: '#F8F8F8',
    white: '#FFFFFF',
    yellow: '#FDCC5C',
  },

  fontFace: `'Source Sans Pro', sans-serif`,

  fontSize: {
    // ORDERED BY SIZE
    tiny: '10px',
    small: '12px',
    medsmall: '14px',
    medsmallPlus: '16px',
    medium: '18px',
    mediumLarge: '22px',
    mediumPlus: '26px',
    large: '30px',
    icon: '32px',
    input: '34px',
    xlarge: '38px',
    xxlarge: '48px',
    xxxlarge: '72px',
  },

  fontWeight: {
    // ORDERED BY WEIGHT VALUE
    light: 300,
    normal: 400,
    medium: 600,
    bold: 700,
  },

  keyPad: {
    doubleWidth: '122px',
    fullWidth: '252px',
    iconSize: '50px',
    keyHeight: '78px',
    keyWidth: '78px'
  },

  graphCell: {
    normal: 52,
    toolTip: 53,
    lastCell: 60,
    emptyCell: 61
  },

  spacing: {
    tiny: '3px',
    small: '5px',
    standard: '10px',
    msmall: '16px',
    medium: '20px',
    large: '32px',
    xlarge: '40px',
    xxlarge: '48px',
  },

  transparancy: {
    transBlack30: 'rgba(0, 0, 0, .3)',
    transBlack60: 'rgba(0, 0, 0, .6)',
  },

  zindex: {
    default: 1,
    low: 2,
    mid: 5,
    midHighLessOne: 99,
    midHigh: 100,
    midHighPlusOne: 101,
    high: 150,
    coverAll: 200,
    aboveCover: 500,


    // MOST ELEMENTS SHOULD USE zIndex ABOVE THIS COMMENT
    // THESE VALUES ARE SPECIFICALLY TO COMBAT DISPLAY ISSUES
    // CREATED BY 3rd PARTY CODE / MODULES
    lowerThanCover: 888,
    coverAllAboveCover: 999,
    buttonAboveCover: 5999,
    justUnderDataEntry: 5900,
    dataEntryAboveCover: 6999,
    aboveDataEntry: 7001,
    elementAboveCover: 7999,

    // *** NO ELEMENT HIGHER THAN THIS ***
    modalTopCover: 8999,
    modalAboveCover: 9999
  }
}

export default SettingsJss;
