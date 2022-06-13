import React from "react";
import styled from "styled-components/native";

const Size = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
};

const SpacerChild = styled.View`
  margin-${(prop) => prop.direction}: ${(prop) => prop.theme.space[prop.size]}
`;

export const Spacer = ({ variant = "left.sm" }) => {
  const [direction, size] = variant.split(".");
  return <SpacerChild variant={direction} size={Size[size]} />;
};

export default Spacer;
