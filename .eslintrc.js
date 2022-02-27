module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['import', 'react', 'jsx-a11y'],
  rules: {
    'import/no-anonymous-default-export': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-unescaped-entities': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: {
          '~/*': ['src/*']
        },
        extensions: ['.js', '.jsx']
      }
    },
    
  },
  overrides: [
    {
      files: ["**/*.js?(x)"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
};
