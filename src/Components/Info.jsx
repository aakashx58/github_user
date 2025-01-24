import React from "react";
import { BsGeoAltFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";

const Info = ({ data }) => {
  return (
    <div>
      {data && (
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between md:space-x-24">
            <div className="w-1/2">
              <div className="flex gap-2">
                <div className="mt-1 text-xl text-gray-100">
                  <BsGeoAltFill />
                </div>
                <div>
                  <p className="text-gray-100 text-lg">
                    {data.location || "Location Not Found"}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex gap-2">
                <div className="mt-1 text-xl text-gray-100">
                  <BsTwitterX />
                </div>
                <div>
                  <a
                    href={`https://twitter.com/${data.twitter_username}`}
                    target="_blank"
                    className="text-gray-100 text-lg"
                  >
                    {data.twitter_username || "Twitter Not Found"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-24 justify-between mt-2">
            <div className="w-1/2">
              <div className="flex gap-2">
                <div className="mt-1 text-xl text-gray-100">
                  <BsLink45Deg />
                </div>
                <div>
                  <a className="text-gray-100 text-md">
                    {data.blog || "Webiste Not Found"}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex gap-2">
                <div className="mt-1 text-xl text-gray-100">
                  <BsBuildings />
                </div>
                <div>
                  <p className="text-gray-100 text-lg">
                    {data.company || "Company Not Found"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
