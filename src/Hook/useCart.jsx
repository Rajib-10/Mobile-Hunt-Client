import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/carts");
      const filteredData = res.data.filter(item => item.email === user?.email);
      return filteredData;
    },
  });

  return [cart, refetch];
};

export default useCart;
