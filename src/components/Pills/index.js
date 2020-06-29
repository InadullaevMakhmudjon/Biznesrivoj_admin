import React from "react";

import { PillStyled } from "./style";

const Pills = ({ values }) => (
  <div>
    {values.map((value, idx) => (
      <PillStyled key={idx}>{value.label}</PillStyled>
    ))}
  </div>
);

export default Pills;
