# Hex to OKLCH Converter

A VS Code extension that converts hex color codes to OKLCH format.

## Features

- Convert hex color codes to OKLCH format
- Two ways to convert:
  1. Use Command Palette: `Convert Hex to OKLCH` - Enter hex code manually
  2. Select hex code in editor and right-click: `Convert Selected Hex to OKLCH` - Replaces selected text

## Usage

### Method 1: Command Palette

1. Open Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows/Linux)
2. Type "Convert Hex to OKLCH"
3. Enter your hex color code (e.g., `#ff0000` or `ff0000`)
4. The OKLCH value will be shown and copied to clipboard

### Method 2: Text Selection

1. Select a hex color code in your editor (e.g., `#ff0000`)
2. Right-click and select "Convert Selected Hex to OKLCH"
3. The selected hex code will be replaced with the OKLCH equivalent

## Examples

- `#ff0000` → `oklch(62.80% 0.2577 29.2)`
- `#00ff00` → `oklch(86.64% 0.2948 142.5)`
- `#0000ff` → `oklch(45.20% 0.3132 264.1)`

## What is OKLCH?

OKLCH is a color space that provides better perceptual uniformity compared to HSL. It's part of the newer CSS Color Module Level 4 specification and offers:

- **L** (Lightness): 0-100%
- **C** (Chroma): 0+ (saturation)
- **H** (Hue): 0-360° (hue angle)

## Requirements

- VS Code 1.74.0 or higher

## Installation

1. Install the extension from the VS Code marketplace
2. Or install from VSIX file using `code --install-extension hex-to-oklch-0.0.1.vsix`

## Development

To set up for development:

```bash
npm install
npm run compile
```

Press `F5` to open a new Extension Development Host window with the extension loaded.
