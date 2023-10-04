import Typography from "@/components/common/typography";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {title && (
        <Typography variant="h3" className="font-medium">
          {title}
        </Typography>
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
