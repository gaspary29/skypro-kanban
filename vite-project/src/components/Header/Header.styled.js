import styled,{css} from "styled-components";
export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;
export const HeaderBlock = styled.div`

height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
  `;
  export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  `;
    export const hover02 = css`
    &:hover {
      color: #33399b;
    }
    &:hover::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
    `;
  export const HeaderUser = styled.div`
    height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  cursor: pointer;

  ${hover02}
  `;

  export const HeaderPopUserSet = styled.div`
  
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  `;
  export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }`;

export const ButtonUser = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
  ${hover03}
  `;
  export const PopUserSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
  `;
  export const PopUserSetMail = styled.p`
    color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
  `;