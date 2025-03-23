# SETTING UP REACTJS

References:
- https://react.dev/learn/build-a-react-app-from-scratch
- 

## Root dir
Same as where index.html is located. Not src/, public/, and so forth.

## A build tool
npm create vite@latest my-app -- --template react

## Running locally
`$ nvm use lts/iron`
`$ npm run dev`
localhost:5173

## Variables
.env -> apparently, ViteJS automatically recognizes these.
EXAMPLE:
w/in .env:
`     VITE_API_URL=https://api.example.com`
`     VITE_API_KEY=your_api_key`
usage:
`     console.log(import.meta.env.VITE_API_URL); // Accessing the API URL`
code:
`     <p>API URL: {{ import.meta.env.VITE_API_URL }}</p>`

# Troubleshooting
*Images* not showing
- https://stackoverflow.com/questions/68758939/github-pages-vite-js-build-not-showing-the-images

Seems that trailing slashes and dots do not work, e.g. `/assets/some-image.jpg` -> `assets/some-image.jpg`

*module* not loading
- https://stackoverflow.com/questions/61899112/github-pages-and-react-app-not-working-regardless-of-methods
Seems that *gh-pages* needs to be downloaded then added to `package.json`
`$ npm install gh-pages --save -dev`

Within package.json:
`"homepage": "<GITHUB_USERNAM>.github.io/<REPO_NAME>",`

In the *scripts* section:
`"predeploy": "npm run build",`
`"deploy": "gh-pages -d build",`

~
