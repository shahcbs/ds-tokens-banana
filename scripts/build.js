const StyleDictionary = require('style-dictionary');
const fs = require('fs');
const getThemeConfig = require('./platformconfig');

// Import the custom transforms and configurations
require('./customtransforms.js');

console.log('Build started...');
console.log('\n==============================================');

const themesConfig = JSON.parse(fs.readFileSync('./tokens/$themes.json', 'utf8'));
const themeFiles = fs.readdirSync(`${themesConfig.tokenSetsDirPath}/themes/`);
const themes = themeFiles.map(file => file.replace('.json', ''));

themes.forEach((themeName) => {
    const config = getThemeConfig(themeName);
    const SD = StyleDictionary.extend(config);
    SD.buildAllPlatforms();
});

console.log('\n==============================================');
console.log('\nBuild completed!');
