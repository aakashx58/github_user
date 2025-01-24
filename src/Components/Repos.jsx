import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Repos = ({ data }) => {
  return (
    <div>
      {data && (
        <div className="flex flex-col md:flex-row md:space-x-24 bg-color rounded-xl p-8 mt-8 justify-center">
          <div className="flex-shrink-0 gap-10">
            <div className="flex gap-2">
              <div className="mt-1 text-xl text-gray-100">
                <BsFillPeopleFill />
              </div>
              <div>
                <div className="flex flex-col md:flex-row "></div>
                <p className="text-gray-100 text-lg">Followers</p>
                <span className="text-sm text-white md:p-4">
                  {data.followers}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="flex gap-2">
              <div className="mt-1 text-xl text-gray-100">
                <BsFillPeopleFill />
              </div>
              <div>
                <p className="text-gray-100 text-lg">Following</p>
                <span className="text-sm text-white md:p-8">
                  {data.following}
                </span>
              </div>
            </div>
          </div>

          <div className="items-center flex-shrink-0">
            <div className="flex gap-2">
              <div className="mt-1 text-xl text-gray-100">
                <BsFillJournalBookmarkFill />
              </div>
              <div>
                <p className="text-gray-100 text-lg">Repositories</p>
                <span className="text-sm text-white md:p-8">
                  {data.public_repos}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Repos;
