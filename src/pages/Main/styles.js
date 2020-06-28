import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #dedede 20%, white 70%);

  > h1 {
    margin: 40px 0px;
  }

  @media (max-width: 768px) {
    .brnodisplay {
      width: 100%;
      display: block;
    }
    img.brnodisplay {
      width: 350px;
      display: 350px;
    }

    h2.brnodisplay {
      font-size: 16px;
    }

    select.brnodisplay {
      display: inline-block;
      width: 110px;
      white-space: normal;
      word-wrap: break-word;
    }
  }
`;

export const SearchField = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    border: 1px solid #dadada;
    background: rgb(235, 230, 235);
    padding: 10px 10px 10px 20px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    margin-right: 10px;
  }
`;
export const ProfilesField = styled.div`
  max-width: 1335px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  div.find {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: -1px;

    > h1 {
      color: #999;
    }
    > h2 {
      color: #999;
      margin-top: 20px;
    }

    img {
      margin-top: -50px;
      margin-left: 100px;
    }

    small {
      color: #999;
      font-size: 16px;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  flex-basis: 20%;
  padding: 10px;
  word-break: break-word;

  img {
    border-radius: 3px;
    width: 250px;
    height: 250px;
    margin-right: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: flex-start;
    margin-top: 15px;
    height: 240px;

    h1 {
      font-size: 21px;
    }

    h2 {
      font-size: 16px;
      color: blue;
      font-weight: bold;
    }

    p {
      font-size: 12px;
    }

    a {
      margin-top: auto;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      margin-right: 0px;
      width: 100%;
      height: 100%;
      max-width: 300px;
      max-height: 300px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-top: 10px;

      button {
        margin-top: 0px;
      }

      p {
        margin-top: 5px;
      }
    }

    p {
      width: 200px;
    }
  }
`;

export const Pagination = styled.div`
  margin: 10px 0px 80px 0px;

  button {
    border: 0;
    padding: 5px;
    height: 55px;
    width: 55px;
    background; #999;
    border-bottom: 2px solid pink;
    margin-left: 3px;
    border-radius: 20px;
    transition: background 0.2s;
    &:hover {
      background: rgb(50,50,50,0.3);
    }
  }
`;
