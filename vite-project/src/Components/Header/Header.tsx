import { SearchBar } from "./SearchBar";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="flex flex-col gap-6">
      <Navbar />
      <SearchBar />
    </header>
  );
};
