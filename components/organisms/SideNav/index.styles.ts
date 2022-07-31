import styled from "@emotion/styled";

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
    color: #FFF;
  }
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;