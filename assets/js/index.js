const markdownContent = document.getElementById('markdown-content');

async function renderMarkdown() {
  try {
    const response = await fetch('./markdowns/linux_curso.md');
    const markdown = await response.text();
    const html = marked(markdown);
    markdownContent.innerHTML = html;
  } catch (error) {
    console.error('Erro ao carregar o arquivo Markdown:', error);
  }
}

renderMarkdown();
