import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Programming from First Principles - Practice Test 1","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/programming-from-first-principles/Practice-Test-1.md","filePath":"notes/first-semester/programming-from-first-principles/Practice-Test-1.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/programming-from-first-principles/Practice-Test-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="programming-from-first-principles-practice-test-1" tabindex="-1">Programming from First Principles - Practice Test 1 <a class="header-anchor" href="#programming-from-first-principles-practice-test-1" aria-label="Permalink to &quot;Programming from First Principles - Practice Test 1&quot;">​</a></h1><p>This test covers Modules 1-7.</p><h2 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h2><ol><li>What is the difference between a list and a tuple?</li><li>What is a higher-order function?</li><li>Write a list comprehension that produces the squares of 1, 2, and 3.</li><li>What is lazy evaluation?</li><li>What is a lambda function?</li><li>What does it mean for a function to be first-class?</li><li>What is a closure?</li><li>Explain dynamic typing and type hints.</li><li>Trace the result of <code>list(map(lambda x: x * 2, [1, 2, 3]))</code>.</li><li>State one advantage and one limitation of generators.</li></ol><h2 id="answer-key" tabindex="-1">Answer Key <a class="header-anchor" href="#answer-key" aria-label="Permalink to &quot;Answer Key&quot;">​</a></h2><ol><li>A list is mutable; a tuple is generally immutable.</li><li>A function that accepts another function or returns a function.</li><li><code>[x * x for x in [1, 2, 3]]</code>.</li><li>Delaying computation until a result is required.</li><li>A small anonymous function written with <code>lambda</code>.</li><li>It can be assigned, passed, returned, and stored like other values.</li><li>An inner function together with retained access to variables from its enclosing scope.</li><li>Dynamic typing checks types during execution; type hints document intended types and assist tools but do not normally enforce them.</li><li><code>[2, 4, 6]</code>.</li><li>Advantage: low memory use. Limitation: values are consumed progressively and may not be reusable without recreating the generator.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/programming-from-first-principles/Practice-Test-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeTest1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PracticeTest1 as default
};
