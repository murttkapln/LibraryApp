import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Books Or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput type="search" placeholder="search..." />
        <SelectBox>
          <option>All</option>
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
