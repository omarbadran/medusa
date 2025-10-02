<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa UI Preset
</h1>

<h4 align="center">
  <a href="https://docs.medusajs.com/ui">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>

<p align="center">
  Medusa's design system preset for Tailwind CSS (v3 & v4 compatible).
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/develop/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## Features

- ✅ **Tailwind CSS v3 & v4 Compatible**: Works with both major versions
- 🎨 **Design Tokens**: Complete design system with colors, typography, and effects
- 🌗 **Dark Mode Support**: Built-in light and dark mode tokens
- 📦 **Multiple Export Formats**: JavaScript config and CSS-based configuration

## Installation

```bash
npm install @medusajs/ui-preset
# or
yarn add @medusajs/ui-preset
```

## Usage

### Tailwind CSS v3

In your `tailwind.config.js`:

```js
module.exports = {
  presets: [require("@medusajs/ui-preset")],
  content: [
    // your content paths
  ],
}
```

### Tailwind CSS v4

#### Option 1: Using @config directive

In your CSS file:

```css
@import "tailwindcss";
@config "@medusajs/ui-preset";
```

#### Option 2: Direct CSS import

In your CSS file:

```css
@import "tailwindcss";
@import "@medusajs/ui-preset/css";
```

## What's Included

The preset provides:

- **Design Tokens**: CSS custom properties for colors, effects, and spacing
- **Typography Components**: Pre-styled text components (`.h1-webs`, `.txt-compact-medium`, etc.)
- **Theme Configuration**: Colors, shadows, and animations
- **Dark Mode**: Automatic dark mode support with `.dark` class or media query

## Development

This package is part of the Medusa monorepo. To contribute:

1. Make changes to the source files in `src/`
2. Run `yarn build` to compile
3. Test your changes

## Note

Some parts of this package are auto-generated and require a Figma token associated with the Medusa Figma organization. If you are not a Medusa team member, you will not be able to regenerate design tokens. If you discover any issues, please open an issue instead of a PR.
