
import { useParams } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Details = () => {
  
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const {user} = useContext(AuthContext)
 

  useEffect(() => {
    fetch(`http://localhost:5000/mobiles/${id}`)
      .then((result) => result.json())
      .then((data) => setDetails(data));
  }, [id]);

  const handleCart = () => {
    
    const image = details.image
    const name = details.name
    const price = details.price
    const email = user?.email
    const cartData = {image,name,price,email}
    
    axios.post("http://localhost:5000/carts",cartData)
    .then(res=>{
      if(res.data.insertedId){
        
        toast.success("Add to cart successfully....")
        
      }
    })
  };

  console.log("id ",id)
console.log(details)
  return (
    <div className="flex items-center justify-center my-6">
      <div className="max-w-lg p-4 shadow-md bg-base-100 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              className="h-[70vh] w-full object-cover rounded-lg"
              src={details.image}
            />
          </div>
       
          <div className="space-y-2">
            <div rel="noopener noreferrer"  className="block">
              <div className="flex justify-evenly items-center">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.name}
              </h3>
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.type}
              </h3>
              </div>

              <div className="flex justify-evenly items-center">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.memory}
              </h3>
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.processor}
              </h3>
              </div>
             

              <div className="flex justify-evenly items-center">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.os}
              </h3>
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.price}
              </h3>
              </div>
            </div>
            <p className=" dark:text-gray-400">{details.shortDescription}</p>
            <button onClick={handleCart} className="btn btn-neutral w-full">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Toaster />
      
    </div>
  );
};

export default Details;

 