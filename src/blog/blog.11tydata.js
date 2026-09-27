// Applies to every post in this folder. Posts are plain Markdown
// (no Nunjucks), so code samples containing {{ }} are left alone.
export default {
  layout: "layouts/post.njk",
  templateEngineOverride: "md",
  permalink: (data) => `/blog/${data.page.fileSlug}/`,
};
