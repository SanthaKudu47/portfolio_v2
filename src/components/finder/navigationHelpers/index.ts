import type { FileInfoType } from "../types";

  export function goBackward(paths: string[], folderData: FileInfoType[]) {
    if (paths.length == 1) {
      const openedDir = folderData.find((value) => value.pathId === paths[0]);
      if (!openedDir || !openedDir.subFolder) return null;
      return openedDir.subFolder;
    } else {
      const openedDir = folderData.find((value) => value.pathId === paths[0]);
      if (!openedDir || !openedDir.subFolder) return null;

      return goBackward(paths.slice(1), openedDir.subFolder);
    }
  }

  export function goForward(path: string, folderData: FileInfoType[]) {
    const openedDir = folderData.find((value) => value.pathId === path);
    if (!openedDir || !openedDir.subFolder) return null;
    return openedDir.subFolder;
  }