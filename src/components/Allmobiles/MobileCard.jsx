/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";




const MobileCard = ({ mobile }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] object-cover" src={mobile.image} alt={mobile.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mobile.name}</h2>
          <div className="flex justify-between items-center">
            <p>{mobile.type}</p>
            <p>${mobile.price}</p>
            
          </div>
          <div className="flex justify-between items-center">
            <p>{mobile.processor}</p>
            <p>${mobile.os}</p>
            <p>{mobile.memory}</p>
          </div>
          <div className="card-actions justify-center">
         <Link to={`/details/${mobile._id}`}> <button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
