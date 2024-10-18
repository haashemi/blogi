"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const NProgressBar = () => {
  return <ProgressBar height="2px" color="#000" shallowRouting options={{ showSpinner: false }} />;
};
