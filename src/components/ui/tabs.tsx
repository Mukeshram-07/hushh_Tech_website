<<<<<<< HEAD
import React, { KeyboardEvent, ReactNode, useId, useState } from "react";
=======
<<<<<<< Updated upstream
import React, { useState, ReactNode, KeyboardEvent } from "react";
=======
import React, {
  useState,
  ReactNode,
  KeyboardEvent,
  useId,
} from "react";
>>>>>>> Stashed changes
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  tabsId?: string;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  tabsId?: string;
<<<<<<< HEAD
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
=======
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  activeTab?: string;
  tabsId?: string;
<<<<<<< HEAD
}

function tabId(tabsId: string | undefined, value: string) {
  return `${tabsId ?? "tabs"}-tab-${value}`;
}

function panelId(tabsId: string | undefined, value: string) {
  return `${tabsId ?? "tabs"}-panel-${value}`;
=======
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  children,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const tabsId = useId();

  return (
    <div className={className}>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
      {React.Children.map(children, (child: any) =>
        child.type === TabsList
          ? React.cloneElement(child, { activeTab, setActiveTab })
          : child.type === TabsContent && child.props.value === activeTab
          ? React.cloneElement(child, { activeTab })
          : null
=======
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
      {React.Children.map(children, (child: any) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, {
            activeTab,
            setActiveTab,
            tabsId,
          });
        }

<<<<<<< HEAD
        if (child.type === TabsContent && child.props.value === activeTab) {
=======
        if (
          child.type === TabsContent &&
          child.props.value === activeTab
        ) {
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
          return React.cloneElement(child, {
            activeTab,
            tabsId,
          });
        }

        return null;
      })}
<<<<<<< HEAD
=======
    </div>
  );
};

export const TabsList: React.FC<TabsListProps> = ({
  children,
  activeTab,
  setActiveTab,
  tabsId,
}) => {
  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    const triggers = React.Children.toArray(children);

    let nextIndex = currentIndex;

    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % triggers.length;
    }

    if (e.key === "ArrowLeft") {
      nextIndex =
        (currentIndex - 1 + triggers.length) % triggers.length;
    }

    if (e.key === "Home") {
      nextIndex = 0;
    }

    if (e.key === "End") {
      nextIndex = triggers.length - 1;
    }

    if (nextIndex !== currentIndex) {
      e.preventDefault();

      const nextChild: any = triggers[nextIndex];

      setActiveTab?.(nextChild.props.value);

      document
        .getElementById(
          `${tabsId}-tab-${nextChild.props.value}`
        )
        ?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="flex gap-2"
    >
      {React.Children.map(children, (child: any, index) =>
        React.cloneElement(child, {
          activeTab,
          setActiveTab,
          tabsId,
          onKeyDown: (
            e: KeyboardEvent<HTMLButtonElement>
          ) => handleKeyDown(e, index),
        })
>>>>>>> Stashed changes
      )}
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
    </div>
  );
};

<<<<<<< HEAD
export const TabsList: React.FC<TabsListProps> = ({
  children,
  activeTab,
  setActiveTab,
  tabsId,
}) => {
  const triggers = React.Children.toArray(children).filter(
    React.isValidElement
  ) as React.ReactElement<TabsTriggerProps>[];
=======
<<<<<<< Updated upstream
export const TabsList: React.FC<{
  children: ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}> = ({ children, activeTab, setActiveTab }) => {
  const triggers = React.Children.toArray(children);
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    let nextIndex = currentIndex;

    switch (event.key) {
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

    event.preventDefault();

    const nextValue = triggers[nextIndex]?.props.value;
    if (!nextValue) return;

    setActiveTab?.(nextValue);
    document.getElementById(tabId(tabsId, nextValue))?.focus();
  };

  return (
    <div role="tablist" aria-orientation="horizontal" className="flex gap-2">
      {triggers.map((child, index) =>
        React.cloneElement(child, {
          activeTab,
          setActiveTab,
          tabsId,
          onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) =>
            handleKeyDown(event, index),
        })
      )}
    </div>
  );
};

<<<<<<< HEAD
export const TabsTrigger: React.FC<TabsTriggerProps> = ({
=======
export const TabsTrigger: React.FC<
  TabsTriggerProps & {
    activeTab?: string;
    setActiveTab?: (value: string) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
=======
export const TabsTrigger: React.FC<
  TabsTriggerProps & {
    onKeyDown?: (
      e: KeyboardEvent<HTMLButtonElement>
    ) => void;
>>>>>>> Stashed changes
  }
> = ({
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
  value,
  children,
  activeTab,
  setActiveTab,
<<<<<<< HEAD
  tabsId,
=======
<<<<<<< Updated upstream
>>>>>>> b32a03b (fix(ui): scope tabs accessibility ids with useId)
  onKeyDown,
}) => {
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      id={tabId(tabsId, value)}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId(tabsId, value)}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab?.(value)}
      onKeyDown={onKeyDown}
      className={`px-4 py-2 rounded-lg min-h-[44px] ${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  activeTab,
  tabsId,
}) => (
  <div
    id={panelId(tabsId, value)}
    role="tabpanel"
    aria-labelledby={tabId(tabsId, value)}
    tabIndex={activeTab === value ? 0 : -1}
  >
    {children}
  </div>
);
=======
  tabsId,
  onKeyDown,
}) => {
  const isActive = activeTab === value;

  return (
    <button
      id={`${tabsId}-tab-${value}`}
      role="tab"
      type="button"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      aria-controls={`${tabsId}-panel-${value}`}
      onClick={() => setActiveTab?.(value)}
      onKeyDown={onKeyDown}
      className={`px-4 py-2 rounded-lg ${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  activeTab,
  tabsId,
}) => {
  if (activeTab !== value) return null;

  return (
    <div
      id={`${tabsId}-panel-${value}`}
      role="tabpanel"
      aria-labelledby={`${tabsId}-tab-${value}`}
      tabIndex={0}
      className="mt-4"
    >
      {children}
    </div>
  );
};
>>>>>>> Stashed changes
