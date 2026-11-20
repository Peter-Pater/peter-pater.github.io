# Website Redesign Plan: Editorial Monograph

> **Status:** Paused for copy & content updates before layout implementation.  
> **Selected Direction:** **Option 1 — Editorial Monograph (Swiss Academic Minimalism)**  
> **Reference Mockup:** [editorial-monograph-mockup.html](editorial-monograph-mockup.html)

---

## Why Editorial Monograph Was Selected
- Focused single-column centered reading flow (`~860px` max width) without the cramped left sidebar.
- Editorial serif headings (**Newsreader**) paired with clean sans body (**Inter**) and monospace metadata (**JetBrains Mono**) for venue/year tags.
- Warm paper light palette (`#faf9f6` / `#ffffff`) paired with the site's existing **Soft Slate** dark palette (`#14181f` / `#1b2029`) and 2-state Sun/Moon toggle.
- Highlights the 3 thesis pillars (*Realism · Interactivity · Collaborative Awareness*), a compact Latest News feed on the homepage, and uniform publication entries with venue pills, links, and inline BibTeX toggle.

---

## Pre-Implementation Checklist (Copy & Content Updates)
Before switching the Jekyll layouts/styles to the new design, update wording and descriptions in:
- [ ] Bio & research narrative (`_pages/about.md`)
- [ ] Homepage thesis tagline & 3-pillar blurbs (to be finalized for the new hero)
- [ ] News entries (`_pages/news.md`) — fix any typos/duplicates (e.g., duplicated `"Together from Afar:"` in Oct 2025 talks, `/_publications/multisphere` link typo)
- [ ] Publication excerpts, citations, and optional new thumbnails (`_publications/`)
- [ ] Other projects descriptions (`_other/`)

---

## Planned Jekyll Migration (When Ready to Resume)
1. **Layouts & Includes**: Update `_layouts/default.html`, `_layouts/single.html`, `_layouts/archive.html`, and `_includes/masthead.html` to use the centered `860px` container and top-level navigation (preserving `#theme-toggle`).
2. **Styling**: Refactor `_sass/` partials to implement the Editorial Monograph tokens (`--bg`, `--surface`, `--text`, `--muted`, `--border`, `--accent`) for both light and Soft Slate dark themes.
3. **Homepage**: Replace `_pages/about.md`'s inline `<style>` block and sidebar-dependent flow with the split hero, 3-pillar strip, top-4 Latest News feed, and Selected Publications with inline BibTeX toggles.
4. **Compatibility**: Keep all existing permalinks (`/publications/...`, `/news/`, `/teaching/`, `/other/`), `mathjax: true` support, and `bundle exec jekyll build` compatibility with GitHub Pages.
