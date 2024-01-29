
//
// Color.m
//

// Do not edit directly
// Generated on Mon, 29 Jan 2024 19:15:00 GMT


#import "Color.h"

@implementation Color

+ (UIColor *)color:(ColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.090f green:0.090f blue:0.090f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.933f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.867f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.694f green:0.729f blue:0.984f alpha:1.000f],
[UIColor colorWithRed:0.545f green:0.596f blue:0.976f alpha:1.000f],
[UIColor colorWithRed:0.392f green:0.459f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.325f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.192f green:0.259f blue:0.769f alpha:1.000f],
[UIColor colorWithRed:0.145f green:0.196f blue:0.576f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.129f blue:0.384f alpha:1.000f],
[UIColor colorWithRed:0.047f green:0.067f blue:0.192f alpha:1.000f],
[UIColor colorWithRed:0.024f green:0.031f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.925f blue:0.984f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.851f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.733f green:0.698f blue:0.937f alpha:1.000f],
[UIColor colorWithRed:0.604f green:0.549f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.396f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.247f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.196f blue:0.678f alpha:1.000f],
[UIColor colorWithRed:0.204f green:0.149f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.133f green:0.098f blue:0.337f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.051f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.035f green:0.024f blue:0.086f alpha:1.000f],
[UIColor colorWithRed:0.976f green:0.992f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.980f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.914f green:0.965f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.945f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.929f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.910f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.624f green:0.729f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.467f green:0.545f blue:0.573f alpha:1.000f],
[UIColor colorWithRed:0.314f green:0.365f blue:0.380f alpha:1.000f],
[UIColor colorWithRed:0.157f green:0.180f blue:0.192f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.102f blue:0.110f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.984f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.965f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.933f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.639f green:0.867f blue:0.737f alpha:1.000f],
[UIColor colorWithRed:0.365f green:0.765f blue:0.537f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.663f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.463f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.039f green:0.267f blue:0.137f alpha:1.000f],
[UIColor colorWithRed:0.020f green:0.133f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.067f blue:0.035f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.035f blue:0.020f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.984f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.973f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.945f blue:0.843f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.894f blue:0.686f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.455f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.733f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.514f blue:0.153f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.294f blue:0.086f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.145f blue:0.043f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.075f blue:0.024f alpha:1.000f],
[UIColor colorWithRed:0.047f green:0.035f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.945f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.910f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:0.976f green:0.816f blue:0.851f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.635f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.914f green:0.361f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.875f green:0.086f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.612f green:0.059f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.349f green:0.035f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.016f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.086f green:0.008f blue:0.027f alpha:1.000f],
[UIColor colorWithRed:0.035f green:0.004f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.988f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.961f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.878f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.620f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.459f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:0.380f green:0.380f blue:0.380f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.196f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.196f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.459f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.090f blue:0.090f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.459f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:0.392f green:0.459f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.024f green:0.031f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.192f green:0.259f blue:0.769f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.325f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.620f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.878f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.459f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.010f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.050f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.100f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.200f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.300f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.400f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.500f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.600f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.700f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.800f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.122f alpha:0.900f],
[UIColor colorWithRed:0.196f green:0.196f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.090f blue:0.090f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.455f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.145f blue:0.043f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.514f blue:0.153f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.733f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.090f blue:0.090f alpha:1.000f],
[UIColor colorWithRed:0.192f green:0.259f blue:0.769f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.867f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.545f green:0.596f blue:0.976f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.325f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.914f green:0.361f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.016f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.612f green:0.059f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.875f green:0.086f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.365f green:0.765f blue:0.537f alpha:1.000f],
[UIColor colorWithRed:0.020f green:0.133f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.463f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.663f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.620f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.878f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.878f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.051f green:0.051f blue:0.051f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
