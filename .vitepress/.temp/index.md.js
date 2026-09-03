import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shreyas Study","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shreyas-study" tabindex="-1">Shreyas Study <a class="header-anchor" href="#shreyas-study" aria-label="Permalink to &quot;Shreyas Study&quot;">​</a></h1><p>An organized, searchable study platform for MCA notes.</p><h2 id="browse-the-notes" tabindex="-1">Browse the notes <a class="header-anchor" href="#browse-the-notes" aria-label="Permalink to &quot;Browse the notes&quot;">​</a></h2><ul><li><a href="./notes/first-semester/">First Semester</a></li><li><a href="./notes/add-on-courses/">Add-on Courses</a></li></ul><p>The original Markdown files remain organized by semester, subject, module, and revision resource so new notes can be added without changing the content model.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
