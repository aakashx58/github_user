import React from "react";
import Repos from "./Repos";
import Info from "./Info";

const User = ({ data, username }) => {
  return (
    <div>
      <div>
        <div className="bg-divBg rounded-xl">
          {data && (
            <ul className="mt-12 p-4">
              <li key={data.id} className="">
                <div className="flex flex-col md:flex-row md:space-x-6 sm:space-x-0">
                  <img
                    src={data.avatar_url}
                    className="flex-none w-36 h-36 rounded-full border border-gray-100"
                  />
                  <div>
                    <h1 className="block text-gray-100 text-lg font-semibold mt-8">
                      {data.name}
                    </h1>
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      className="block text-skyBlue text-sm"
                    >
                      @{data.login}
                    </a>

                    <span className="block text-gray-300 text-md mt-4 font-semibold">
                      {data.bio}
                    </span>
                  </div>
                </div>
                <Repos data={data} />
                <Info data={data} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
