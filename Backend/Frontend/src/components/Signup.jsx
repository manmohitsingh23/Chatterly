import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [authUser, setAuthUser] = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) =>
    value === password || "Passwords do not match";

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const response = await axios.post("/api/user/signup", userInfo);
      if (response.data) {
        toast.success("Signup successful");
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-300 shadow-xl bg-white px-10 py-8 rounded-lg space-y-5 w-96"
      >
        <h1 className="text-3xl text-center text-blue-600 font-bold">Messenger</h1>
        <h2 className="text-lg text-center text-gray-700">
          Create a new <span className="text-blue-600 font-semibold">Account</span>
        </h2>

        {/* Fullname Field */}
        <div>
          <input
            type="text"
            className="text-black w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            placeholder="Full Name"
            {...register("fullname", { required: "Fullname is required" })}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            className="text-black w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            className="text-black w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <input
            type="password"
            className="text-black w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: validatePasswordMatch,
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className={`text-black w-full py-3 rounded-md text-lg font-semibold transition duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
