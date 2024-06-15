import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgb(234, 238, 246);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: absolute;
  /* left: 536px;
  top: 277px; */
  display: flex;
  padding: 50px 60px;
  box-sizing: border-box;
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.p`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.97px;
`;
export const FormInput = styled.input`
  width: 248px;
  height: 30px;
  align-items: center;
  margin: 7px 0px;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
`;

export const FormButton = styled.button`
  width: 248px;
  height: 30px;
  margin: 20px 0px;
  border-radius: 4px;
  border: none;
  background: rgb(86, 94, 239);
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }
`;

export const FormFooter = styled.div`
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 150%;
`;

export const FooterText = styled.p`
  margin: 0;
`;
