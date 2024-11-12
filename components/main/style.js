import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  height: calc(90vh - 60px); /* Ajuste o valor conforme a altura do seu header */
  position: relative; /* Necessário para o Image com layout="fill" */
  overflow: hidden; /* Garante que a imagem não ultrapasse os limites do container */

  justify-content: start;
  align-items: center;
  text-align: center;

  .overlay-text {
    width: 20%;
    margin-left: 320px;
    position: absolute;
    color: #fff; 
    font-size: 2rem; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
    z-index: 1; 

    span {
      color: red;
    }

    @media (max-width: 768px) {
      margin-left: 30px;
    }
  }
  
  button {
    padding: 12px 22px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 1px;
    margin-top: 30px;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    
    &:hover {
      background-color: #EA2027;
      border-color: #EA2027;
      color: white;
    }
  }


`;

export const QuemSomosSection = styled.section`
  padding: 40px 20px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  width: auto;

  h1 {
    font-size: 4.0rem;
    color: #333;
   
    span {
      color: #EA2027; /* Cor destacada */
    }
  }

  h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #555;
  }

  .sobre-kalerm {
    display: flex;
    align-items: flex-start; 
    justify-content: center;
    gap: 30px; 
    padding: 20px;
    margin-top: 40px;
    width: 100%;
    
    div {
      background-color: white;
      padding: 30px;
      flex: 1; 
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 300px; /* Limita a largura máxima de cada container */
      min-height: 700px; /* Define uma altura mínima */
      font-size: 1rem;
      line-height: 1.6;
    }

    .america-latina {
      background-color: black;
      display: flex; /* Adiciona Flexbox */
      align-items: center;
      justify-content: center;
      flex-direction: column; /* Alinha elementos verticalmente */
      gap: 10px; 
      min-width: 200px; /* Largura mínima */
      max-height: 600px;

      p {
        color: white;
      }
    }

    .brasil-mundo-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      background-image: url('/assets/IMG/folha.png');
      background-size: cover; /* A imagem cobre 100% da div */
      background-position: center; /* Centraliza a imagem */
      background-repeat: no-repeat; /* Evita repetição da imagem */
      min-width: 200px; /* Largura mínima */
      max-height: 600px;


      button {
        padding: 12px 22px;
        background-color: transparent;
        color: white;
        border: 2px solid white;
        cursor: pointer;
        border-radius: 15px;
        font-weight: 700;
        font-size: 0.875rem;
        letter-spacing: 1px;
        margin-top: 30px;
        transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    
      &:hover {
        background-color: #EA2027;
        border-color: #EA2027;
        color: white;
      }
    }
  }

    .china {
      display: flex; 
      align-items: center;
      justify-content: center;
      flex-direction: column; 
      gap: 10px; 
      padding: 20px; 
      min-width: 200px; /* Largura mínima */
      max-height: 600px;

      h1 {
        font-size: 1.2rem;
        color: #333;
      }

      p {
        margin: 0; 
        line-height: 1.5; 
      }
    }

    @media (max-width: 768px) {
    }
}

  .div-retangulo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20vw;
    position: absolute;
    color: white;

    .div-1 {
     margin-top: 36px;
    }

    button {
    padding: 12px 22px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 1px;
    margin-top: 30px;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    
    &:hover {
      background-color: #EA2027;
      border-color: #EA2027;
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0vw;

    .div-1 {
     margin-top: 0px;
    }

    h2 {
      font-size: 20px;
      margin-top: 6px;
    }

    h4 {
      font-size: 12px;
      margin-top: 6px;
    }

    button {
      margin-top: 8px;
    }
  }
}


  @media (max-width: 768px) {
    padding: 40px 10px;
    h1 {
      font-size: 2rem;
    }

    .sobre-kalerm {
      flex-direction: column; 
      align-items: center;

      .brasil-mundo-1 {
        min-width: 260px;
      }
    }
  }
`;

export const Maquinas = styled.section`
  padding: 40px 20px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  width: auto;

  h2 {
    font-size: 3.0rem;
    color: #333;
    margin-top: 40px;
    span {
      color: #EA2027; 
    }
  }

  h4 {
    color: #555;
  }

  .gostou-das-maquinas {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 40px;
    gap: 40px;
  }

  .contact-options {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 100px;

    p {
      color: black;
    }
  }

  @media (max-width: 768px) {
    .gostou-das-maquinas {
      flex-direction: column;
    }

    .contact-options {
      flex-direction: column;
      gap: 50px;
    }
  }
`
