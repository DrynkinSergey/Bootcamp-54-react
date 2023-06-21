import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root{
    --main-color: red;
    --second-color: blue;
  }
  $main:blue;

  body{
    margin:0;
    padding:0;
  }
  p{
    padding-left:20px;
  }
  .wrapper{
    color:var(--main-color)

  }
`
