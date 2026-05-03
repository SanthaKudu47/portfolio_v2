import { folderData } from "@components/finder/dirData";
import { goBackward, goForward } from "@components/finder/navigationHelpers";
import type {
  FileInfoType,
  FileTypes,
  PropsToInner,
} from "@components/finder/types";
import { useAppStore } from "@store";
import { useState } from "react";

export default function withDirHandlerWrapper(
  InnerComp: React.ComponentType<PropsToInner>,
) {
  return function () {
    const [currentDir, setCurrentDir] = useState<FileInfoType[]>(folderData);
    const [paths, setPaths] = useState<string[]>([]);
    const openWindow = useAppStore((state) => state.openWindow);
    const setFilePath = useAppStore((state) => state.setFilePath);
    const setPdfFilePath = useAppStore((state) => state.setPdfFilePath);

    function reset() {
      setCurrentDir(folderData);
      setPaths([]);
    }

    function openFolder(pathId: string, type: FileTypes, filePath?: string) {
      console.log("TYPE", type);
      if (type === "folder") {
        const next = goForward(pathId, currentDir);
        if (!next) return;
        setPaths((prev) => [...prev, pathId]);
        setCurrentDir(next);
      }

      if (type === "image") {
        if (filePath) {
          setFilePath(filePath);
        }
        openWindow("imageViewer");
      }

      if (type === "pdf") {
        console.log("handler file path",filePath)
        if (filePath) {
          setPdfFilePath(filePath);
        }
        openWindow("pdfViewer");
      }
    }

    function updateDirPath(pathId: string) {
      //return if we are already in same path//if pathId is same as last of paths then we are in same.
      if (pathId === paths[paths.length - 1]) return;

      //get index of pathId
      const index = paths.indexOf(pathId);
      if (index === -1) return;

      const newPaths = paths.slice(0, index + 1);
      const next = goBackward(newPaths, folderData);
      if (!next) return;
      setCurrentDir(next);
      setPaths(newPaths);
    }

    return (
      <>
        <InnerComp
          currentDir={currentDir}
          openFolder={openFolder}
          paths={paths}
          reset={reset}
          updateDirPath={updateDirPath}
        />
      </>
    );
  };
}
