import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {  signInUser } = useContext(AuthContext)
    const handleForm = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        signInUser(email, password)
        .then((result) => {
          toast.success("User logged in Successfully.");
          navigate(location?.state ? location.state : "/");
          console.log(result.user);
        })
        .catch((error) => {
          toast.error(`${error.message}`);
          console.log(error.message);
        });

    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center">
        <h1 className="text-3xl font-semibold">Sign in to your account</h1>
        
        <form className="space-y-4 " onSubmit={handleForm}>
          <div className="flex flex-col">
            <label className="sr-only">Email address</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email address"
              className="rounded-t-md dark:border-gray-600 p-2 mb-4 bg-gray-300 "
            />
            <label className="sr-only">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              className="-mt-1 rounded-b-md dark:border-gray-600 p-2 bg-gray-300"
            />
          </div>
         
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
