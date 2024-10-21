"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const NProgressBar = () => {
  return <ProgressBar shallowRouting height="2px" color="#000" options={{ showSpinner: false }} />;
};
