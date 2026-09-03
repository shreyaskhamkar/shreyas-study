import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add-on Courses","description":"","frontmatter":{},"headers":[],"relativePath":"notes/add-on-courses/index.md","filePath":"notes/add-on-courses/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/add-on-courses/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="add-on-courses" tabindex="-1">Add-on Courses <a class="header-anchor" href="#add-on-courses" aria-label="Permalink to &quot;Add-on Courses&quot;">​</a></h1><ul><li><a href="./human-rights/README">Human Rights</a></li><li><a href="./introduction-to-constitution/README">Introduction to Constitution</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/add-on-courses/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
