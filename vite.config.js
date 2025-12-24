import { defineConfig } from "vite";

// Get the repo name from environment variable or use default
// For GitHub Pages: if repo is "repo-name", base should be "/repo-name/"
// For user/organization pages, base should be "/"
const repoName = process.env.GITHUB_REPO_NAME || "";
const base = repoName ? `/${repoName}/` : "/";

export default defineConfig({
  base: base,
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
