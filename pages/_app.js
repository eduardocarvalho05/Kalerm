// pages/_app.js
import { GlobalStyle } from '@/styles/Global.styled';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Aplica os estilos globais definidos no styled-components */}
      <GlobalStyle />
      
      {/* Renderiza o componente atual */}
      <Component {...pageProps} />
    </>
  );
}
