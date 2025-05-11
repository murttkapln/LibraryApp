import { useBooksContext } from "../../context/BooksContext";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { searchInfo, setSearchInfo, getData } = useBooksContext();
  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log({ [e.target.name]: e.target.value });
    setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value }); // inputun name attr ile statede ki key isimleri aynı olmak zorunda.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <HeaderTitle>Books Or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          placeholder="search..."
          name="query"
          value={searchInfo.query}
          onChange={handleChange}
          required
        />
        <SelectBox
          name="selectType"
          value={searchInfo.selectType}
          onChange={handleChange}
          // onChange={()=> setSearchInfo({...searchInfo, query:e.target.value})}
        >
          {printType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
