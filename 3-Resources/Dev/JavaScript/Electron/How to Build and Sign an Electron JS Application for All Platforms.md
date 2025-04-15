---
tags:
  - electron
---
## How to Build and Sign an Electron JS Application for All Platforms

Electron JS is a powerful framework that allows developers to create cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. In this article, we will go through the process of building and signing Electron applications for all major operating systems: Windows, macOS, and Linux.

### Installing Necessary Tools

Before getting started, make sure you have the following tools installed:

1. **Node.js**: Install the latest version of Node.js from the [official website](https://nodejs.org/).
2. **Electron Forge**: This tool simplifies the creation, building, and publishing of Electron-based applications. Install it globally with the following command:

   ```bash
   npm install -g electron-forge
   ```

### Creating a New Project

To create a new project using Electron Forge, run the following command:

```bash
electron-forge init my-electron-app
```

This command will create a new folder called `my-electron-app` with a basic application structure. Navigate to the created directory:

```bash
cd my-electron-app
```

Run the application to check that everything is working:

```bash
npm start
```

### Building the Application

To build the application for all platforms, you can use either `electron-packager` or `electron-builder`. We will cover both options.

#### Building with Electron Packager

1. Install `electron-packager`:

   ```bash
   npm install --save-dev electron-packager
   ```

2. Add a build script to your `package.json` file:

   ```json
   "scripts": {
     "build": "electron-packager . myApp --all --out=dist"
   }
   ```

3. Run the build command:

   ```bash
   npm run build
   ```

After running this command, directories for each platform will be created in the `dist` folder.

#### Building with Electron Builder

1. Install `electron-builder`:

   ```bash
   npm install --save-dev electron-builder
   ```

2. Add configuration to your `package.json` file:

   ```json
   "build": {
     "appId": "com.example.myapp",
     "mac": {
       "target": "dmg"
     },
     "win": {
       "target": "nsis"
     },
     "linux": {
       "target": "AppImage"
     }
   }
   ```

3. Run the build command:

   ```bash
   npm run build
   ```

### Signing the Application

Signing your application is necessary to ensure security and user trust. The signing process varies for each platform.

#### Windows

To sign Windows applications, use the `signtool`. You will need a certificate for signing.

```bash
signtool sign /f path_to_certificate.pfx /p your_password path_to_your_application.exe
```

#### macOS

To sign applications on macOS, use the `codesign` command. You will need a valid developer certificate.

```bash
codesign --deep --force --verify --verbose --sign "Developer ID Application: Your Name (Team ID)" path_to_your_application.app
```

#### Linux

On Linux, signing applications is usually not required, but you can use GPG to create a signature for your package.

```bash
gpg --detach-sign path_to_your_package.deb
```

### Conclusion

Building and signing Electron JS applications for all platforms is a process that can be simplified using tools like Electron Forge and Electron Builder. By following the steps outlined above, you can quickly develop and distribute your applications on Windows, macOS, and Linux using familiar web technologies.