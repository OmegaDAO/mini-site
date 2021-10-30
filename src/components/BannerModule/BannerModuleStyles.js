import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image {
    display: flex;
    justify-content: center;
    z-index: 1;
    width: 100%;
    max-width: 90vh;
    margin: auto;
 
    @media (max-width: 1008px) {
      margin-top: 80px;
      padding-top: 80px;
    }
    @media (max-width: 768px) {
      margin-top: 150px;
    }
  }

  .banner__content {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .banner__content {
    position: absolute;
    top: 50%;
    z-index: 2;
    min-height: 33vh;
    width: 100%;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    .price {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: var(--bannerTitle);
      letter-spacing: -1px;
      margin-bottom: 30px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: var(--bannerSubTitle);
      letter-spacing: -0.5px;
    }

    button {
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 22px;
      display: flex;
      margin-top: 30px;
    }
  }
`
