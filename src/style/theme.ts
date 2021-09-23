import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const customTheme = extendTheme({
  fonts: {
    heading: 'Source Code Pro',
    body: 'Source Code Pro',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('white', 'blue.800')(props),
        color: mode('purple.900', 'white')(props),
      },
      a: {
        color: 'purple.900',
      },
      ol: {
        lineHeight: '69px',
        fontSize: '20px',
        marker: {
          color: 'red',
        },
      },
      hr: {
        borderTopColor: 'purple.900!important',
        opacity: '1!important',
        borderTopWidth: '3px!important',
        borderBottomWidth: '0',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props: any) => ({
        textDecoration: 'underline',
        fontSize: '69px',
        color: mode('purple.900', 'white')(props),
        fontWeight: 400,
      }),
    },
    OrderedList: {
      baseStyle: {
        lineHeight: '34px',
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 400,
      },
    },
  },
  breakpoints: {
    lg: '1540px',
  },
  initialColorMode: 'light',
});
