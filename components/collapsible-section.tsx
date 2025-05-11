import { useState } from "react";

// Cette fonction permet de cacher/afficher les sections de ma situation

type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  defaultOpen?: boolean; 
};

const CollapsibleSection = ({
  title,
  children,
  titleClassName,
  defaultOpen = true,
}: CollapsibleSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full flex flex-col">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between py-2 border-b border-primary/40 cursor-pointer"
      >
        <p className={titleClassName ?? "text-lg"}>{title}</p>
        <img
          src="/arrow-down.svg"
          alt="arrow"
          className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      <div
        className={`w-full flex flex-col items-center pt-5 gap-4 transition-all overflow-hidden ${
          open ? "max-h-full" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;

