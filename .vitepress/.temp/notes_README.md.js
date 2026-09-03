import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MCA Semester Notes","description":"","frontmatter":{},"headers":[],"relativePath":"notes/README.md","filePath":"notes/README.md","lastUpdated":null}');
const _sfc_main = { name: "notes/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mca-semester-notes" tabindex="-1">MCA Semester Notes <a class="header-anchor" href="#mca-semester-notes" aria-label="Permalink to &quot;MCA Semester Notes&quot;">​</a></h1><p>Only First Semester notes are available at present.</p><ul><li><a href="./first-semester/README">First Semester</a></li></ul><p>Additional semester folders can be added here later using names such as <code>second-semester</code>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
