export const TimelineContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col space-y-8">
      <div className="absolute inset-0 left-11 z-0 h-full w-2 bg-white shadow-md md:left-0 md:right-0 md:mx-auto"></div>
      {children}
    </div>
  );
};
