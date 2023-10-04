const Tooltip = ({ message, children }: { message: string; children: React.ReactNode }) => {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute top-10 w-max scale-0 rounded border bg-white p-2 text-xs text-black transition-all group-hover:scale-100 dark:bg-[#121212] dark:text-white">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
