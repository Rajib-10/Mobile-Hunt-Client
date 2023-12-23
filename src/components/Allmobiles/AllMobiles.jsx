import { useEffect, useState } from "react";
import MobileCard from "./MobileCard";

const AllMobiles = ()  => {
  const [mobiles, setMobiles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mobiles")
      .then((res) => res.json())
      .then((data) => {
        setMobiles(data);
        setFilteredMobiles(data); // Initialize filteredMobiles with all mobiles
      });
  }, []);

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();
    const filteredResults = mobiles.filter((mobile) =>
      Object.values(mobile)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm)
    );
    setFilteredMobiles(filteredResults);
  };

  return (
    <div className="my-6">
      <h1 className="text-3xl text-center font-semibold">
        All Mobile - {filteredMobiles.length}
      </h1>
      <div className="text-right py-6">
        <div className="join">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            className="input input-bordered join-item"
            placeholder="Search by name, type, processor, etc."
          />
          <button
            disabled={!searchValue}
            onClick={handleSearch}
            className="btn join-item rounded-r-full"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMobiles?.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default AllMobiles;
