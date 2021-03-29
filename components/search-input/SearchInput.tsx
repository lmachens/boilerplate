import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

interface SearchInputProps {
  onSearch(search: string): void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce<string>(search, 300);

  useEffect(() => {
    if (!debounceSearch) {
      return;
    }
    onSearch(debounceSearch);
  }, [debounceSearch]);

  return (
    <label>
      Search
      <input
        type="text"
        placeholder="First or last name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </label>
  );
}

export default SearchInput;
