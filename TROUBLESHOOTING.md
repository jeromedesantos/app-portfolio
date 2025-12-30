# Troubleshooting Guide

We noticed you're having trouble with some `npm` commands. Here are the correct commands to get your project set up.

## Installing Dependencies

To install the project's dependencies, use one of the following commands in your terminal. If you have `bun` installed, it is the recommended package manager for this project.

**Using Bun (recommended):**
```bash
bun install
```

**Using npm:**
```bash
npm install
```

**Note:** `npm run install` is not a valid command. `install` is a core `npm` command, not a script to be run.

## Building the Project

Once the dependencies are installed, you can build the project with the following command:

**Using Bun:**
```bash
bun run build
```

**Using npm:**
```bash
npm run build
```

This will create an optimized build of your application in the `.next` folder.
