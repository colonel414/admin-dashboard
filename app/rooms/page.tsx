// pages/name.tsx

import React from "react";
import Link from "next/link";

const NamePage: React.FC = () => {
  // Define an array of names
  const names = ["John's Room", "Jane's Room", "Michael's Room", "Emily's Room", "Living Room", "Kitchen"];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Users</h1>
      {/* <div className="grid grid-cols-3 md:grid-cols-4 gap-6 bg-black shadow-md square-md p-6"> */}
        {/* Render each name with a link to a description page */}
        {names.map((name, index) => (
          <div key={index} className="text-xl text-left">
            <Link legacyBehavior href={`/name/${encodeURIComponent(name)}`} passHref>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 bg-white shadow-md square-md p-6">
                <a className="hover:underline">{name}</a>
              </div>
            </Link>
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};

export default NamePage;
