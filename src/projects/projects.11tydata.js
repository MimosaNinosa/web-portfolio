// Applies to every project in this folder.
export default {
  layout: "layouts/project.njk",
  permalink: (data) => `/projects/${data.page.fileSlug}/`,
};
