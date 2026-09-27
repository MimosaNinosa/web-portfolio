import { feedPlugin } from "@11ty/eleventy-plugin-rss";

const SITE_URL = "https://portfolio.chunyong.cc";

// Content-Security-Policy, delivered as a <meta> tag on every page (see
// src/_includes/layouts/base.njk). GitHub Pages can't set response headers;
// if Cloudflare adds a CSP header too, keep the two in sync.
// Note: frame-ancestors is ignored in <meta>, so clickjacking protection
// has to come from a real header (X-Frame-Options / frame-ancestors).
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' https://assets.chunyong.cc",
  "media-src 'self' https://assets.chunyong.cc",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

const escapeHtml = (str) =>
  String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default function (eleventyConfig) {
  // Escape everything by default; mark trusted HTML with `| safe`.
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });

  eleventyConfig.addGlobalData("siteUrl", SITE_URL);
  eleventyConfig.addGlobalData("csp", CSP);
  eleventyConfig.addGlobalData("buildYear", String(new Date().getFullYear()));

  // Static files copied as-is
  for (const path of [
    "src/css",
    "src/js",
    "src/assets",
    "src/favicon.svg",
    "src/favicon.ico",
    "src/apple-touch-icon.png",
    "src/CNAME",
  ]) {
    eleventyConfig.addPassthroughCopy(path);
  }

  /* ---------- Collections ---------- */

  // Newest first (ties broken by title); numbered 01, 02… in that order.
  eleventyConfig.addCollection("projects", (api) =>
    api
      .getFilteredByGlob("src/projects/*.md")
      .sort(
        (a, b) =>
          String(b.data.sortDate).localeCompare(String(a.data.sortDate)) ||
          a.data.title.localeCompare(b.data.title),
      ),
  );

  // Oldest first (what the RSS plugin expects); templates reverse it.
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/*.md").sort((a, b) => a.date - b.date),
  );

  /* ---------- Filters ---------- */

  // Escapes text, then turns *phrase* into <em>phrase</em>.
  eleventyConfig.addFilter("emphasis", (str) =>
    escapeHtml(str).replace(/\*([^*]+)\*/g, "<em>$1</em>"),
  );

  // Items whose front matter has a truthy `key`, e.g. featured: true
  eleventyConfig.addFilter("withData", (collection, key) =>
    collection.filter((item) => item.data[key]),
  );

  // Position of a page in a collection, as "01", "02", …
  eleventyConfig.addFilter("itemNo", (collection, url) => {
    const index = collection.findIndex((item) => item.url === url);
    return index < 0 ? "" : String(index + 1).padStart(2, "0");
  });

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }),
  );

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  eleventyConfig.addFilter("isVideo", (src) => /\.(mp4|webm|ogv|ogg|mov)$/i.test(String(src).split("?")[0]));

  /* ---------- Markdown ---------- */

  // Fenced code blocks render as a labelled panel with a copy button
  // (wired up in src/js/main.js).
  eleventyConfig.amendLibrary("md", (md) => {
    md.renderer.rules.fence = (tokens, idx) => {
      const token = tokens[idx];
      const lang = token.info.trim().split(/\s+/)[0] || "code";
      return `<div class="code-panel">
  <div class="code-panel-head"><span class="code-lang">${escapeHtml(lang)}</span><button class="copy-btn" type="button">Copy</button></div>
  <pre class="code-block"><code>${escapeHtml(token.content)}</code></pre>
</div>\n`;
    };
  });

  /* ---------- Feed ---------- */

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "en",
      title: "Lee Chun Yong — Writing",
      subtitle: "Notes on security, systems and self-hosting.",
      base: `${SITE_URL}/`,
      author: { name: "Lee Chun Yong" },
    },
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
