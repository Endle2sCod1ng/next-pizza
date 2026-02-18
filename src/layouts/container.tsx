import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';


interface AppContainerProps {
  className?: string;
}

export const AppContainer: FC<PropsWithChildren<AppContainerProps>> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};