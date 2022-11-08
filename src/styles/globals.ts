import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  //1. Use a more-intuitive box-sizing model.
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  //2. Remove default margin
  * {
    margin: 0;
    padding: 0;
  }

  //3. Allow percentage-based heights in the application
  html{
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  //4. 5. Typographic tweaks!
  body {
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
  }

  //6. Improve media defaults
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  //7. Remove built-in form typography styles
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  //8. Avoid text overflows
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  //9. Create a root stacking context
  #root,
  #__next {
    isolation: isolate;
  }

  //Remove all animations and transitions for people that prefer not to see them
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  body {
    position: relative;
    font-family: sans-serif;
  }

  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: .5;
    }
  }
`
