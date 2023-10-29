import React from "react";

function Description() {
  return (
    <div className="max-w-[80%] mx-auto font-arimo flex flex-col items-center py-20 sm:py-28 md:py-36 lg:py-40 xl:py-48 2xl:py-56 gap-0 sm:gap-3">
      <div className="font-arimo text-[rgb(36,43,85)] font-extrabold text-3xl sm:text-6xl tracking-wider text-center flex flex-col gap-0 sm:gap-3">
        <p>Become a</p>
        <p>React Developer</p>
        <p>in just 6 months</p>
      </div>
      <div className="py-3 text-center text-base sm:text-xl tracking-wide">
        <p>Learn from the industry leaders and get</p>
        <p>placed at the top tech companies</p>
        <p className="font-extrabold text-[rgb(13,140,157)]">Pay Zero until you get placed</p>
      </div>
    </div>
  );
}

export default Description;
