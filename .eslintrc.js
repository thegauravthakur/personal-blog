module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['prettier', 'airbnb-base'],
    plugins: ['prettier', 'react', 'react-hooks'],
    rules: {
        'object-curly-spacing': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'linebreak-style': 'off',
        'comma-dangle': 'off',
        indent: 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'no-undef': 'off',
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
                noSortAlphabetically: false,
                callbacksLast: true,
                shorthandLast: false,
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],
        'import/no-unresolved': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                cjs: 'always',
                js: 'never',
                json: 'always',
                mjs: 'always',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/extensions': ['.ts', '.tsx', '.js', '.mjs'],
        'import/ignore': [
            'node_modules/',
            'build/',
            'cjs/',
            'coverage/',
            'dist/',
            'esm/',
            'lib/',
            'mjs/',
            '\\.{css,sass,scss,less,gif,png,jpg,jpeg,svg,gql,graphql,yml,yaml}$',
        ],
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.mjs', '.cjs', '.json'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
