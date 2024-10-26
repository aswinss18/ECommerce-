import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Login() {
  return (
    <div className=" flex justify-center items-center py-10">
      <form
        action=""
        className="h-[691px] w-[576px] border-[1px] border-customBorderGray rounded-[20px] flex  flex-col items-center justify-center space-y-8 text-[32px] font-semibold"
      >
        <h1>Login</h1>
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-medium ">Welcome back to ECOMMERCE</h2>
          <p className="text-base font-normal ">
            The next gen business marketplace
          </p>
        </div>

        <Input name="Email" />
        <Input name="Password" show="show" />
        <Button>CREATE ACCOUNT</Button>
        <p className="text-base font-normal py-6 border-t-[1px] border-customBorderGray w-[456px] text-center">
          Don't have an Account?
          <b className="font-medium px-2  hover:underline">SIGN UP</b>
        </p>
      </form>
    </div>
  );
}
