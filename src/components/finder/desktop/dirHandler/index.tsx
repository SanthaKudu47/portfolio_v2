import { dirData, homeDir } from "@components/finder/dirData";
import { goBackward, goForward } from "@components/finder/navigationHelpers";
import type {
  DirTagTypes,
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
    const [currentDir, setCurrentDir] = useState<FileInfoType[]>(
      dirData["work"],
    );
    const [paths, setPaths] = useState<string[]>([]);
    const openWindow = useAppStore((state) => state.openWindow);
    const setFilePath = useAppStore((state) => state.setFilePath);
    const setPdfFilePath = useAppStore((state) => state.setPdfFilePath);
    const [dirTag, setTag] = useState<DirTagTypes>("work");

    function setActiveDir(tag: DirTagTypes) {
      setTag(tag);
      setCurrentDir(dirData[tag]);
      setPaths([]);
    }

    function reset() {
      setCurrentDir(homeDir);
      setPaths([]);
    }

    function openFolder(pathId: string, type: FileTypes, filePath?: string) {
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
        console.log("handler file path", filePath);
        if (filePath) {
          setPdfFilePath(filePath);
        }
        openWindow("pdfViewer");
      }
    }

    function updateDirPath(pathId: string) {
      console.log(
        pathId,
        paths,
        pathId === paths[paths.length - 1],
        paths.indexOf(pathId),
      );
      //return if we are already in same path//if pathId is same as last of paths then we are in same.
      if (pathId === paths[paths.length - 1]) return;

      //get index of pathId
      const index = paths.indexOf(pathId);
      if (index === -1) return;

      const newPaths = paths.slice(0, index + 1);
      const next = goBackward(newPaths, dirData[dirTag]);
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
          setActiveDir={setActiveDir}
          activeDirTag={dirTag}
        />
      </>
    );
  };
}
