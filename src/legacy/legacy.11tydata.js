// Old URLs from the pre-Eleventy site (projects.html, project.html?slug=…,
// blog.html, post.html?id=…). Kept so links already shared keep working.
export default {
  layout: "layouts/redirect.njk",
  eleventyExcludeFromCollections: true,
  eleventyComputed: {
    // project.html / post.html map their old query strings to new URLs.
    redirects: (data) => {
      if (data.kind === "project") {
        const map = {};
        for (const p of data.collections.projects || []) map[p.page.fileSlug] = p.url;
        return map;
      }
      if (data.kind === "post") {
        const map = {};
        for (const p of data.collections.posts || []) {
          map[p.page.fileSlug] = p.url;
          if (p.data.legacyId) map[p.data.legacyId] = p.url;
        }
        return map;
      }
      return {};
    },
  },
};
