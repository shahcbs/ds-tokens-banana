# ds-banana

This repository demonstrates the use of design tokens across multiple platforms. Design tokens are a way to store design decisions, such as colors, typography, and spacing, in a format that can be easily consumed by different platforms and tools.

## Overview

- **Main Files**:
  - `build.js`: Contains the build logic for the design tokens.
  - `customtransforms.js`: Contains custom transformations for the design tokens.
  - `platformconfig.js`: Contains platform-specific configurations for the design tokens.

## Design Tokens

Design tokens are stored in the `tokens` directory. They are categorized into `01_global` and `02_themes`.

### Base Tokens

- `color.json`: Contains base design tokens related to colors.

### Theme Tokens

- `light.json`: Contains theme-specific design tokens for the light theme.
- `dark.json`: Contains theme-specific design tokens for the dark theme.
- `hc.json`: Contains theme-specific design tokens for the hc theme.
  
## Setup and Usage

1. **Clone the repository**:
   
```bash
git clone https://github.com/shahcbs/ds-tokens-banana.git             
```

2. **Navigate to the root directory**:

```bash
cd ds-tokens-banana
```

3. **Install the required npm packages**:

```bash
npm install
```

4. **Build the design tokens**:

```bash
npm run build
```

6. **(Optional) Clean the build**:

```bash
npm run clean
```

## Customization

You can customize the design tokens by syncing with Figma file or modifying the JSON files in the `tokens` directory. Additionally, you can add custom transformations by updating the `customtransforms.js` file and platform-specific configurations by updating the `platformconfig.js` file.
