import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Computational Mathematics - Practice Test 1","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/computational-mathematics/Practice-Test-1.md","filePath":"notes/first-semester/computational-mathematics/Practice-Test-1.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/computational-mathematics/Practice-Test-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="computational-mathematics-practice-test-1" tabindex="-1">Computational Mathematics - Practice Test 1 <a class="header-anchor" href="#computational-mathematics-practice-test-1" aria-label="Permalink to &quot;Computational Mathematics - Practice Test 1&quot;">​</a></h1><p>This test covers Modules 1-2.</p><h2 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h2><ol><li>Define a proposition.</li><li>When is an implication <code>p -&gt; q</code> false?</li><li>State both quantifier-negation laws.</li><li>What is a tautology?</li><li>What is a well-formed formula?</li><li>Distinguish a free variable from a bound variable.</li><li>What is a formation tree?</li><li>Give two benefits of type checking.</li><li>What is type inference?</li><li>Explain one limitation of computable type checking.</li></ol><h2 id="answer-key" tabindex="-1">Answer Key <a class="header-anchor" href="#answer-key" aria-label="Permalink to &quot;Answer Key&quot;">​</a></h2><ol><li>A statement with a definite truth value, true or false.</li><li>When <code>p</code> is true and <code>q</code> is false.</li><li><code>not forall x P(x)</code> is equivalent to <code>exists x not P(x)</code>; <code>not exists x P(x)</code> is equivalent to <code>forall x not P(x)</code>.</li><li>A formula true under every valuation.</li><li>A formula that follows the grammar rules of the formal language.</li><li>A free variable is outside a quantifier&#39;s scope; a bound variable is within it.</li><li>A tree showing how a formula was constructed from its grammar rules.</li><li>Earlier error detection, clearer documentation, safer refactoring, or compiler optimization.</li><li>Deduction of a likely type from an expression&#39;s context and operations.</li><li>Rich language features can make general type checking or inference undecidable.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/computational-mathematics/Practice-Test-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeTest1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PracticeTest1 as default
};
