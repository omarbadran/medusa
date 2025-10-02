# Migrating to Tailwind CSS v4

This guide helps you migrate your Medusa UI project from Tailwind CSS v3 to v4.

## Prerequisites

- @medusajs/ui-preset version 2.10.3 or later
- Node.js 16 or later

## Migration Steps

### Step 1: Update Tailwind CSS

Update your Tailwind CSS dependency to v4:

```bash
npm install tailwindcss@^4.0.0
# or
yarn add tailwindcss@^4.0.0
```

### Step 2: Choose Your Configuration Approach

Tailwind CSS v4 offers two configuration approaches:

#### Option A: CSS-First Configuration (Recommended)

This is the new v4 way. Create or update your main CSS file:

```css
/* styles.css */
@import "tailwindcss";
@config "@medusajs/ui-preset";
```

Or import the preset CSS directly:

```css
/* styles.css */
@import "tailwindcss";
@import "@medusajs/ui-preset/css";
```

Then update your build process to use this CSS file as the entry point.

#### Option B: Keep JavaScript Configuration (Legacy)

If you prefer to keep using JavaScript configuration, v4 still supports it. Your existing `tailwind.config.js` will continue to work:

```js
module.exports = {
  presets: [require("@medusajs/ui-preset")],
  content: [
    // your content paths
  ],
}
```

### Step 3: Update Build Scripts (If Using CSS-First)

If you're using the CSS-first approach, update your build scripts:

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/styles.css -o ./dist/output.css"
  }
}
```

### Step 4: Test Your Application

1. Build your project
2. Check that all styles are applied correctly
3. Test both light and dark modes
4. Verify custom components using Medusa UI classes

## Breaking Changes in v4

Tailwind CSS v4 has minimal breaking changes that affect Medusa UI:

- **Plugin API**: Mostly unchanged, the preset continues to work
- **Configuration**: CSS-first is new, but JavaScript config still works
- **Content Detection**: Works the same way

## Differences Between v3 and v4

### What's the Same

- All Medusa UI classes work identically
- Design tokens and colors are unchanged
- Dark mode implementation is the same
- Component styles remain consistent

### What's New in v4

- **Performance**: Faster build times
- **CSS-First Config**: Optional modern configuration approach
- **Better IntelliSense**: Improved editor support
- **Smaller Output**: More optimized CSS output

## Troubleshooting

### Issue: Classes not being generated

**Solution**: Ensure your content paths include all files using Medusa UI classes:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
}
```

### Issue: CSS variables not working

**Solution**: Make sure the preset is loaded before your custom styles:

```css
@import "tailwindcss";
@config "@medusajs/ui-preset";
/* Your custom styles here */
```

### Issue: Dark mode not working

**Solution**: Verify your dark mode configuration matches your HTML structure:

```js
// For class-based dark mode
module.exports = {
  darkMode: "class", // or ["class", ".dark"]
}
```

## Need Help?

- [Medusa UI Documentation](https://docs.medusajs.com/ui)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Medusa Discord](https://discord.gg/xpCwq3Kfn8)

## FAQ

**Q: Do I need to migrate to v4?**
A: No, v3 is still fully supported. The preset works with both versions.

**Q: Can I use v4 features with the JavaScript config?**
A: Yes, most v4 features work with both configuration approaches.

**Q: Will my existing v3 config work with v4?**
A: Yes, the preset is backward compatible. Your existing config will work without changes.

**Q: What if I want to stay on v3?**
A: That's perfectly fine! The preset supports both v3 and v4. You don't need to upgrade.
