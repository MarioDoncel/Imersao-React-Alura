// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        50: string,
        100: string,
        200: string,
        300: string,
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
        900: string
      },
      neutrals: {
        0: string,
        50: string,
        100: string,
        200: string,
        300: string,
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
        900: string,
        999: string
      }
    }
  }
}