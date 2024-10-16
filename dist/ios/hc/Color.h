
//
// Color.h
//

// Do not edit directly
// Generated on Mon, 14 Oct 2024 20:31:34 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, ColorName) {
colorBlack,
colorWhite,
colorBlue50,
colorBlue100,
colorBlue200,
colorBlue300,
colorBlue400,
colorBlue500,
colorBlue600,
colorBlue700,
colorBlue800,
colorBlue900,
colorBlue950,
colorPurple50,
colorPurple100,
colorPurple200,
colorPurple300,
colorPurple400,
colorPurple500,
colorPurple600,
colorPurple700,
colorPurple800,
colorPurple900,
colorPurple950,
colorMint50,
colorMint100,
colorMint200,
colorMint300,
colorMint400,
colorMint500,
colorMint600,
colorMint700,
colorMint800,
colorMint900,
colorMint950,
colorGreen50,
colorGreen100,
colorGreen200,
colorGreen300,
colorGreen400,
colorGreen500,
colorGreen600,
colorGreen700,
colorGreen800,
colorGreen900,
colorGreen950,
colorYellow50,
colorYellow100,
colorYellow200,
colorYellow300,
colorYellow400,
colorYellow500,
colorYellow600,
colorYellow700,
colorYellow800,
colorYellow900,
colorYellow950,
colorRed50,
colorRed100,
colorRed200,
colorRed300,
colorRed400,
colorRed500,
colorRed600,
colorRed700,
colorRed800,
colorRed900,
colorRed950,
colorGrey50,
colorGrey100,
colorGrey200,
colorGrey300,
colorGrey400,
colorGrey500,
colorGrey600,
colorGrey700,
colorGrey800,
colorGrey900,
colorGrey950,
colorBgSurface,
colorBgSubtle,
colorBgMuted,
colorBgCanvas,
colorAccentDisabled,
colorAccentDefault,
colorAccentSubtle,
colorAccentMuted,
colorAccentEmphasis,
colorFgDefault,
colorFgOnAccent,
colorFgMuted,
colorFgSubtle,
colorFgOnDisabled,
colorFgDisabled,
colorFgOnDark,
colorFgOpacity1,
colorFgOpacity5,
colorFgOpacity10,
colorFgOpacity20,
colorFgOpacity30,
colorFgOpacity40,
colorFgOpacity50,
colorFgOpacity60,
colorFgOpacity70,
colorFgOpacity80,
colorFgOpacity90,
colorBorderDefault,
colorOverlayBg,
colorWarningDefault,
colorWarningSubtle,
colorWarningMuted,
colorWarningEmphasis,
colorWarningOnWarning,
colorInfoDefault,
colorInfoSubtle,
colorInfoMuted,
colorInfoEmphasis,
colorInfoOnInfo,
colorErrorDefault,
colorErrorSubtle,
colorErrorMuted,
colorErrorEmphasis,
colorErrorOnError,
colorSuccessDefault,
colorSuccessSubtle,
colorSuccessMuted,
colorSuccessEmphasis,
colorSuccessOnSuccess,
colorInputBackground,
colorInputText,
colorInputPlaceholder,
colorInputBorderDefault,
colorInputBorderDisabled,
colorInputFgDisabled,
colorShadowDefault
};

@interface Color : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(ColorName)color;
@end
