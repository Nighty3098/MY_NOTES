---
tags:
  - electron
---
## Custom App Icons

The purpose of this guide is to walk through the process of generating and setting an app icon, as well as setting installer and setup icons.

### Generating an Icon

Generating your icon can be done using various conversion tools found online. It is recommended to start with a **1024x1024px** image before converting it to various sizes.

### Supporting Higher Pixel Densities

On platforms that have high-DPI support (such as Apple Retina displays), you can append `@2x` after the image's base filename to mark it as a high-resolution image. For example, if `icon.png` is a normal image with standard resolution, then `icon@2x.png` will be treated as a high-resolution image that has double the DPI intensity.

If you want to support different displays with different DPI densities at the same time, you can put images with different sizes in the same folder and use the filename without DPI suffixes. For example:

```
images/
├── icon.png
├── icon@2x.png
└── icon@3x.png
```

The following suffixes for DPI are also supported: `@1x`, `@1.25x`, `@1.33x`, `@1.4x`, `@1.5x`, `@1.8x`, `@2x`, `@2.5x`, `@3x`, `@4x`, and `@5x`.

### Supported Formats

The recommended file formats and icon sizes for each platform are as follows:

| Operating System | Format | Size                          |
|------------------|--------|-------------------------------|
| macOS            | .icns  | 512x512 pixels (1024x1024 for Retina displays) |
| Windows          | .ico   | 256x256 pixels                |
| Linux            | .png   | 512x512 pixels                |

### Setting the App Icon

#### Windows and macOS

Configuring the path to your icon can be done in your Forge configuration.

```javascript
// forge.config.js
module.exports = {
  // ...
  packagerConfig: {
    icon: '/path/to/icon' // no file extension required
  }
  // ...
};
```

Forge will automatically add the correct extension for each platform, so appending `.ico` or `.icns` to the path is not required.

After the config has been updated, build your project to generate your executable with the Make command.

#### Linux

Configuring the path to your icon must be done in both `package.json` as well as in Electron's main process.

```javascript
// forge.config.js
module.exports = {
  // ...
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: '/path/to/icon.png'
        }
      }
    }
  ]
  // ...
}
```

The icon must be additionally loaded when instantiating your BrowserWindow.

```javascript
// main.js (Main Process)
const { BrowserWindow } = require('electron');

const win = new BrowserWindow({
  // ...
  icon: '/path/to/icon.png'
});
```

Once the path to the icon has been configured, build your project to generate your executable with `npm run make`.

### Configuring Installer Icons

Installers usually have icons! Don't forget to configure those in the Maker-specific config within the Makers section of your Forge configuration.

Here is an example of how that can be done:

```javascript
// forge.config.js
module.exports = {
  // ...
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: 'https://url/to/icon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: '/path/to/icon.ico'
      }
    },
    {
      // Path to a single image that will act as icon for the application
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: '/path/to/icon.png'
        }
      }
    },
    {
      // Path to the icon to use for the app in the DMG window
      name: '@electron-forge/maker-dmg',
      config: {
        icon: '/path/to/icon.icns'
      }
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: '/path/to/icon.ico'
      }
    }
  ]
  // ...
};
```

Once again, once you are done configuring your icons, don't forget to build your project with the Make command.

### Troubleshooting

Operating systems have an icon cache. Resetting the cache is recommended if the icon is not updated or still uses the default one.

#### Refreshing the Icon Cache (Windows)

Windows caches all application icons in a hidden Icon Cache Database. If your Electron app's icon is not showing up, you may need to rebuild this cache. To invalidate the cache, use the system `ie4uinit.exe` utility:

```bash
ie4uinit.exe -show
```

Citations:
[1] https://www.mylifeorganized.net/support/notes-formatting-with-Markdown-ru/
[2] https://gpt-c.ru/icon-craft-ai/
[3] https://github.com/dwmkerr/app-icon/blob/master/README.md
[4] https://help.vivaldi.com/ru/services-ru/forum-ru/markdown-formatting/
[5] https://iconion.com/ru/
[6] https://www.youtube.com/watch?v=9Jf85jv0jtg
[7] https://seatable.io/ru/docs/text-und-zahlen/formatierungen-mithilfe-von-markdown-rich-text/
[8] https://icon-generator-online.com/ru
[9] https://skillbox.ru/media/code/yazyk-razmetki-markdown-shpargalka-po-sintaksisu-s-primerami/
[10] https://aso.dev/ru/tools/icons/