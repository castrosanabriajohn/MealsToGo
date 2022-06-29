import React from "react";
import { CompactRestInfo } from "../../restaurants/components/compact-rest-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestInfo isMap restaurant={restaurant} />;
};
