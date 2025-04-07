'use strict';

async function renderMarkdown() {
  try {
    const response = await fetch('./assets/markdowns/linux_curso.md');
    const markdown = await response.text();
    const html = marked.parse(markdown);
    document.getElementById('markdown-content').innerHTML = html;
  } catch (error) {
    console.error('Erro ao carregar o arquivo Markdown:', error);
    throw error;
  };
};
renderMarkdown();
