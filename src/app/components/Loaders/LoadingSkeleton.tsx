import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { SKELETON_VARIANTS, SkeletonVariantType } from "../../utils/constants";

interface LoadingSkeletonPropsInterface {
  variant?: SkeletonVariantType;
  height: number | string;
  width?: number | string;
}

function LoadingSkeleton({
  variant = SKELETON_VARIANTS.RECTANGLE,
  height = 100,
  width = "100%",
}: LoadingSkeletonPropsInterface) {
  return <Skeleton variant={variant} width={width} height={height} />;
}

export default LoadingSkeleton;
