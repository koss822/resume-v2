import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGoogle } from "simple-icons/icons";

import useSx from "./useThirdPartyIconSx";

const EnterpriseDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.google} {...props}>
      <path d={siGoogle.path} />
    </SvgIcon>
  );
};

EnterpriseDB.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") EnterpriseDB.whyDidYouRender = true;

export default EnterpriseDB;
