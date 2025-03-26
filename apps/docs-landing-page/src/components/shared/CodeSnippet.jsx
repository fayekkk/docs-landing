"use client";

import React, { useState } from "react";
import { Check, Copy, Code as CodeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const CodeSnippet = ({
  code,
  language = "javascript",
  showLineNumbers = true,
  title,
  className,
  maxHeight,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Language-specific syntax highlighting classes
  const getLanguageClass = () => {
    switch (language.toLowerCase()) {
      case "javascript":
      case "js":
        return "language-javascript";
      case "typescript":
      case "ts":
        return "language-typescript";
      case "python":
      case "py":
        return "language-python";
      case "php":
        return "language-php";
      case "ruby":
      case "rb":
        return "language-ruby";
      case "html":
        return "language-html";
      case "css":
        return "language-css";
      case "json":
        return "language-json";
      case "bash":
      case "shell":
        return "language-bash";
      default:
        return `language-${language.toLowerCase()}`;
    }
  };

  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-gray-200 text-sm flex justify-between items-center">
          <div className="flex items-center">
            <CodeIcon className="h-4 w-4 mr-2" />
            <span>{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
      <div
        className={cn(
          "relative bg-gray-900 p-4 text-gray-100 overflow-x-auto",
          maxHeight ? `max-h-[${maxHeight}] overflow-y-auto` : ""
        )}
      >
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1 rounded bg-gray-800/50 hover:bg-gray-800"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        )}
        <pre className={cn("font-mono text-sm", showLineNumbers ? "line-numbers" : "")}>
          <code className={getLanguageClass()}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;