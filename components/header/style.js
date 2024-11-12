import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.4); /* Preto com 50% de transparência */
  color: #fff;
  width: auto;
  height: 8vh;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* Define a largura como 100% da viewport */
  z-index: 1000; /* Certifique-se de que o header está acima do MainContainer */

  .logo {
    gap: 10px;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    * {
      color: white;
    }

    *:hover {
      color: #EA2027;
    }

    @media (max-width: 742px) {
    height: auto;
    flex-direction: column;
    }
  }

  .icons {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 742px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`;
