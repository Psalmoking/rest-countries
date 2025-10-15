import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-sm shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md flex items-center">
      <Search className="absolute left-7 h-5 w-5" />
      <Input
        type="search"
        placeholder={placeholder ?? "Search..."}
        className="pl-15 text-sm h-13 border-none outline-none"
      />
    </div>
  );
};

export default SearchBar;
