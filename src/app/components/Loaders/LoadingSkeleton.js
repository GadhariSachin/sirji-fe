import React from "react";
import Skeleton from "@mui/material/Skeleton";

function LoadingSkeleton({
  variant = "rectangular",
  height = 100,
  width = "100%",
}) {
  return <Skeleton variant={variant} width={width} height={height} />;
}

export default LoadingSkeleton;
