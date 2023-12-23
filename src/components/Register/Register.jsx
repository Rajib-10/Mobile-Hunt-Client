import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {createUser,userLogOut} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleForm = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          return toast.error("Invalid Email.")
      }
      if(password.length <6){
          return toast.error("password is less than 6 characters")
      }
      if(!/[A-Z]/.test(password)){
          return toast.error("password  don't have a capital letter")
      }
      if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
          return toast.error("password  don't have a special character")
      }
      
      createUser(email,password)
      .then(()=>{
        toast.success("User created Successfully.")
        userLogOut()
        navigate("/login")
          
      })
     .catch(error=>{
      toast.error(`${error.message}`) 
      console.log(error.message)
     })

    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center">
        <h1 className="text-3xl font-semibold">Register to your account</h1>
        
        <form className="space-y-4 " onSubmit={handleForm}>
          <div className="flex flex-col">
            <label className="sr-only">Email address</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              placeholder="Email address"
              className="rounded-t-md dark:border-gray-600 p-2 mb-4 bg-gray-300 "
            />
            <label className="sr-only">Password</label>
            <input
              required
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
            Register
          </button>
        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default Register;
