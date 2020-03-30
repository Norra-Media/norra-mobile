module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'test/*': ['./test/'],
          '@components': './src/components/',
          '@modules': './src/modules/',
          '@containers': './src/containers/',
          '@assets': './src/assets/',
        },
      },
    ],
  ],
};
