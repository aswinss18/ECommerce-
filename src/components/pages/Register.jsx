import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
export default function Register() {
  return (
    <div className=" flex justify-center items-center py-10">
      <form
        action=""
        className="h-[691px] w-[576px] border-[1px] border-customBorderGray rounded-[20px] flex  flex-col items-center justify-center space-y-8 text-[32px] font-semibold"
      >
        <h1>Create your account</h1>
        <Input name="Name" />
        <Input name="Email" />
        <Input name="Password" />
        <Button>CREATE ACCOUNT</Button>
        <p className="text-base font-normal pt-3">
          Have an Account?
          <b className="font-medium px-2 hover:underline">LOGIN</b>
        </p>
      </form>
    </div>
  );
}
