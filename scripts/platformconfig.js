// platformconfig.js

const fs = require('fs');

const themesConfig = JSON.parse(fs.readFileSync('./tokens/$themes.json', 'utf8'));

function getThemeConfig(themeName) {
    let sources = [`${themesConfig.tokenSetsDirPath}/*/*.json`];

    // Check if the theme has any dependencies
    if (themesConfig.themeDependencies && themesConfig.themeDependencies[themeName]) {
        themesConfig.themeDependencies[themeName].forEach(dependency => {
            sources.push(`${themesConfig.tokenSetsDirPath}/themes/${dependency}.json`);
        });
    }

    sources.push(`${themesConfig.tokenSetsDirPath}/themes/${themeName}.json`);

    return {
        source: sources,
        platforms: {
            web: {
                transformGroup: "web",
                buildPath: `dist/web/${themeName}/`,
                transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/rgb"],
                files: [{
                    destination: "variables.css",
                    format: "css/variables",
                    options: {
                        outputReferences: true
                    }
                },
                {
                    destination: "typography.css",
                    format: "css/typography"
                }]
            },

            json: {
                transformGroup: "css",
                buildPath: `dist/json/${themeName}/`,
                transforms: ["attribute/cti", "name/ti/camel", "size/object", "color/hex8"],
                files: [
                    {
                        destination: "color.json",
                        format: "json/flat",
                        filter: {
                            attributes: {
                                category: "color",
                            }
                        }
                    },
                    {
                        destination: "size.json",
                        format: "json/flat",
                        filter: {
                            attributes: {
                                category: "size"
                            }
                        }
                    },
                ]
            },
            android: {
                transformGroup: "android",
                buildPath: `dist/andorid/${themeName}/`,
                transforms: [
                    "attribute/cti",
                    "name/cti/snake",
                    "color/hex8android",
                    "size/android/pxToDpOrSp" //custom format
                ],
                files: [
                    {
                        destination: "colors.xml",
                        format: "android/colors",
                        filter: {
                            attributes: {
                                category: "color"
                            }
                        }
                    },
                    {
                        destination: "spacing.xml",
                        format: "android/resources",
                        resourceType: "dimen",
                        filter: {
                            attributes: {
                                category: "spacing"
                            }
                        }
                    },
                    {
                        destination: "size.xml",
                        format: "android/resources",
                        resourceType: "dimen",
                        filter: {
                            attributes: {
                                category: "size"
                            }
                        }
                    },
                    {
                        destination: "font-size.xml",
                        format: "android/resources",
                        resourceType: "dimen",
                        filter: {
                            attributes: {
                                category: "font-size"
                            }
                        }
                    },
                    {
                        destination: "opacity.xml",
                        format: "android/resources",
                        resourceType: "dimen",
                        filter: {
                            attributes: {
                                category: "opacity"
                            }
                        }
                    }
                ]
            },
            compose: {
                transformGroup: "compose",
                buildPath: `dist/compose/${themeName}/`,
                transforms: [
                    "attribute/cti",
                    "name/ti/camel",
                    "color/composeColor",
                    "size/compose/pxToDpOrSp", //custom format

                ],
                files: [
                    {
                        destination: "color.kt",
                        format: "compose/object",
                        className: "Color",
                        packageName: "Color",
                        filter: {
                            attributes: {
                                category: "color"
                            }
                        }
                    },
                    {
                        destination: "type.kt",
                        format: "compose/typography",  //custom format

                    },
                    {
                        destination: "spacing.kt",
                        format: "compose/object",
                        className: "Spacing",
                        packageName: "Spacing",
                        type: "float",
                        filter: {
                            attributes: {
                                category: "spacing"
                            }
                        }
                    },
                    {
                        destination: "size.kt",
                        format: "compose/object",
                        className: "Size",
                        packageName: "Size",
                        type: "float",
                        filter: {
                            attributes: {
                                category: "size"
                            }
                        }
                    },
                    {
                        destination: "fontSize.kt",
                        format: "compose/object",
                        className: "Size",
                        packageName: "fontSize",
                        type: "float",
                        filter: {
                            attributes: {
                                category: "font-size"
                            }
                        }
                    }
                ]
            },
            ios: {
                transformGroup: "ios",
                buildPath: `dist/ios/${themeName}/`,
                transforms: [
                    "attribute/cti",
                    "name/cti/camel",
                    "color/UIColor",
                    "font/objC/literal",
                    "size/pxToCGFloat" //custom format
                ],
                files: [
                    {
                        destination: "VDSColor.h",
                        format: "ios/colors.h",
                        className: "VDSColor",
                        type: "VDSColorName",
                        filter: {
                            attributes: {
                                category: "color"
                            }
                        }
                    },
                    {
                        destination: "VDSColor.m",
                        format: "ios/colors.m",
                        className: "VDSColor",
                        type: "VDSColorName",
                        filter: {
                            attributes: {
                                category: "color"
                            }
                        }
                    }
                ]
            },
            Swift: {
                transformGroup: "ios-swift",
                buildPath: `dist/ios-swift/${themeName}/`,
                transforms: [
                    "attribute/cti",
                    "name/cti/camel",
                    "color/UIColorSwift",
                    "font/swift/literal",
                    "size/pxToCGFloat" //custom format
                ],
                files: [
                    {
                        "destination": "VDS.swift",
                        "format": "ios-swift/class.swift",
                        "className": "VDS",
                        "filter": {}
                    }
                ]
            },
            swiftSeparateEnums: {
                transformGroup: "ios-swift-separate",
                buildPath: `dist/ios-swift/${themeName}/`,
                transforms: [
                    "attribute/cti",
                    "name/ti/camel",
                    "color/UIColorSwift",
                    "font/swift/literal",
                    "size/pxToCGFloat" //custom format
                ],
                files: [
                    {
                        destination: "VDSColor.swift",
                        format: "ios-swift/enum.swift",
                        className: "VDSColor",
                        filter: {
                            attributes: {
                                category: "color"
                            }
                        }
                    },
                    {
                        destination: "VDSSize.swift",
                        format: "ios-swift/enum.swift",
                        className: "VDSSize",
                        filter: {
                            attributes: {
                                category: "size"
                            }
                        }
                    }
                ]
            }
        }
    };
}

module.exports = getThemeConfig;






