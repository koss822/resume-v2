import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import styles from "./supportingDocumentListItem.module.css";
import SupportingDocumentListItemProps from "./SupportingDocumentListItemProps";
import useSx from "./useSupportingDocumentListItemSx";

const SupportingDocumentListItem: FC<SupportingDocumentListItemProps> = ({ title, supportingDocument: { name, url, thumbnail } }) => {
  const sx = useSx();

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url ?? undefined} target="_blank" sx={sx.button} data-cy={`${title}-${name}`}>
        <ListItemAvatar sx={sx.avatar}>
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`Thumbnail of ${name}`}
              width={102}
              height={68}
              className={styles.thumbnail}
            />
          )}
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem >
  );

};

if (process.env.NODE_ENV === "development") SupportingDocumentListItem.whyDidYouRender = true;

export default SupportingDocumentListItem;