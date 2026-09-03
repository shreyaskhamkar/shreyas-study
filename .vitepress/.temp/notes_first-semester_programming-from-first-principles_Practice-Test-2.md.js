import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Programming from First Principles - Practice Test 2","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/programming-from-first-principles/Practice-Test-2.md","filePath":"notes/first-semester/programming-from-first-principles/Practice-Test-2.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/programming-from-first-principles/Practice-Test-2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="programming-from-first-principles-practice-test-2" tabindex="-1">Programming from First Principles - Practice Test 2 <a class="header-anchor" href="#programming-from-first-principles-practice-test-2" aria-label="Permalink to &quot;Programming from First Principles - Practice Test 2&quot;">​</a></h1><p>This test covers Modules 8-14.</p><h2 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h2><ol><li>What is type inference?</li><li>Why are user-defined classes useful?</li><li>What is the difference between a class and an object?</li><li>Define recursion and give its two essential parts.</li><li>What is operational semantics?</li><li>What is a protocol in Python-style design?</li><li>Explain duck typing.</li><li>What is polymorphism?</li><li>Why should a recursive function have a reachable base case?</li><li>Explain how two different classes can support the same protocol.</li></ol><h2 id="answer-key" tabindex="-1">Answer Key <a class="header-anchor" href="#answer-key" aria-label="Permalink to &quot;Answer Key&quot;">​</a></h2><ol><li>The process of deducing a likely type from how a value or expression is used.</li><li>They model domain concepts and combine related data with behavior.</li><li>A class is a blueprint; an object is an instance created from that class.</li><li>A function solving a problem by calling itself; it needs a base case and a recursive case.</li><li>A description of how program expressions and statements execute or change state.</li><li>A shared set of operations or behaviors that an object promises to support.</li><li>Code uses an object&#39;s supported operations rather than requiring a specific class.</li><li>One interface or operation working with values of different concrete types.</li><li>Without it, calls may continue until a recursion error or resource exhaustion occurs.</li><li>Each class implements the required methods, so the same client code can use either object.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/programming-from-first-principles/Practice-Test-2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeTest2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PracticeTest2 as default
};
