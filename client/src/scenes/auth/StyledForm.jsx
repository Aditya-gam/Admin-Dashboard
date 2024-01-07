import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 350px;
  width: 100%;
  margin: 2rem auto;

  position: absolute;
  top: 10%;
  bottom: 33%;
  left: 0;
  right: 0;

  div {
    align-items: center;
    /* display: flex; */
    justify-content: center;
  }

  h2 {
    margin-bottom: 1rem;
  }

  button,
  input {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;

    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }

  button {
    cursor: pointer;
    :focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;

    a {
      color: rgb(220, 220, 220);
      font-size: 14px;
      text-align: center;
      width: 100%;
    }
  }

  /* label {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;
  } */

  select {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;
