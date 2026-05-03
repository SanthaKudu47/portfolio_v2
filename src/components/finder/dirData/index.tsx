import type { FileInfoType } from "../types";

export const folderData: FileInfoType[] = [
  {
    pathId: "home",
    type: "folder",
    fileName: "home",
    subFolder: [
      {
        pathId: "projects",
        type: "folder",
        fileName: "Projects",
        subFolder: [
          {
            pathId: "portfolio_site",
            type: "folder",
            fileName: "Portfolio Site",
            subFolder: [
              {
                pathId: "ui",
                type: "folder",
                fileName: "UI",
                subFolder: [
                  {
                    pathId: "homepage_design",
                    type: "image",
                    fileName: "homepage-design.png",
                    url: "images/desktop.jpg",
                    
                  },
                  {
                    pathId: "finder_mock",
                    type: "image",
                    fileName: "finder-ui-mock.png",
                    url: "images/desktop2.png",
                  },
                  {
                    pathId: "ui_specs",
                    type: "pdf",
                    fileName: "ui-specs.pdf",
                  },
                ],
              },
              {
                pathId: "backend",
                type: "folder",
                fileName: "Backend",
                subFolder: [
                  {
                    pathId: "api_contract",
                    type: "pdf",
                    fileName: "api-contract.pdf",
                    url:'pdfs/doc_craft.pdf'
                  },
                  {
                    pathId: "db_schema",
                    type: "image",
                    fileName: "db-schema.png",
                  },
                ],
              },
              {
                pathId: "wireframe",
                type: "image",
                fileName: "homepage-wireframe.png",
              },
            ],
          },

          {
            pathId: "resume_pdf",
            type: "pdf",
            fileName: "cv.pdf",
            url:'pdfs/Sahan_Chathura_CV.pdf'
          },
        ],
      },
    ],
  },
];
