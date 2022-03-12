import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* dosis-regular - latin */
      // @font-face {
      //   font-family: 'Dosis';
      //   font-style: normal;
      //   font-weight: 400;
      //   src: url('/WebFonts/fonts/dosis-v25-latin-regular.eot'); /* IE9 Compat Modes */
      //   src: local(''),
      //   url('/fonts/dosis-v25-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      //   url('/fonts/dosis-v25-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
      //   url('/fonts/dosis-v25-latin-regular.woff') format('woff'), /* Modern Browsers */
      //   url('/fonts/dosis-v25-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
      //   url('/fonts/dosis-v25-latin-regular.svg#Dosis') format('svg'); /* Legacy iOS */
      // }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: bold;
        src: url('/WebFonts/fonts/eot/iranyekanwebboldfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebboldfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebboldfanum.woff') format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebboldfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 100;
        src: url('/WebFonts/fonts/eot/iranyekanwebthinfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebthinfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebthinfanum.woff') format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebthinfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 300;
        src: url('/WebFonts/fonts/eot/iranyekanweblightfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanweblightfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanweblightfanum.woff') format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanweblightfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: normal;
        src: url('/WebFonts/fonts/eot/iranyekanwebregularfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebregularfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebregularfanum.woff')
            format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebregularfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 500;
        src: url('/WebFonts/fonts/eot/iranyekanwebmediumfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebmediumfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebmediumfanum.woff') format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebmediumfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 800;
        src: url('/WebFonts/fonts/eot/iranyekanwebextraboldfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebextraboldfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebextraboldfanum.woff')
            format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebextraboldfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 850;
        src: url('/WebFonts/fonts/eot/iranyekanwebblackfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebblackfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebblackfanum.woff') format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebblackfanum.ttf') format('truetype');
      }
      
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 900;
        src: url('/WebFonts/fonts/eot/iranyekanwebextrablackfanum.eot');
        src: url('/WebFonts/fonts/eot/iranyekanwebextrablackfanum.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-8 */ url('/WebFonts/fonts/woff/iranyekanwebextrablackfanum.woff')
            format('woff'),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('/WebFonts/fonts/ttf/iranyekanwebextrablackfanum.ttf') format('truetype');
      }
    `}
  />
)

// const Fonts = () => (
//   <Global
//     styles={`
//       /* dosis-regular - latin */
//       @font-face {
//         font-family: 'Dosis';
//         font-style: normal;
//         font-weight: 400;
//         src: url('/WebFonts/fonts/dosis-v25-latin-regular.eot'); /* IE9 Compat Modes */
//         src: local(''),
//         url('/fonts/dosis-v25-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//         url('/fonts/dosis-v25-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
//         url('/fonts/dosis-v25-latin-regular.woff') format('woff'), /* Modern Browsers */
//         url('/fonts/dosis-v25-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
//         url('/fonts/dosis-v25-latin-regular.svg#Dosis') format('svg'); /* Legacy iOS */
//       }
//     `}
//   />
// )
export default Fonts
