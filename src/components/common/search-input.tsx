import React from "react";

import { SearchInputProps } from "@/interfaces/common-component-interfaces";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Search } from "lucide-react";

const SearchInput = ({
  filteredInput,
  setFilteredInput,
  placeholderText,
  onSearch,
}: SearchInputProps) => {
  return (
    <div className="flex items-center gap-1">
      <Input
        placeholder={`Search ${placeholderText} ID`}
        className="h-[40px] rounded-[6px] lg:w-[300px] w-full focus:outline-2 border-border focus-visible:ring-primary bg-transparent text-[14px] placeholder:text-[14px] focus-visible:!ring-offset-0 duration-200 transition-all !shadow-button-shadow"
        value={filteredInput}
        onChange={(e) => setFilteredInput(e.target.value)}
      />

      <Button
        onClick={() => onSearch(filteredInput)}
        className="h-[40px] border !rounded-[6px] hover:bg-accent hover:text-accent-foreground text-heading text-sm !shadow-button-shadow border-border tracking-wider bg-white"
      >
        Search
        <Search />
      </Button>
    </div>
  );
};

export default SearchInput;
