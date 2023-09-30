import darkBg from 'assets/img/dark-bg.png';

export default {
    baseStyle: { color: 'text', fontSize: '14px' },
    variants: {
        primary: {
            color: 'orange',
        },
        secondary: {
            color: '#848484',
        },
        link: {
            rounded: '4px',
            fontSize: '14px',
            bg: `url(${darkBg}) no-repeat center`,
            p: '8px 14px',
            w: '100%',
            display: 'block',
            textAlign: 'center',
            '&.active': { color: 'orange' },
        },
        black: {
            color: 'black',
        },
    },
};
