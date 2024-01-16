# The Purpose of this Exercise: Modularizing a Node.js Project with TypeScript

## How to Use TypeScript with Node.js

1. `npm init -y`

2. `npm install typescript --save-dev`

3. `npm install @types/node --save-dev`

4. Create a `tsconfig.json` file:
```plaintext
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true


5.

    rootDir: This is where TypeScript looks for your code. We've set it to the src/ folder where you'll write your TypeScript code.
    outDir: This is where TypeScript puts the compiled code. We want it to go to a build/ folder.

    Create the src directory and an index.ts file inside it:

mkdir src
touch src/index.ts

6.mkdir src
touch src/index.ts

npx tsc



7.
    The compiled code will be placed in the build/ directory.

    Install the required packages for hot-reloading during development:
    
    npm install --save-dev ts-node nodemon

    
    8.npm install --save-dev ts-node nodemon

{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}



 Also, add the following script to your package.json:

"start:dev": "npx nodemon"
```

9. Creating Production Builds:
```plaintext
npm install --save-dev rimraf
```
- Then, add the following script to your `package.json`:
````plaintext
"build": "rimraf ./build && tsc"
```

10. Production Startup Script:
- To start the application in production, run the build command first, and then execute the compiled JavaScript at `build/index.js`.
- The startup script should look like this in your `package.json`:
````plaintext
"start": "npm run build && node build/index.js"
```
```

