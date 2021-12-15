import { Skeleton as AntSkeleton } from "antd";
import { SkeletonProps } from "antd/lib/skeleton";
import { FC } from "react";

const Skeleton: FC<SkeletonProps> = (props) => {
  return <AntSkeleton {...props} />;
};
export default Skeleton;
