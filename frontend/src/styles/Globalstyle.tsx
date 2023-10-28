import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'SUIT';
  }

  /* body {
      width: 100vw;
      height: 100vh;
      font-family: 'Happiness-Sans', 'Inter', sans-serif;
      overflow: hidden;
  } */

  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-Heavy.otf') format('truetype');
    font-weight: 900;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-ExtraBold.otf') format('truetype');
    font-weight: 800;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-Bold.otf') format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-SemiBold.otf') format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-Medium.otf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-Regular.otf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-Light.otf') format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-ExtraLight.otf') format('truetype');
    font-weight: 200;
  }
  @font-face {
    font-family: 'SUIT';
    src: local("SUIT"), url('/src/assets/font/SUIT-Thin.otf') format('truetype');
    font-weight: 100;
  }

`;

export default GlobalStyle;


