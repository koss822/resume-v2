import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import type { CardProps, SvgIconProps } from "@mui/material";
import type { ElementType, FC } from "react";

import EnterpriseDB from "../icons/EnterpriseDB";
import Microsoft from "../icons/Microsoft";
import MongoDB from "../icons/MongoDB";
import Oracle from "../icons/Oracle";
import Udemy from "../icons/Udemy";
import useSx from "./useSx";

type CertAndCourseCardProps = CardProps & {
  name: string,
  organization: string,
  status?: string,
  certificationUrl?: string
}

const Icons: Record<string, ElementType<SvgIconProps>> = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy,
  enterpriseDB: EnterpriseDB,
  mongoDB: MongoDB
};

const CertAndCourseCard: FC<CertAndCourseCardProps> = ({ name, organization, status, certificationUrl, ...props }) => {
  const sx = useSx(organization);
  const Icon = Icons[organization];
  const cardContent = (
    <CardContent sx={sx.cardContent}>
      {Icon && <Icon fontSize="large" sx={sx.icon} />}
      <div>
        <Typography>{name}</Typography>
        <Typography sx={sx.organization}>{organization}</Typography>
        {status && <Typography variant="body2" sx={sx.status}>{status}</Typography>}
      </div>
    </CardContent>
  );

  return (
    <Card {...props} data-cy={name}>
      {certificationUrl
        ? (
          <CardActionArea href={certificationUrl} target="_blank">
            {cardContent}
          </CardActionArea>
        )
        : cardContent
      }
    </Card>
  );
};

if (process.env.NODE_ENV === "development") CertAndCourseCard.whyDidYouRender = true;

export default CertAndCourseCard;