import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ placeholder, value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-sm shadow-md rounded-md flex items-center">
      <Search className="absolute left-7 h-5 w-5" />
      <Input
        type="search"
        placeholder={placeholder ?? "Search..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-15 text-sm h-13 border-none outline-none"
      />
    </div>
  );
};

export default SearchBar;
