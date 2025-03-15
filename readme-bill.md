# SETTING UP REACTJS

References:
- https://react.dev/learn/build-a-react-app-from-scratch
- 

## A build tool
npm create vite@latest my-app -- --template react

## Running locally
`$ nvm use lts/iron`
`$ npm run dev`
localhost:5173

# Troubleshooting
*Images* not showing
- https://stackoverflow.com/questions/68758939/github-pages-vite-js-build-not-showing-the-images
Seems that trailing slashes and dots do not work, e.g. `/assets/some-image.jpg` -> `assets/some-image.jpg`
