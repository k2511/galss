// import React, { useState } from "react";
// import { useNavigate, Link, NavLink } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
// import axios from "axios";

// const Signup = () => {
//   const [val, setVal] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//     otp: "",
//   });
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if(val.password.length < 6){
//       toast.error("Password must be at least 6 characters long.");
//       return 
//     }
//     try {
//       const res = await axios.post("http://localhost:4000/signup", val);
//       const data = await res.data;
//       //   console.log("data, ", data);
//       if (data.message == "Signup successfully") {
//         toast.success("Signup successfully ! 🎉");
//         setTimeout(() => {
//           navigate("/login");
//         }, 1000);
//       } else {
//         toast.error(data.message, "! ❌");
//       }
//     } catch (err) {
//       const message = err.response?.data?.message || "Something went wrong";
//       toast.error(message, "! ❌");
//     }
//   };

//   const sendOtp = async (e) => {

//     e.preventDefault();
//     if (!email.includes("@")) {
//       toast.error("Please enter valid otp");
//       return;
//     }
//     try {
//       const res = await axios.post("http://localhost:4000/send-otp", { email });
//       const data = await res.data;
//       if (data.message == "OTP Sent successfully") {
//         setStep(2);
//         toast.success("OTP has been sent to your email.");
//       } else {
//         toast.error(data.message, "! internet issue ❌");
//       }
//     } catch (err) {
//       const message = err.response?.data?.message || "Something went wrong";
//       toast.error(message, "! ❌");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-sky-100">
//       {step == 2 && (
//         <>
//           <div className="w-full lg:w-1/2 flex items-center justify-center  mx-auto">
//             <div className="max-w-md w-full space-y-6">
//               <h2 className="text-3xl font-bold text-center text-blue-700">
//                 Create Your Account
//               </h2>
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full p-2 border rounded"
//                   value={val.fullName}
//                   onChange={(e) => setVal({ ...val, fullName: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full p-2 border rounded"
//                   value={val.email}
//                   onChange={(e) => setVal({ ...val, email: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full p-2 border rounded"
//                   value={val.password}
//                   onChange={(e) => setVal({ ...val, password: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Enter your otp"
//                   className="w-full p-2 border rounded"
//                   value={val.otp}
//                   onChange={(e) => setVal({ ...val, otp: e.target.value })}
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//                 >
//                   Signup
//                 </button>
//               </form>
//               <p className="text-center text-sm">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-blue-600">
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//       {step == 1 && (
//         <>
//           <div className="flex flex-col mx-auto items-center justify-center min-h-screen px-4 py-10  dark:bg-neutral-10">
//             <div className="w-full max-w-md border border-neutral-9 rounded-3xl bg-white p-6 shadow-md">
//               <div className="flex flex-col gap-6">
            
//                 <div className="flex flex-col">
//                   <label htmlFor="email" className="text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>


//                 <button
//                   onClick={sendOtp} 
//                   className="w-full px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium transition" >
//                   Send OTP
//                 </button>
          
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//     // </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const Signup = () => {
  const [val, setVal] = useState({
    email: "",
    password: "",
    fullName: "",
    otp: "",
  });
  const navigate = useNavigate();
  const [step, setStep] = useState(2);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(val.password.length < 6){
      toast.error("Password must be at least 6 characters long.");
      return 
    }
    try {
      const res = await axios.post("http://localhost:4000/signup", val);
      const data = await res.data;
      //   console.log("data, ", data);
      if (data.message == "Signup successfully") {
        toast.success("Signup successfully ! 🎉");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(data.message, "! ❌");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong";
      toast.error(message, "! ❌");
    }
  };

  const sendOtp = async (e) => {

    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter valid otp");
      return;
    }
    try {
      const res = await axios.post("http://localhost:4000/send-otp", { email });
      const data = await res.data;
      if (data.message == "OTP Sent successfully") {
        setStep(2);
        toast.success("OTP has been sent to your email.");
      } else {
        toast.error(data.message, "! internet issue ❌");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong";
      toast.error(message, "! ❌");
    }
  };

  return (
    <div className="flex min-h-screen bg-sky-100">
      {step == 2 && (
        <>
          <div className="w-full lg:w-1/2 flex items-center justify-center  mx-auto">
            <div className="max-w-md w-full space-y-6">
              <h2 className="text-3xl font-bold text-center text-blue-700">
                Create Your Account
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                  value={val.fullName}
                  onChange={(e) => setVal({ ...val, fullName: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={val.email}
                  onChange={(e) => setVal({ ...val, email: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                  value={val.password}
                  onChange={(e) => setVal({ ...val, password: e.target.value })}
                  required
                />
                <input
                  type="number"
                  placeholder="Enter your otp"
                  className="w-full p-2 border rounded"
                  value={val.otp}
                  onChange={(e) => setVal({ ...val, otp: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  Signup
                </button>
              </form>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
      {step == 1 && (
        <>
          <div className="flex flex-col mx-auto items-center justify-center min-h-screen px-4 py-10  dark:bg-neutral-10">
            <div className="w-full max-w-md border border-neutral-9 rounded-3xl bg-white p-6 shadow-md">
              <div className="flex flex-col gap-6">
            
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>


                <button
                  onClick={sendOtp} 
                  className="w-full px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium transition" >
                  Send OTP
                </button>
          
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    // </div>
  );
};

export default Signup;
