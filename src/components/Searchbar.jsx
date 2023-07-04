import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  }

  return (
    <form className="flex flex-1 justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="min-w-[30%] rounded-xl border border-gray-400 bg-slate-100 px-2 py-[2px] outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="relative -left-3 flex min-w-[30px] items-center justify-center rounded-br-xl rounded-tr-xl bg-gray-400 text-xl">
        <BiSearch />
      </button>
    </form>
  );
}
