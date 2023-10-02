import React from "react";
import SectionHeading from "../sectionHeading";
import ImageWrapper from "@/components/common/imageWrapper";
import { PROJECTS } from "@/helper";
import Typography from "@/components/common/typography";
import LinkButton from "@/components/common/linkButton";

const ProjectsContent = () => {
  return (
    <>
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.name}
              className="flex w-full flex-col gap-4 rounded-lg bg-[#f3f4f6] p-4 dark:bg-[#181818] md:flex-row"
            >
              <div className="flex h-auto w-full justify-center">
                <div className="h-auto w-full">
                  <ImageWrapper
                    src={project.previewImage}
                    width={100}
                    height={100}
                    alt="Portfolio Website Image"
                    className="max-h-full max-w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="flex h-auto w-full flex-col">
                <div className="flex h-full flex-col justify-between gap-2">
                  <div className="flex flex-col gap-4">
                    <Typography variant="h3" className=" text-xl md:text-2xl">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" className=" text-lg md:text-xl">
                      {project.description}
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                      {project?.technologies?.map((technology) => {
                        return (
                          <div key={technology.label} className="flex flex-col items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center">
                              <ImageWrapper
                                src={technology?.logo}
                                srcForDarkMode={technology?.darkModeLogo}
                                alt={technology?.label}
                                width={100}
                                className="max-h-full max-w-full transition-transform duration-300 md:hover:scale-110"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {project?.url || project?.sourceCode ? (
                      <div className="flex justify-evenly">
                        {project?.url && (
                          <LinkButton url={project?.url} target="_blank" label="View" />
                        )}
                        {project?.sourceCode && (
                          <LinkButton url={project?.sourceCode} target="_blank" label="View Code" />
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsContent;
