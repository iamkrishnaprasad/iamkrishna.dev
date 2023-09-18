import Typography from "@/components/common/typography";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {title && (
        <div className="self-center">
          <Typography variant="h3" className="font-medium">
            {title}
          </Typography>
        </div>
      )}
      {subtitle && (
        <Typography variant="subtitle" className="text-center">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default SectionHeading;
