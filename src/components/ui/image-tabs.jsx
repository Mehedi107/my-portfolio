'use client';
import React, { useState, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
const TabsContext = createContext(undefined);
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a TabsProvider');
  }
  return context;
};
export function TabsProvider({ children, defaultValue, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn('w-full h-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
}
export function TabList({ children, className }) {
  return <div className={cn('rounded-sm h-fit', className)}>{children}</div>;
}
export function TabItem({ children, value, index }) {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <motion.div
      className={`rounded-lg overflow-hidden mb-2  ${
        activeTab === value ? 'active border' : 'border hover:bg-card'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  );
}
export function TabHeader({ children, value }) {
  const { activeTab } = useTabs();
  return (
    <h3
      className={`p-3 cursor-pointer transition-all flex justify-between items-center border-b text-muted-foreground ${
        activeTab === value ? 'active bg-card' : ''
      }`}
    >
      {children}
    </h3>
  );
}
export function TabDes({ children, value }) {
  const { activeTab } = useTabs();
  return (
    <AnimatePresence mode="sync">
      {activeTab === value && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: 0.14,
          }}
        >
          <div className={`p-5 md:pb-0 space-y-4`}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function TabImageContainer({ children, className }) {
  return (
    <div className={cn('', className)}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  );
}
export function TabImage({ children, value, index }) {
  const { activeTab, isDesktop } = useTabs();
  if (activeTab !== value || !isDesktop) return null;
  return (
    <motion.div className="h-[500px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, overflow: 'hidden' }}
        animate={{ opacity: 1, overflow: 'hidden' }}
        exit={{ opacity: 0, overflow: 'hidden' }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
