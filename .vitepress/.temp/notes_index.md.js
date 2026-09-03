import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Study Notes","description":"","frontmatter":{},"headers":[],"relativePath":"notes/index.md","filePath":"notes/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="study-notes" tabindex="-1">Study Notes <a class="header-anchor" href="#study-notes" aria-label="Permalink to &quot;Study Notes&quot;">​</a></h1><ul><li><a href="./first-semester/">First Semester</a></li><li><a href="./add-on-courses/">Add-on Courses</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
