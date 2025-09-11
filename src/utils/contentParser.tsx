import DOMPurify from "dompurify";
import React from "react";
import { createRoot } from "react-dom/client";
import Callout from "@/components/ui/callout";
import CodeBlock from "@/components/ui/code-block";
import { EnhancedTable, TableHeader, TableRow, TableCell } from "@/components/ui/enhanced-table";

// Enhanced inline formatting parser
export const parseInlineFormatting = (text: string): string => {
  let formatted = text;
  
  // Links [text](url)
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Inline code `code`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
  
  // Bold **text** or __text__
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
  formatted = formatted.replace(/__([^_]+)__/g, '<strong class="font-semibold">$1</strong>');
  
  // Italic *text* or _text_ (but not if surrounded by __)
  formatted = formatted.replace(/(?<!_)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>');
  formatted = formatted.replace(/(?<!_)_([^_]+)_(?!_)/g, '<em class="italic">$1</em>');
  
  // Strikethrough ~~text~~
  formatted = formatted.replace(/~~([^~]+)~~/g, '<del class="line-through opacity-70">$1</del>');
  
  return formatted;
};

// Enhanced rich content parser
export const parseRichContent = (content: string): string => {
  const sections = content.split('\n\n');
  let inCodeBlock = false;
  let codeLanguage = '';
  let codeContent: string[] = [];
  let result: string[] = [];

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i].trim();
    
    if (!section) continue;

    // Handle code blocks
    if (section.startsWith('```')) {
      if (!inCodeBlock) {
        // Starting code block
        inCodeBlock = true;
        codeLanguage = section.slice(3).trim() || 'text';
        codeContent = [];
        continue;
      } else {
        // Ending code block
        inCodeBlock = false;
        const code = codeContent.join('\n');
        result.push(`<div data-code-block="${codeLanguage}">${DOMPurify.sanitize(code)}</div>`);
        codeContent = [];
        continue;
      }
    }

    if (inCodeBlock) {
      codeContent.push(section);
      continue;
    }

    // Handle callouts :::type
    if (section.startsWith(':::')) {
      const lines = section.split('\n');
      const type = lines[0].slice(3).trim();
      const content = lines.slice(1).join('\n');
      result.push(`<div data-callout="${type}">${DOMPurify.sanitize(parseInlineFormatting(content))}</div>`);
      continue;
    }

    // Handle tables
    if (section.includes('|') && section.split('\n').length > 1) {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length >= 2 && lines[1].includes('---')) {
        const headers = lines[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        const rows = lines.slice(2).map(line => 
          line.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
        );
        
        let tableHtml = '<table class="w-full border-collapse border border-border rounded-lg my-6"><thead class="bg-muted">';
        tableHtml += '<tr>';
        headers.forEach(header => {
          tableHtml += `<th class="px-4 py-3 text-left text-sm font-medium text-foreground border-b border-border">${DOMPurify.sanitize(parseInlineFormatting(header))}</th>`;
        });
        tableHtml += '</tr></thead><tbody>';
        
        rows.forEach(row => {
          tableHtml += '<tr class="border-b border-border hover:bg-muted/50">';
          row.forEach(cell => {
            tableHtml += `<td class="px-4 py-3 text-left text-sm text-muted-foreground">${DOMPurify.sanitize(parseInlineFormatting(cell))}</td>`;
          });
          tableHtml += '</tr>';
        });
        
        tableHtml += '</tbody></table>';
        result.push(tableHtml);
        continue;
      }
    }

    // Handle horizontal rules
    if (section === '---' || section === '***') {
      result.push('<hr class="my-8 border-border" />');
      continue;
    }

    // Handle headings
    if (section.startsWith('### ')) {
      const text = parseInlineFormatting(section.slice(4));
      result.push(`<h3 class="font-display text-lg sm:text-xl font-medium mt-6 sm:mt-8 mb-3 sm:mb-4 text-foreground">${DOMPurify.sanitize(text)}</h3>`);
      continue;
    }
    if (section.startsWith('## ')) {
      const text = parseInlineFormatting(section.slice(3));
      result.push(`<h2 class="font-display text-xl sm:text-2xl font-medium mt-8 sm:mt-12 mb-4 sm:mb-6 text-foreground">${DOMPurify.sanitize(text)}</h2>`);
      continue;
    }
    if (section.startsWith('# ')) {
      const text = parseInlineFormatting(section.slice(2));
      result.push(`<h1 class="font-display text-2xl sm:text-3xl font-medium mt-8 sm:mt-12 mb-6 sm:mb-8 text-foreground">${DOMPurify.sanitize(text)}</h1>`);
      continue;
    }

    // Handle blockquotes
    if (section.startsWith('> ')) {
      const text = parseInlineFormatting(section.slice(2));
      result.push(`<blockquote class="border-l-4 border-primary pl-4 sm:pl-6 my-6 sm:my-8 italic text-sm sm:text-base font-jakarta" style="color: #606060">${DOMPurify.sanitize(text)}</blockquote>`);
      continue;
    }

    // Handle images
    if (section.match(/!\[.*?\]\(.*?\)/)) {
      const match = section.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        result.push(`<img src="${DOMPurify.sanitize(match[2])}" alt="${DOMPurify.sanitize(match[1])}" class="w-full rounded-lg my-6 sm:my-8" />`);
        continue;
      }
    }

    // Handle unordered lists
    if (section.includes('\n- ') || section.startsWith('- ')) {
      const items = section.split('\n').filter(line => line.trim().startsWith('- '));
      const listItems = items.map(item => {
        const itemText = item.replace(/^- /, '');
        return `<li class="mb-2">${DOMPurify.sanitize(parseInlineFormatting(itemText))}</li>`;
      }).join('');
      result.push(`<ul class="list-disc list-inside my-4 sm:my-6 space-y-2 text-sm sm:text-base font-jakarta" style="color: #606060">${listItems}</ul>`);
      continue;
    }

    // Handle ordered lists
    if (section.match(/^\d+\./)) {
      const lines = section.split('\n');
      const listItems = lines
        .filter(line => line.match(/^\d+\./))
        .map(line => {
          const itemText = line.replace(/^\d+\.\s*/, '');
          return `<li class="mb-2">${DOMPurify.sanitize(parseInlineFormatting(itemText))}</li>`;
        })
        .join('');
      result.push(`<ol class="list-decimal list-inside my-4 sm:my-6 space-y-2 text-sm sm:text-base font-jakarta" style="color: #606060">${listItems}</ol>`);
      continue;
    }

    // Regular paragraphs
    const formattedText = parseInlineFormatting(section);
    result.push(`<p class="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-jakarta" style="color: #606060">${DOMPurify.sanitize(formattedText)}</p>`);
  }

  return result.join('');
};

// Post-process HTML to replace special components
export const postProcessContent = (html: string): string => {
  // Replace code blocks
  html = html.replace(/<div data-code-block="([^"]*)">(.*?)<\/div>/gs, (match, language, code) => {
    return `<div class="relative my-6 rounded-lg overflow-hidden">
      <pre class="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm">
        <code class="language-${language}">${code}</code>
      </pre>
    </div>`;
  });

  // Replace callouts
  html = html.replace(/<div data-callout="([^"]*)">(.*?)<\/div>/gs, (match, type, content) => {
    const calloutTypes: Record<string, { class: string; icon: string }> = {
      info: { class: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100", icon: "ℹ️" },
      warning: { class: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100", icon: "⚠️" },
      success: { class: "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100", icon: "✅" },
      error: { class: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100", icon: "❌" },
      tip: { class: "border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100", icon: "💡" },
    };

    const calloutConfig = calloutTypes[type] || calloutTypes.info;

    return `<div class="flex gap-3 rounded-lg border p-4 my-6 ${calloutConfig.class}">
      <span class="text-lg flex-shrink-0 mt-0.5">${calloutConfig.icon}</span>
      <div class="flex-1 text-sm leading-relaxed">${content}</div>
    </div>`;
  });

  return html;
};