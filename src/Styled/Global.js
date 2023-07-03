import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root{
    --main-color: red;
    --second-color: blue;
  }

  body{
    margin:0;
    padding:0;
  }
  ul{
    margin: 0;
    padding:0;
  }

  .wrapper{
    color:var(--main-color)

  }
`
