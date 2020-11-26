import { css } from 'astroturf'

let styles = css`
  .button {
    background: blue;
  }
`

document.body.innerHTML = JSON.stringify(styles)
