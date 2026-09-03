import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Processor Architecture and Design - Practice Test 3","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/Processor-Architecture-and-Design/Practice-Test-3.md","filePath":"notes/first-semester/Processor-Architecture-and-Design/Practice-Test-3.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/Processor-Architecture-and-Design/Practice-Test-3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="processor-architecture-and-design-practice-test-3" tabindex="-1">Processor Architecture and Design - Practice Test 3 <a class="header-anchor" href="#processor-architecture-and-design-practice-test-3" aria-label="Permalink to &quot;Processor Architecture and Design - Practice Test 3&quot;">​</a></h1><p>This test covers Modules 7-9.</p><h2 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h2><ol><li>What abstraction makes one CPU appear continuous to several processes?</li><li>Distinguish a Type 1 hypervisor from a Type 2 hypervisor.</li><li>What is the purpose of a page table?</li><li>What does the TLB cache?</li><li>Explain the steps taken by the OS after a page fault.</li><li>A 32-bit address uses 4 KiB pages. How many bits are used for the page offset?</li><li>Distinguish an exception, an interrupt, and a trap.</li><li>Why does the processor switch to kernel mode for a system call?</li><li>List the main steps of an interrupt service routine.</li><li>Explain two benefits and one cost of virtualization.</li></ol><h2 id="answer-key" tabindex="-1">Answer Key <a class="header-anchor" href="#answer-key" aria-label="Permalink to &quot;Answer Key&quot;">​</a></h2><ol><li>Time-sharing or multiprogramming.</li><li>Type 1 runs directly on hardware; Type 2 runs as an application on a host OS.</li><li>It maps virtual page numbers to physical frame numbers and stores protection/status bits.</li><li>Recent virtual-to-physical address translations.</li><li>Save context, identify the missing page, choose a frame, write back a dirty victim if needed, load the page, update the page table/TLB, and restart the instruction.</li><li>12 bits, because 4 KiB = 2^12 bytes.</li><li>An exception is synchronous and instruction-related; an interrupt is asynchronous and external; a trap is a deliberate synchronous software event.</li><li>Kernel mode is required for protected operations such as device access and memory management.</li><li>Save state, identify and acknowledge the source, dispatch to the handler, perform short service work, clear the source, restore state, and return.</li><li>Benefits include isolation, sharing, portability, and efficient utilization. A cost is translation, scheduling, or I/O overhead.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/Processor-Architecture-and-Design/Practice-Test-3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PracticeTest3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PracticeTest3 as default
};
