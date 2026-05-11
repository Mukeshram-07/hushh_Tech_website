import React, { useState, ReactNode, KeyboardEvent } from "react";

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  children,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child: any) =>
        child.type === TabsList
          ? React.cloneElement(child, { activeTab, setActiveTab })
          : child.type === TabsContent && child.props.value === activeTab
          ? React.cloneElement(child, { activeTab })
          : null
      )}
    </div>
  );
};

export const TabsList: React.FC<{
  children: ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}> = ({ children, activeTab, setActiveTab }) => {
  const triggers = React.Children.toArray(children);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLElement>,
    currentIndex: number
  ) => {
    let nextIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % triggers.length;
        break;

      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = triggers.length - 1;
        break;

      default:
        return;
    }

    e.preventDefault();

    const nextChild: any = triggers[nextIndex];

    setActiveTab?.(nextChild.props.value);

    const nextButton = document.getElementById(
      `tab-${nextChild.props.value}`
    );

    nextButton?.focus();
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="flex gap-2"
    >
      {triggers.map((child: any, index) =>
        React.cloneElement(child, {
          activeTab,
          setActiveTab,
          onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) =>
            handleKeyDown(e, index),
        })
      )}
    </div>
  );
};

export const TabsTrigger: React.FC<
  TabsTriggerProps & {
    activeTab?: string;
    setActiveTab?: (value: string) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  }
> = ({
  value,
  children,
  activeTab,
  setActiveTab,
  onKeyDown,
}) => (
  <button
    type="button"
    id={`tab-${value}`}
    role="tab"
    aria-selected={activeTab === value}
    aria-controls={`panel-${value}`}
    tabIndex={activeTab === value ? 0 : -1}
    onClick={() => setActiveTab?.(value)}
    onKeyDown={onKeyDown}
    className={`px-4 py-2 rounded-lg min-h-[44px] ${
      activeTab === value
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-black"
    }`}
  >
    {children}
  </button>
);

export const TabsContent: React.FC<
  TabsContentProps & { activeTab?: string }
> = ({ value, children, activeTab }) => (
  <div
    id={`panel-${value}`}
    role="tabpanel"
    aria-labelledby={`tab-${value}`}
    hidden={activeTab !== value}
    tabIndex={activeTab === value ? 0 : -1}
  >
    {children}
  </div>
);