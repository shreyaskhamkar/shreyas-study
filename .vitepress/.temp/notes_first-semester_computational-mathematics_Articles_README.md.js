import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Articles for Computational Mathematics","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/computational-mathematics/Articles/README.md","filePath":"notes/first-semester/computational-mathematics/Articles/README.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/computational-mathematics/Articles/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="articles-for-computational-mathematics" tabindex="-1">Articles for Computational Mathematics <a class="header-anchor" href="#articles-for-computational-mathematics" aria-label="Permalink to &quot;Articles for Computational Mathematics&quot;">​</a></h1><p>This folder contains deeper, module-wise articles that expand the main notes with extra explanations, examples, and exam pointers.</p><h2 id="index" tabindex="-1">Index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;Index&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Module</th><th>Article</th></tr></thead><tbody><tr><td>1</td><td><a href="./Module-1-Article">Module-1-Article.md</a></td></tr><tr><td>2</td><td><a href="./Module-2-Article">Module-2-Article.md</a></td></tr><tr><td>3</td><td><a href="./Module-3-Article">Module-3-Article.md</a></td></tr><tr><td>4</td><td><a href="./Module-4-Article">Module-4-Article.md</a></td></tr><tr><td>5</td><td><a href="./Module-5-Article">Module-5-Article.md</a></td></tr><tr><td>6</td><td><a href="./Module-6-Article">Module-6-Article.md</a></td></tr></tbody></table><h2 id="how-to-use-these-articles" tabindex="-1">How to use these articles <a class="header-anchor" href="#how-to-use-these-articles" aria-label="Permalink to &quot;How to use these articles&quot;">​</a></h2><ol><li>Read the matching module note first.</li><li>Use the article to see the same idea explained with a worked example.</li><li>Return to the quick revision sheet when you want a compact recap.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/computational-mathematics/Articles/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
