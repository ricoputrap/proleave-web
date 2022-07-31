import styled from "@emotion/styled";
import { Button } from "@mui/material";

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.nav<ContainerProps>`
  padding: 30px;
  padding-top: 0;
  padding-right: 45px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
`;

export const Logo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 100px;

  h2 {
    margin: 0;
    color: #FFFFFF;
  }
`;

export const Menus = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface BtnLogoutProps {
  bgColor: string;
  bgColorHover: string;
}

export const BtnLogout = styled(Button)<BtnLogoutProps>`
  padding: 12px;
  font-size: 16px;
  color: #FFF;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: none;
  text-transform: none;

  &:hover {
    background-color: ${props => props.bgColorHover};
  }
`;