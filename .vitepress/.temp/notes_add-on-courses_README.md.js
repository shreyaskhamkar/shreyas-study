import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MCA Add-On Courses","description":"","frontmatter":{},"headers":[],"relativePath":"notes/add-on-courses/README.md","filePath":"notes/add-on-courses/README.md","lastUpdated":null}');
const _sfc_main = { name: "notes/add-on-courses/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mca-add-on-courses" tabindex="-1">MCA Add-On Courses <a class="header-anchor" href="#mca-add-on-courses" aria-label="Permalink to &quot;MCA Add-On Courses&quot;">​</a></h1><p>Exam-oriented notes for the three MCA add-on courses.</p><table tabindex="0"><thead><tr><th>Subject</th><th>Notes</th></tr></thead><tbody><tr><td>Cyber Security</td><td>See <code>../first-semester/cyber-security/</code></td></tr><tr><td>Introduction to Constitution</td><td><a href="./introduction-to-constitution/README">Open subject</a></td></tr><tr><td>Human Rights</td><td><a href="./human-rights/README">Open subject</a></td></tr></tbody></table><p>Each subject contains module notes, an MCQ question bank, a cheat sheet, and a quick revision guide.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/add-on-courses/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
