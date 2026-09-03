import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MCA First Semester","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/index.md","filePath":"notes/first-semester/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mca-first-semester" tabindex="-1">MCA First Semester <a class="header-anchor" href="#mca-first-semester" aria-label="Permalink to &quot;MCA First Semester&quot;">​</a></h1><h2 id="subjects" tabindex="-1">Subjects <a class="header-anchor" href="#subjects" aria-label="Permalink to &quot;Subjects&quot;">​</a></h2><ul><li><a href="./artificial-intelligence/README">Artificial Intelligence</a></li><li><a href="./computational-mathematics/README">Computational Mathematics</a></li><li><a href="./cyber-security/README">Cyber Security</a></li><li><a href="./persistent-data-management/README">Persistent Data Management</a></li><li><a href="./Processor-Architecture-and-Design/README">Processor Architecture and Design</a></li><li><a href="./programming-from-first-principles/README">Programming from First Principles</a></li><li><a href="./research-methodology/README">Research Methodology</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
