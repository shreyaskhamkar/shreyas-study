import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Concept Maps","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/programming-from-first-principles/Concept-Maps.md","filePath":"notes/first-semester/programming-from-first-principles/Concept-Maps.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/programming-from-first-principles/Concept-Maps.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="concept-maps" tabindex="-1">Concept Maps <a class="header-anchor" href="#concept-maps" aria-label="Permalink to &quot;Concept Maps&quot;">​</a></h1><h2 id="core-map" tabindex="-1">Core map <a class="header-anchor" href="#core-map" aria-label="Permalink to &quot;Core map&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Programming from First Principles</span></span>
<span class="line"><span>|-- Data types</span></span>
<span class="line"><span>|   |-- int</span></span>
<span class="line"><span>|   |-- float</span></span>
<span class="line"><span>|   |-- bool</span></span>
<span class="line"><span>|   |-- str</span></span>
<span class="line"><span>|   |-- list</span></span>
<span class="line"><span>|   |-- tuple</span></span>
<span class="line"><span>|   |-- set</span></span>
<span class="line"><span>|   \`-- dict</span></span>
<span class="line"><span>|-- Functions</span></span>
<span class="line"><span>|   |-- higher-order functions</span></span>
<span class="line"><span>|   |-- closures</span></span>
<span class="line"><span>|   \`-- first-class functions</span></span>
<span class="line"><span>|-- Control</span></span>
<span class="line"><span>|   |-- if</span></span>
<span class="line"><span>|   |-- for</span></span>
<span class="line"><span>|   \`-- while</span></span>
<span class="line"><span>|-- Laziness</span></span>
<span class="line"><span>|   \`-- generators</span></span>
<span class="line"><span>|-- Types</span></span>
<span class="line"><span>|   |-- hints</span></span>
<span class="line"><span>|   |-- inference</span></span>
<span class="line"><span>|   |-- user-defined types</span></span>
<span class="line"><span>|   |-- concrete types</span></span>
<span class="line"><span>|   \`-- polymorphism</span></span>
<span class="line"><span>\`-- Shared behavior</span></span>
<span class="line"><span>    |-- duck typing</span></span>
<span class="line"><span>    |-- Protocol</span></span>
<span class="line"><span>    \`-- ABC</span></span></code></pre></div><h2 id="syntax-map" tabindex="-1">Syntax map <a class="header-anchor" href="#syntax-map" aria-label="Permalink to &quot;Syntax map&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def -&gt; function definition</span></span>
<span class="line"><span>lambda -&gt; anonymous function</span></span>
<span class="line"><span>yield -&gt; generator value</span></span>
<span class="line"><span>class -&gt; custom type</span></span>
<span class="line"><span>@dataclass -&gt; data-focused class</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/programming-from-first-principles/Concept-Maps.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConceptMaps = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ConceptMaps as default
};
