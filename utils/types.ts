import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type uploaderProps = {
  label?: string;
  identifier?: string;
  maxFileSizeInBytes?: number;
  updateFilesCb: (e: any[]) => void;
  [x: string]: any;
  multiples?: boolean;
  stateData: any[];
};

export type PropsType = {
  [x: string]: any;
};
