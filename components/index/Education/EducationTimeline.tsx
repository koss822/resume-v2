import React, { FC, memo } from "react";

import Timeline from "components/common/Timeline";
import education from "constants/education";

const EducationTimeline: FC = () => {

  const data = education
    .map(({ degree, school, ...node }) => ({
      title: degree,
      subtitle: school,
      ...node
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") EducationTimeline.whyDidYouRender = true;

export default memo(EducationTimeline);