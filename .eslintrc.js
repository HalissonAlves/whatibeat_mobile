module.exports = {
    'env': {
        es6: true,
        node: true,
        jest: true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'parser': '@typescript-eslint/parser',
    'overrides': [{
        'files': ['*.ts', '*.tsx'],
        'parserOptions': {
            'ecmaFeatures': {
                'jsx': true
            },
            'ecmaVersion': 12,
            'sourceType': 'module',
            'project': './tsconfig.json',
        },
    }],
    'plugins': [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'prettier'
    ],
    'rules': {
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'auto',
            }
        ],
        'indent': [
            'error',
            2,
            { 'SwitchCase': 1 }
        ],
        'quotes': [
            'error',
            'single',
            { 'avoidEscape': true }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
};