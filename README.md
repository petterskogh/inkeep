# Inkeep

Inkeep is a journaling app that allows users to create templates that they can fill in each day. Inkeep has easy navigation using the keyboard and heavy customization from colors to shortcuts.

## Language

Inkeep is built using Electron and Svelte.

## Get started

```bash
git clone https://github.com/petterskogh/inkeep.git Inkeep
cd InKeep
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Install the dependencies...

```bash
npm i
```

...then start coding in dev mode:

```bash
npm run start
```

The start script spins up [Rollup](https://github.com/rollup/rollup)
in watch mode with a [Rollup-Plugin-Serve](https://github.com/thgh/rollup-plugin-serve) instance
serving the frontend static files on [localhost:5000](http://localhost:5000) and a
nodemon server to watch for file changes related to the main electron process.

Electron loads its html content from [localhost:5000](https://github.com/petterskogh/inkeep/src/electron/index.ts#L40)
in dev mode and from [build/public/index.html](https://github.com/petterskogh/inkeep/src/electron/index.ts#L38)
in production mode.

The Svelte development happens in [src/frontend](https://github.com/petterskogh/inkeep/src/frontend) and the Electron development in [src/electron](https://github.com/petterskogh/inkeep/src/electron).

Edit a file in `src`, save it, and see the changes in the app.

## Building and running in production mode

To create an optimized build of the app:

```bash
npm run build
```

To create a distributable version of the app with [electron-builder](https://github.com/electron-userland/electron-builder):

```bash
npm run dist
```

In production mode, sourcemaps are [disabled](https://github.com/petterskogh/inkeep/scripts/preBuild.js#L30),
[html](https://github.com/petterskogh/inkeep/scripts/postBuild.js#L77)
[css](https://github.com/petterskogh/inkeep/scripts/postBuild.js#L104) and
[js](https://github.com/petterskogh/inkeep/rollup.config.js#L83) files are compressed and mangled, devTools are [disabled](https://github.com/petterskogh/inkeep/src/electron/index.ts#L28) and
[CSP](https://github.com/petterskogh/inkeep/scripts/postBuild.js#L82) allows only same origin scripts to load.

## Contributing

In order to lint the code you run:

```bash
npm run lint
```

In order to prettify the code you run:

```bash
npm run format
```

You should run the following command, which runs lint and then format, on your contributed code:

```bash
npm run preversion
```

before creating a pull request.

All suggestions are welcome!