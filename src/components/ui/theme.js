import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const fonts = {
    opensans: '\'Open Sans\', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    lato: '\'Lato\', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    body: '\'Open Sans\', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
};

const theme = extendTheme({
    config,
    styles: {
        global:{
            body: {
                bg: 'gray.50',
                fontFamily: 'opensans',
                color: 'gray.700'
            }
        }
    },
    colors: {
        black: '#16161D',
        jey: {
            blue: '#31A7E6'
        },
        gray: {
            50: '#f9feff',
            100: '#f2f7f9',
            150: '#F1F1F1',
            200: '#E1EDF2',
            300: '#D4DEE6',
            400: '#C5D1D9',
            500: '#B0BEC5',
            600: '#8B979C',
            700: '#5B686E',
            800: '#3D4952',
            900: '#090F13',
        },
        blue: {
            50: '#def2ff',
            100: '#b1d9ff',
            200: '#83c5fb',
            300: '#31A7E6',
            400: '#0A9DEC',
            500: '#03A9F4',
            600: '#0288D1',
            700: '#0277BD',
            800: '#011e2e',
            900: '#00111d',
        },
        orange: {
            50: '#fff9db',
            100: '#ffe7af',
            200: '#fdd280',
            300: '#FF9675',
            400: '#FF774C',
            500: '#f15b22',
            600: '#d53c1f',
            700: '#a62e11',
            800: '#4d3900',
            900: '#1e1400',
        },
        green: {
            50: '#ebfae3',
            100: '#d0ebc3',
            200: '#b6dda0',
            300: '#BFE69D',
            400: '#92C565',
            500: '#8BC34A',
            600: '#609E3F',
            700: '#386529',
            800: '#1b3911',
            900: '#011500',
        },
    },
    components: {
        Button: {
            defaultProps: {
                size: 'md'
            },
            baseStyle: {
                rounded: '0.7em'
            },
        },
    },
    fonts,
});

export default theme;