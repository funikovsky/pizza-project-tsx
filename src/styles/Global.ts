import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: 'Nunito', Roboto, system-ui, Tahoma, sans-serif;
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #232323;
  background-color: #ffdf8c;
}

a,
span,
p,
b,
h1,
h2,
h3,
h4,
h5 {
  color: #232323;
}

h1 {
  font-size: 48px;
}

h2 {
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
}

a {
  text-decoration: none;
}

@mixin noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}`