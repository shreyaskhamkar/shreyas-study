import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Summary","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/programming-from-first-principles/Summary.md","filePath":"notes/first-semester/programming-from-first-principles/Summary.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/programming-from-first-principles/Summary.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h1><p>This subject explains core programming ideas through Python examples and exam-style revision notes.</p><h2 id="main-themes" tabindex="-1">Main themes <a class="header-anchor" href="#main-themes" aria-label="Permalink to &quot;Main themes&quot;">​</a></h2><ul><li>Data types and collections</li><li>Higher-order functions</li><li>Core constructs such as conditionals, loops, and comprehensions</li><li>Iteration and lazy evaluation through generators</li><li>Anonymous functions and lambda calculus</li><li>First-class functions and closures</li><li>Type discipline and type hints</li><li>Type inference in tools</li><li>User-defined types</li><li>Concrete types</li><li>Recursion</li><li>Operational semantics</li><li>Shared behavior through protocols and duck typing</li><li>Polymorphism and generic code</li></ul><h2 id="what-to-remember" tabindex="-1">What to remember <a class="header-anchor" href="#what-to-remember" aria-label="Permalink to &quot;What to remember&quot;">​</a></h2><ul><li>Python is flexible, but good structure still matters.</li><li>Functions can be values.</li><li>Type hints improve clarity even in a dynamically typed language.</li><li>Custom types make programs easier to read and maintain.</li><li>Recursion, generators, and polymorphism are reusable patterns, not isolated tricks.</li></ul><h2 id="fast-exam-line" tabindex="-1">Fast exam line <a class="header-anchor" href="#fast-exam-line" aria-label="Permalink to &quot;Fast exam line&quot;">​</a></h2><p>If you need one sentence for the whole subject, say:</p><blockquote><p>Programming from First Principles teaches how Python programs are built from values, functions, types, control flow, recursion, and reusable abstractions.</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/programming-from-first-principles/Summary.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Summary = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Summary as default
};
