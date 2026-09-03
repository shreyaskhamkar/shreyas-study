import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Computational Mathematics - Practice Test 2","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/computational-mathematics/Practice-Test-2.md","filePath":"notes/first-semester/computational-mathematics/Practice-Test-2.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/computational-mathematics/Practice-Test-2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="computational-mathematics-practice-test-2" tabindex="-1">Computational Mathematics - Practice Test 2 <a class="header-anchor" href="#computational-mathematics-practice-test-2" aria-label="Permalink to &quot;Computational Mathematics - Practice Test 2&quot;">​</a></h1><p>This test covers Modules 3-4.</p><h2 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h2><ol><li>State the Handshaking Lemma.</li><li>Distinguish a walk, trail, and path.</li><li>What condition gives an Eulerian circuit?</li><li>State three properties of a tree.</li><li>How does Kruskal&#39;s algorithm choose edges?</li><li>How does Prim&#39;s algorithm choose edges?</li><li>When is matrix multiplication defined?</li><li>Is matrix multiplication commutative? Explain.</li><li>State the transpose product rule.</li><li>Find the determinant of <code>[[2, 1], [3, 4]]</code>.</li></ol><h2 id="answer-key" tabindex="-1">Answer Key <a class="header-anchor" href="#answer-key" aria-label="Permalink to &quot;Answer Key&quot;">​</a></h2><ol><li>The sum of all vertex degrees equals <code>2|E|</code>.</li><li>A walk may repeat; a trail does not repeat edges; a path does not repeat vertices.</li><li>The graph must be connected and every vertex must have even degree.</li><li>Connected, acyclic, unique path between every two vertices, and <code>n - 1</code> edges for <code>n</code> vertices.</li><li>Sort edges by increasing weight and accept an edge if it does not create a cycle.</li><li>Start at a vertex and repeatedly add the cheapest edge connecting the current tree to a new vertex.</li><li>When the number of columns of the first matrix equals the number of rows of the second.</li><li>No. In general <code>AB</code> is not equal to <code>BA</code>.</li><li><code>(AB)^T = B^T A^T</code>.</li><li><code>2*4 - 1*3 = 5</code>.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/computational-mathematics/Practice-Test-2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeTest2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PracticeTest2 as default
};
