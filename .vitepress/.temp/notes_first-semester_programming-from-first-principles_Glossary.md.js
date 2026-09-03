import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Glossary","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/programming-from-first-principles/Glossary.md","filePath":"notes/first-semester/programming-from-first-principles/Glossary.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/programming-from-first-principles/Glossary.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="glossary" tabindex="-1">Glossary <a class="header-anchor" href="#glossary" aria-label="Permalink to &quot;Glossary&quot;">​</a></h1><ul><li><strong>abc.ABC</strong>: A base class for defining abstract behavior.</li><li><strong>bool</strong>: The Python type for <code>True</code> or <code>False</code>.</li><li><strong>closure</strong>: A function that remembers values from the surrounding scope.</li><li><strong>comprehension</strong>: A compact way to build a list, set, or dict.</li><li><strong>concrete type</strong>: A specific known type such as <code>int</code> or <code>Student</code>.</li><li><strong>dataclass</strong>: A class decorator for simple data-holding classes.</li><li><strong>duck typing</strong>: The idea that an object is usable if it behaves correctly.</li><li><strong>generator</strong>: A lazy iterable that produces values on demand.</li><li><strong>higher-order function</strong>: A function that takes or returns a function.</li><li><strong>inference</strong>: The process of working out a type from code and usage.</li><li><strong>iterator</strong>: An object that produces values one at a time.</li><li><strong>lambda</strong>: A small anonymous function.</li><li><strong>polymorphism</strong>: One piece of code working with many types.</li><li><strong>protocol</strong>: A description of shared behavior, often using <code>typing.Protocol</code>.</li><li><strong>recursion</strong>: A function solving a problem by calling itself.</li><li><strong>type hint</strong>: Optional syntax that describes expected types.</li><li><strong>type safety</strong>: Avoiding invalid operations on the wrong kind of value.</li><li><strong>user-defined type</strong>: A type created by the programmer with <code>class</code>, <code>Enum</code>, or <code>dataclass</code>.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/programming-from-first-principles/Glossary.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Glossary = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Glossary as default
};
