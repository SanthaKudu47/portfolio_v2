import type { IconType } from "react-icons";

export type FileTypes = "folder" | "image" | "pdf" | "txt";

export type FileInfoType = {
  pathId?: string;
  type: FileTypes;
  fileName: string;
  subFolder?: FileInfoType[];
};

export type SidePanelItem = {
  text: string;
  Icon: IconType;
};
