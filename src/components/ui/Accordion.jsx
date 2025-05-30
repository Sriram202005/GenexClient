import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({
  title,
  children,
  isOpen = false,
  onToggle,
  className = '',
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggle = () => {
    const newState = !open;
    setOpen(newState);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <button
        className="w-full py-4 px-6 flex justify-between items-center text-left focus:outline-none"
        onClick={handleToggle}
      >
        <span className="font-medium text-gray-800">{title}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

const Accordion = ({ children, className = '' }) => {
  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem };
