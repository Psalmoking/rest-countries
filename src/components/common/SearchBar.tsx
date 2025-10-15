import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-sm shadow-md rounded-md flex items-center">
      <Search className="absolute left-8 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder ?? "Search..."}
        className="pl-18 text-sm border-none h-15"
      />
    </div>
  );
};

export default SearchBar;
