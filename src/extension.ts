import * as vscode from 'vscode';
import { converter } from 'culori';

const toOklch = converter('oklch');

export function activate(context: vscode.ExtensionContext) {
  let convertHexToOklch = vscode.commands.registerCommand('hex-to-oklch.convertHexToOklch', async () => {
    const input = await vscode.window.showInputBox({
      prompt: 'Enter hex color code (e.g., #ff0000 or ff0000)',
      placeHolder: '#ff0000'
    });
    
    if (input) {
      const oklchColor = convertHexToOklchString(input);
      if (oklchColor) {
        vscode.env.clipboard.writeText(oklchColor);
        vscode.window.showInformationMessage(`OKLCH: ${oklchColor} (copied to clipboard)`);
      } else {
        vscode.window.showErrorMessage('Invalid hex color code');
      }
    }
  });
  
  let convertSelectedHexToOklch = vscode.commands.registerCommand('hex-to-oklch.convertSelectedHexToOklch', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    
    if (selectedText) {
      const oklchColor = convertHexToOklchString(selectedText);
      if (oklchColor) {
        editor.edit(editBuilder => {
          editBuilder.replace(selection, oklchColor);
        });
      } else {
        vscode.window.showErrorMessage('Selected text is not a valid hex color code');
      }
    }
  });
  
  context.subscriptions.push(convertHexToOklch, convertSelectedHexToOklch);
}

function convertHexToOklchString(hexColor: string): string | null {
  try {
    let cleanHex = hexColor.trim();
    
    if (!cleanHex.startsWith('#')) {
      cleanHex = '#' + cleanHex;
    }
    
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(cleanHex)) {
      return null;
    }
    
    const oklchColor = toOklch(cleanHex);
    
    if (!oklchColor) {
      return null;
    }
    
    const { l, c, h } = oklchColor;
    const lightness = (l * 100).toFixed(2);
    const chroma = c.toFixed(4);
    const hue = h ? h.toFixed(1) : '0';
    
    return `oklch(${lightness}% ${chroma} ${hue})`;
  } catch (error) {
    return null;
  }
}

export function deactivate() {} 