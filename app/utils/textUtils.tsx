import ReactMarkdown from "react-markdown";

/**
 * Renders Markdown text to React elements.
 * Supports standard .md formats including bold, italic, headings, and lists.
 */
export const renderMDtext = (text: string | null | undefined) => {
  if (!text) return null;
  return <ReactMarkdown>{text}</ReactMarkdown>;
};