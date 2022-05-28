module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never',
                children: 'never',
            },
        ],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
    },
};
