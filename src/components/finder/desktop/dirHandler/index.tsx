import { folderData } from "@components/finder/dirData";
import { goBackward, goForward } from "@components/finder/navigationHelpers";
import type { FileInfoType, PropsToInner } from "@components/finder/types";
import { useState } from "react";


export default function withDirHandlerWrapper(
  InnerComp: React.ComponentType<PropsToInner>,
) {
    return function(){
         const [currentDir, setCurrentDir] = useState<FileInfoType[]>(folderData);
  const [paths, setPaths] = useState<string[]>([]);

  function reset() {
    setCurrentDir(folderData);
    setPaths([]);
  }

  function openFolder(pathId: string) {
    const next = goForward(pathId, currentDir);
    if (!next) return;
    setPaths((prev) => [...prev, pathId]);
    setCurrentDir(next);
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
    }
 
}
