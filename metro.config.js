const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = getDefaultConfig(__dirname); // Corrected this line
  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'db'),
      sourceExts: [...sourceExts, 'db'],
    },
  };
})();
