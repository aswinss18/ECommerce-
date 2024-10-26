import React, { useState } from "react";
import Button from "../ui/Button";
import OTPinput from "../ui/OTPinput";

export default function Verify() {
  return (
    <div className="flex justify-center items-center mt-10">
      <form
        action=""
        className="border-[1px] w-[576px] h-[453px] rounded-[20px] border-customBorderGray flex flex-col items-center justify-evenly "
      >
        <div className="flex flex-col space-y-6">
          <h1 className="text-[32px] font-semibold text-center">
            Verify your email
          </h1>
          <p className="px-16 text-center">
            Enter the 8 digit code you have received on{" "}
            <b className="font-medium">dev***@revispy.com</b>
          </p>
        </div>
        <label htmlFor="" className="flex flex-col space-y-2">
          <p>Code</p>
          <div className="flex w-[456px] justify-between">
            <OTPinput /> <OTPinput /> <OTPinput /> <OTPinput /> <OTPinput />
            <OTPinput /> <OTPinput /> <OTPinput />
          </div>
        </label>
        <Button>VERIFY</Button>
      </form>
    </div>
  );
}
