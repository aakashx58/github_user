import React from "react";

const SearchUser = ({ username, onSetUsername, onHandleSearch }) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="w-full py-4 pl-12 pr-4 text-gray-100 focus:bg-divBg rounded-md outline-none bg-divBg"
          placeholder="Search username..."
          required
          value={username}
          onChange={onSetUsername}
        />
        <button
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-900 font-medium rounded-lg text-sm px-8 py-2"
          onClick={onHandleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchUser;
