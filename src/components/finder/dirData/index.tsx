import type { FileInfoType } from "../types";

export const homeDir: FileInfoType[] = [
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
                    url: "pdfs/doc_craft.pdf",
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
            url: "pdfs/Sahan_Chathura_CV.pdf",
          },
        ],
      },
    ],
  },
];

export const workDir: FileInfoType[] = [
  {
    pathId: "work",
    type: "folder",
    fileName: "Work",
    subFolder: [
      {
        pathId: "project_alpha",
        type: "folder",
        fileName: "Project Alpha",
        subFolder: [
          {
            pathId: "alpha_ui",
            type: "image",
            fileName: "ui-preview.png",
            url: "images/work/alpha-ui.png",
          },
          {
            pathId: "alpha_mock",
            type: "image",
            fileName: "mockup.png",
            url: "images/work/alpha-mock.png",
          },
          {
            pathId: "alpha_html",
            type: "pdf",
            fileName: "index.html",
            url: "https://github.com/yourname/project-alpha",
          },
        ],
      },
      {
        pathId: "project_beta",
        type: "folder",
        fileName: "Project Beta",
        subFolder: [
          {
            pathId: "beta_ui",
            type: "image",
            fileName: "ui-preview.png",
            url: "images/work/beta-ui.png",
          },
          {
            pathId: "beta_mock",
            type: "image",
            fileName: "mockup.png",
            url: "images/work/beta-mock.png",
          },
          {
            pathId: "beta_html",
            type: "pdf",
            fileName: "index.html",
            url: "https://your-hosted-url.com/beta",
          },
        ],
      },
      {
        pathId: "project_gamma",
        type: "folder",
        fileName: "Project Gamma",
        subFolder: [
          {
            pathId: "gamma_ui",
            type: "image",
            fileName: "ui-preview.png",
            url: "images/work/gamma-ui.png",
          },
          {
            pathId: "gamma_mock",
            type: "image",
            fileName: "mockup.png",
            url: "images/work/gamma-mock.png",
          },
          {
            pathId: "gamma_html",
            type: "pdf",
            fileName: "index.html",
            url: "https://github.com/yourname/project-gamma",
          },
        ],
      },
      {
        pathId: "project_delta",
        type: "folder",
        fileName: "Project Delta",
        subFolder: [
          {
            pathId: "delta_ui",
            type: "image",
            fileName: "ui-preview.png",
            url: "images/work/delta-ui.png",
          },
          {
            pathId: "delta_mock",
            type: "image",
            fileName: "mockup.png",
            url: "images/work/delta-mock.png",
          },
          {
            pathId: "delta_html",
            type: "pdf",
            fileName: "index.html",
            url: "https://your-hosted-url.com/delta",
          },
        ],
      },
    ],
  },
];

const about: FileInfoType[] = [
  {
    pathId: "about_me",
    type: "folder",
    fileName: "About Me",
    subFolder: [
      {
        pathId: "bio",
        type: "pdf",
        fileName: "bio.txt",
      },
      {
        pathId: "profile_pic",
        type: "image",
        fileName: "profile.png",
        url: "images/profile.png",
      },
      {
        pathId: "skills",
        type: "pdf",
        fileName: "skills.txt",
      },
    ],
  },
];

const resume:FileInfoType[]=[]

export const dirData = {
  home: homeDir,
  work: workDir,
  resume: [],
  about: about,
  trash: [],
};
