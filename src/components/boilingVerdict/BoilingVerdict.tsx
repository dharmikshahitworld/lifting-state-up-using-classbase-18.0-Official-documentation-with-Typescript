import React from "react";

type BoilingVerdictProps = {
  celsius: number;
};

export const BoilingVerdict: React.FC<BoilingVerdictProps> = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};
