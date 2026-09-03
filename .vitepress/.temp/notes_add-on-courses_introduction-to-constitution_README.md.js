import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction to Constitution — Complete Study Notes","description":"","frontmatter":{},"headers":[],"relativePath":"notes/add-on-courses/introduction-to-constitution/README.md","filePath":"notes/add-on-courses/introduction-to-constitution/README.md","lastUpdated":null}');
const _sfc_main = { name: "notes/add-on-courses/introduction-to-constitution/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction-to-constitution-—-complete-study-notes" tabindex="-1">Introduction to Constitution — Complete Study Notes <a class="header-anchor" href="#introduction-to-constitution-—-complete-study-notes" aria-label="Permalink to &quot;Introduction to Constitution — Complete Study Notes&quot;">​</a></h1><p>These notes cover the four units of the Indian Constitution required for the MCA add-on course: the Preamble, Fundamental Rights, Directive Principles of State Policy, and Fundamental Duties.</p><h2 id="module-index" tabindex="-1">Module Index <a class="header-anchor" href="#module-index" aria-label="Permalink to &quot;Module Index&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Module</th><th>Topic</th><th>File</th></tr></thead><tbody><tr><td>1</td><td>Preamble</td><td><a href="./Module-1">Module 1</a></td></tr><tr><td>2</td><td>Fundamental Rights (Articles 12–35)</td><td><a href="./Module-2">Module 2</a></td></tr><tr><td>3</td><td>Directive Principles of State Policy (Articles 36–51)</td><td><a href="./Module-3">Module 3</a></td></tr><tr><td>4</td><td>Fundamental Duties (Article 51A)</td><td><a href="./Module-4">Module 4</a></td></tr></tbody></table><h2 id="revision-tools" tabindex="-1">Revision Tools <a class="header-anchor" href="#revision-tools" aria-label="Permalink to &quot;Revision Tools&quot;">​</a></h2><ul><li><a href="./Quick-Revision">Quick Revision</a></li><li><a href="./Cheat-Sheet">Cheat Sheet</a></li><li><a href="./MCQ">MCQ Bank</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/add-on-courses/introduction-to-constitution/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
