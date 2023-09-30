export default {
    baseStyle: {
        control: {
            bg: '#F8F8F8',
            borderColor: '#F8F8F8',
            rounded: '4px',
            width: '24px',
            height: '24px',
            _checked: {
                color: 'primary.500',
                bg: '#F8F8F8',
                borderColor: '#F8F8F8',
                _before: {
                    rounded: '3px',
                },
            },
        },
    },
    variants: {
        primary: {
            container: {
                rounded: '8px',
                border: '1px solid #A9A9A9',
                p: '24px',
                display: 'flex',
                _checked: {
                    border: '2px solid #2D8CFF',
                    bg: 'primary.50',
                },
            },
            label: {
                display: 'flex',
                w: '100%',
                alignItems: 'center',
                color: 'border',
                gap: '10px',
                textAlign: 'left',
                _checked: {
                    color: '#2D8CFF',
                },
            },
            control: { visibility: 'hidden', w: 0, h: 0 },
        },
    },
};
