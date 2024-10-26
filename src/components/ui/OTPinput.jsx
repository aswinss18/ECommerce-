import React, { useState } from "react";

export default function OTPinput() {
  const [isActive, setIsActive] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();

    if (e?.target.value?.length > 0) {
      setIsActive(!isActive);
    }
  };
  return (
    <input
      type="number"
      className="border-[1px] border-customBorderGray  rounded-md w-[48px] h-[48px] text-center"
      maxLength={1}
      onChange={handleInput}
      disabled={isActive}
    />
  );
}
