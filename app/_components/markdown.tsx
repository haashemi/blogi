"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        pre: (props) => <pre {...props} dir="ltr" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
