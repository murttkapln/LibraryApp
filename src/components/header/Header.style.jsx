// Header Style
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HeaderContainer = styled(Flex)`
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin-top: 1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.detailColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.6rem;
  }
`;
export const HeaderForm = styled.form`
  display: flex;
  width: 45%;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  border: 1px solid rgba(15, 63, 43, 0.3);
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.headerFormColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 90%;
    padding: 1rem;
  }
`;

export const SearchInput = styled.input`
  height: 3rem;
  width: 55%;
  border: none;
  margin-top: 2rem;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  font-size: 2rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.5);
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-radius: 5px;
  }
`;
export const SelectBox = styled.select`
  height: 3rem;
  width: 40%;
  margin-top: 2rem;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 2rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.8);
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-radius: 5px;
  }
`;
export const HeaderButton = styled.button`
  background-color: #e1f1dd;
  padding: 5px;
  outline: none;
  border: none;
  height: 3rem;
  margin: 1rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.navbarBgColor};
  }
`;
