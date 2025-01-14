import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siLinkedin } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const LinkedIn: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siLinkedin.path} />
    </SvgIcon>
  );
};

LinkedIn.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  LinkedIn.whyDidYouRender = true;
}

export default LinkedIn;
