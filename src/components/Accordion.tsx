import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// Shared types for both accordion implementations
type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

// ==================== CONTROLLED ACCORDION ====================
type ControlledAccordionItemProps = AccordionItemProps & {
  isOpen: boolean;
  onToggle: () => void;
};

export const ControlledAccordionItem: React.FC<ControlledAccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-gray-200 rounded-md mb-2 overflow-hidden">
      <button
        className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
        onClick={onToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 p-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const ControlledAccordion: React.FC<{ items: Array<{ title: string; content: React.ReactNode }> }> = ({
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <ControlledAccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </ControlledAccordionItem>
      ))}
    </div>
  );
};

// ==================== UNCONTROLLED ACCORDION ====================
export const UncontrolledAccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-md mb-2 overflow-hidden">
      <button
        className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
        onClick={handleToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 p-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const UncontrolledAccordion: React.FC<{ items: Array<{ title: string; content: React.ReactNode }> }> = ({
  items,
}) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <UncontrolledAccordionItem key={index} title={item.title}>
          {item.content}
        </UncontrolledAccordionItem>
      ))}
    </div>
  );
};