// @flow strict
const StyleDictionary = require('style-dictionary');


const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFileHeader({
    name: 'flowCustomHeader',
    // defaultMessage contains the 2 lines that appear in the default file header
    fileHeader: (defaultMessage) => [`@flow strict`, ...defaultMessage],
});

StyleDictionary.registerFormat({
    name: 'css/typography',
    formatter: ({ dictionary }) => {
        let cssOutput = '';

        Object.keys(dictionary.properties).forEach(style => {
            const styleProperties = dictionary.properties[style];
            let cssProperties = '';

            // Check if this is a typography style by looking for typical typography properties
            const hasTypographyProps = [
                "font-family",
                "font-weight",
                "font-size",
                "letter-spacing",
                "line-height",
                "text-transform",
                "text-decoration"
            ].some(prop => styleProperties[prop]);

            if (hasTypographyProps) {
                // Font Family
                if (styleProperties["font-family"]) {
                    const fontFamily = styleProperties["font-family"].value.split(',')[0].trim();
                    cssProperties += `  font-family: ${fontFamily};\n`;
                }

                // Font Weight
                if (styleProperties["font-weight"]) {
                    const fontWeight = styleProperties["font-weight"].value;
                    cssProperties += `  font-weight: ${fontWeight};\n`;
                }

                // Font Size
                if (styleProperties["font-size"]) {
                    const fontSize = styleProperties["font-size"].value;
                    cssProperties += `  font-size: ${fontSize};\n`;
                }

                // Letter Spacing
                if (styleProperties["letter-spacing"]) {
                    const letterSpacing = styleProperties["letter-spacing"].value;
                    cssProperties += `  letter-spacing: ${letterSpacing};\n`;
                }

                // Line Height
                if (styleProperties["line-height"]) {
                    const lineHeight = styleProperties["line-height"].value;
                    cssProperties += `  line-height: ${lineHeight};\n`;
                }

                // Text Transform (text-case in the JSON but text-transform in CSS)
                if (styleProperties["text-transform"]) {
                    const textTransform = styleProperties["text-transform"].value;
                    cssProperties += `  text-transform: ${textTransform};\n`;
                }

                // Text Decoration
                if (styleProperties["text-decoration"]) {
                    const textDecoration = styleProperties["text-decoration"].value;
                    cssProperties += `  text-decoration: ${textDecoration};\n`;
                }

                // Construct CSS class
                cssOutput += `.${style} {\n${cssProperties}}\n\n`;
            }
        });

        return cssOutput;
    },
});

// Value transformer
StyleDictionary.registerTransform({
    name: 'color/jsonflat',
    type: 'value',
    transitive: true,
    matcher: token => token.type === 'color',
    transformer: token => {
        return token.original.value.value; // Extract the value
    },
});

StyleDictionary.registerTransform({
    name: 'size/android/pxToDpOrSp',
    type: 'value',
    matcher(prop) {
        return prop.value.match(/^-?[\d.]+px$/);
    },
    transformer(prop) {
        const numericalValue = parseFloat(prop.value.replace(/px$/, '')); // Convert "16px" to 16
        return prop.name.includes('font')
            ? `${numericalValue}sp`
            : `${numericalValue}dp`;
    },
});


const isFontSize = (token) => token.attributes.category === 'font-size';

const throwSizeError = (tokenName, value, unit) => {
    throw new Error(`Error in token ${tokenName}. Invalid value: ${value}. Expected a px value for ${unit}.`);
};

StyleDictionary.registerTransform({
    name: 'size/compose/pxToDpOrSp',
    type: 'value',
    matcher: (prop) => prop.value.match(/^-?[\d.]+px$/),
    transformer: function (token, options) {
        const numericalValue = parseFloat(token.value.replace(/px$/, ''));

        if (isNaN(numericalValue)) {
            throwSizeError(token.name, token.value, isFontSize(token) ? 'sp' : 'dp');
        }

        return isFontSize(token)
            ? `${numericalValue}.sp`
            : `${numericalValue}.dp`;
    },
});

StyleDictionary.registerFormat({
    name: 'compose/typography',
    formatter: ({ dictionary }) => {
        let typographyEntries = '';
        let fontWeights = '';

        const fontWeightMapping = {
            '400': 'Normal',
            '700': 'Bold',
        };

        const headers = [
            'import androidx.compose.material.Typography',
            'import androidx.compose.ui.text.TextStyle',

        ];

        const fontWeightsProperties = dictionary.properties["font-weight"];
        Object.keys(fontWeightsProperties).forEach(weight => {
            const fontWeightValue = fontWeightMapping[fontWeightsProperties[weight].value] || fontWeightsProperties[weight].value;
            const fontName = `proxima_nova_a_${weight}`;
            fontWeights += `    Font(R.font.${fontName}, FontWeight.${fontWeightValue}),\n`;
        });

        if (fontWeights) {
            headers.push(
                'import androidx.compose.ui.text.font.Font',
                'import androidx.compose.ui.text.font.FontFamily',
                'import androidx.compose.ui.text.font.FontWeight'
            );
        }

        Object.keys(dictionary.properties).forEach(style => {
            const styleProperties = dictionary.properties[style];
            if (styleProperties["font-size"]) {
                headers.push('import androidx.compose.ui.unit.sp');
            }
            if (styleProperties["font-style"]) {
                headers.push('import androidx.compose.ui.text.font.FontStyle');
            }
            if (styleProperties["font-size"] && styleProperties["font-family"] && styleProperties["font-weight"]) {
                const fontSize = styleProperties["font-size"].value.replace('px', '.0.sp');
                const fontFamily = styleProperties["font-family"].value.split(',')[0].trim();
                const fontWeight = fontWeightMapping[styleProperties["font-weight"].value] || styleProperties["font-weight"].value;
                const letterSpacing = styleProperties["letter-spacing"] && styleProperties["letter-spacing"].value.replace('px', '.0.sp');

                typographyEntries += `
${style} = TextStyle(
    fontFamily = proximaNova,
    fontWeight = FontWeight.${fontWeight},
    fontSize = ${fontSize},
    fontStyle = FontStyle.Normal,` +
                    (letterSpacing ? `\n    letterSpacing = ${letterSpacing},` : '') + `
),
`;
            }
        });

        // Deduplicate the headers
        const uniqueHeaders = [...new Set(headers)].join('\n');

        return `
package typography

${uniqueHeaders}

internal val proximaNova = FontFamily(
${fontWeights.trim()}
)

val AppTypography = Typography(${typographyEntries.trim()})
`;
    },
});




StyleDictionary.registerTransform({
    name: 'size/pxToCGFloat',
    type: 'value',
    matcher: (prop) => {
        return prop.value.match(/^-?[\d.]+px$/);
    },
    transformer: (prop) => {
        return parseFloat(prop.value).toString();
    },
});

StyleDictionary.registerFormat({
    name: 'customJSIndividualFormat',
    formatter: ({ dictionary }) =>
        `// @flow strict\n\n${StyleDictionary.format['javascript/es6']({
            dictionary,
        })}`,
});

// $FlowFixMe[missing-local-annot]
function addFlowTypes(dictionaryTokens) {
    return `// @flow strict\n/* This file is automatically generated by style-dictionary*/\n\ndeclare module.exports: {|\n${dictionaryTokens
        .map((token) => `  +"${token.name}": ${JSON.stringify(token.value)}`)
        .join(',\n')}\n|}`;
}

function jsonFlatFlow() {
    // $FlowFixMe[missing-local-annot]
    return ({ dictionary }) => addFlowTypes(dictionary.allTokens);
}

StyleDictionary.registerFormat({
    name: 'jsonFlatFlow',
    formatter: jsonFlatFlow(),
});