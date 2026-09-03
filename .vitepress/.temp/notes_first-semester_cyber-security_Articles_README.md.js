import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Articles for Cyber Security","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/cyber-security/Articles/README.md","filePath":"notes/first-semester/cyber-security/Articles/README.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/cyber-security/Articles/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="articles-for-cyber-security" tabindex="-1">Articles for Cyber Security <a class="header-anchor" href="#articles-for-cyber-security" aria-label="Permalink to &quot;Articles for Cyber Security&quot;">​</a></h1><p>This folder contains deeper, module-wise articles that expand the main notes with extra explanations, scenarios, and exam pointers.</p><h2 id="index" tabindex="-1">Index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;Index&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Module</th><th>Article</th></tr></thead><tbody><tr><td>1</td><td><a href="./Module-1-Article">Module-1-Article.md</a></td></tr><tr><td>2</td><td><a href="./Module-2-Article">Module-2-Article.md</a></td></tr><tr><td>3</td><td><a href="./Module-3-Article">Module-3-Article.md</a></td></tr><tr><td>4</td><td><a href="./Module-4-Article">Module-4-Article.md</a></td></tr></tbody></table><h2 id="how-to-use-these-articles" tabindex="-1">How to use these articles <a class="header-anchor" href="#how-to-use-these-articles" aria-label="Permalink to &quot;How to use these articles&quot;">​</a></h2><ul><li>Read the article after finishing the matching module note.</li><li>Use the worked examples to test whether you really understand the concept.</li><li>Revisit the exam-angle section before writing long answers.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/cyber-security/Articles/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
