export default {
    baseStyle: {
        fontWeight: '500',
        fontSize: '16px',
    },
    sizes: {
        lg: {
            fontSize: '16px',
        },
    },
    variants: {
        secondary: {
            bg: 'lightGray',
            color: 'text',
        },
        tabBtn: {
            p: '30px 0',
            rounded: 0,
            fontWeight: 500,
            color: '#D4D4D4',
            borderBottom: '1px solid #D4D4D4',
            _hover: {
                color: '#2d8cff',
                borderColor: '#2d8cff',
            },
            '&.active': {
                color: '#2d8cff',
                borderColor: '#2d8cff',
            },
        },
        danger: {
            color: '#EA3200',
            bg: 'rgba(234, 50, 0, 0.10)',
        },
        light: {
            bg: 'primary.50',
            color: 'primary.500',
            border: '1px solid',
            borderColor: 'primary.500',
        },
    },
};
