export default {
    baseStyle: {
        container: {
            p: '8px 16px',
            rounded: '28px',
        },
        label: {
            fontSize: '13px',
        },
    },
    variants: {
        subtle: {
            container: {
                p: '8px 16px',
                border: '1.5px solid',
                borderColor: 'primary.500',
                bg: 'bgGray',
                rounded: '28px',
            },
            label: {
                fontSize: '13px',
                color: 'heading',
            },
        },
        outline: {
            label: {
                fontSize: '13px',
                color: 'heading',
            },
        },
        gray: {
            container: {
                bg: 'lightGray',
                fontSize: '13px',
            },
            label: {
                fontSize: '13px',
                color: 'heading',
            },
        },
    },
};
