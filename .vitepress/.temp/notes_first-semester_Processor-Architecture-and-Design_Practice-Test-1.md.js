import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Processor Architecture and Design - Practice Test 1","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/Processor-Architecture-and-Design/Practice-Test-1.md","filePath":"notes/first-semester/Processor-Architecture-and-Design/Practice-Test-1.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/Processor-Architecture-and-Design/Practice-Test-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="processor-architecture-and-design-practice-test-1" tabindex="-1">Processor Architecture and Design - Practice Test 1 <a class="header-anchor" href="#processor-architecture-and-design-practice-test-1" aria-label="Permalink to &quot;Processor Architecture and Design - Practice Test 1&quot;">​</a></h1><h2 id="section-a-short-objective-questions" tabindex="-1">Section A - Short Objective Questions <a class="header-anchor" href="#section-a-short-objective-questions" aria-label="Permalink to &quot;Section A - Short Objective Questions&quot;">​</a></h2><ol><li>Define stored-program concept.</li><li>What is the role of the control unit?</li><li>Name the three types of buses in a computer system.</li><li>What is a cache hit?</li><li>Expand ISA.</li><li>What is a hazard in pipelining?</li></ol><h2 id="section-b-short-problems" tabindex="-1">Section B - Short Problems <a class="header-anchor" href="#section-b-short-problems" aria-label="Permalink to &quot;Section B - Short Problems&quot;">​</a></h2><ol start="7"><li>State the AMAT formula.</li><li>Differentiate SRAM and DRAM in one line each.</li><li>List any four components of the CPU or system unit.</li></ol><h2 id="section-c-long-answer" tabindex="-1">Section C - Long Answer <a class="header-anchor" href="#section-c-long-answer" aria-label="Permalink to &quot;Section C - Long Answer&quot;">​</a></h2><ol start="10"><li>Explain the instruction cycle and the role of the PC.</li><li>Compare RISC and CISC.</li></ol><h2 id="answer-key" tabindex="-1">Answer Key <a class="header-anchor" href="#answer-key" aria-label="Permalink to &quot;Answer Key&quot;">​</a></h2><ol><li>Instructions and data are stored in the same memory.</li><li>It generates control signals and sequences execution.</li><li>Data bus, address bus, control bus.</li><li>Data is found in cache.</li><li>Instruction Set Architecture.</li><li>A condition that prevents ideal pipeline flow, such as structural, data, or control conflict.</li><li><code>AMAT = Hit time + Miss rate x Miss penalty</code></li><li>SRAM is faster and no refresh; DRAM is slower and needs refresh.</li><li>Any four: CPU, memory, I/O devices, buses, chipset, registers, ALU, control unit.</li><li>Fetch, decode, execute, write-back; PC points to the next instruction and updates as instructions complete.</li><li>RISC uses simple, fixed instructions and load-store design; CISC uses more complex instructions and richer addressing modes.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/Processor-Architecture-and-Design/Practice-Test-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeTest1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PracticeTest1 as default
};
