import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Computational Mathematics — Cheat Sheet","description":"","frontmatter":{},"headers":[],"relativePath":"notes/first-semester/computational-mathematics/Cheat-Sheet.md","filePath":"notes/first-semester/computational-mathematics/Cheat-Sheet.md","lastUpdated":null}');
const _sfc_main = { name: "notes/first-semester/computational-mathematics/Cheat-Sheet.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="computational-mathematics-—-cheat-sheet" tabindex="-1">Computational Mathematics — Cheat Sheet <a class="header-anchor" href="#computational-mathematics-—-cheat-sheet" aria-label="Permalink to &quot;Computational Mathematics — Cheat Sheet&quot;">​</a></h1><h2 id="logic" tabindex="-1">Logic <a class="header-anchor" href="#logic" aria-label="Permalink to &quot;Logic&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Connectives:  ¬p (not), p∧q (and), p∨q (or), p→q (if p then q), p↔q (iff)</span></span>
<span class="line"><span>Implication:  p→q ≡ ¬p ∨ q</span></span>
<span class="line"><span>De Morgan:    ¬(p∧q) ≡ ¬p ∨ ¬q ;  ¬(p∨q) ≡ ¬p ∧ ¬q</span></span>
<span class="line"><span>Quantifiers:  ¬∀xP(x) ≡ ∃x¬P(x) ;  ¬∃xP(x) ≡ ∀x¬P(x)</span></span>
<span class="line"><span>Tautology=always T; Contradiction=always F; Contingency=sometimes.</span></span></code></pre></div><h3 id="natural-deduction-rules" tabindex="-1">Natural deduction rules <a class="header-anchor" href="#natural-deduction-rules" aria-label="Permalink to &quot;Natural deduction rules&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>∧I  φ,ψ ⇒ φ∧ψ           ∧E  φ∧ψ ⇒ φ (and ψ)</span></span>
<span class="line"><span>∨I  φ ⇒ φ∨ψ             ∨E  φ∨ψ, φ⇒χ, ψ⇒χ ⇒ χ</span></span>
<span class="line"><span>→I  [φ]…ψ ⇒ φ→ψ         →E  φ→ψ, φ ⇒ ψ   (modus ponens)</span></span>
<span class="line"><span>¬I  [φ]…⊥ ⇒ ¬φ          ¬E  φ,¬φ ⇒ ⊥</span></span>
<span class="line"><span>∀I  φ(a) [a fresh] ⇒ ∀xφ(x)   ∀E  ∀xφ(x) ⇒ φ(t)</span></span>
<span class="line"><span>∃I  φ(t) ⇒ ∃xφ(x)       ∃E  ∃xφ(x),[φ(a)]⇒χ ⇒ χ   (a fresh)</span></span>
<span class="line"><span>RAA: [¬φ]…⊥ ⇒ φ</span></span></code></pre></div><h2 id="matrices" tabindex="-1">Matrices <a class="header-anchor" href="#matrices" aria-label="Permalink to &quot;Matrices&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A = [a_ij]_{m×n}   a_ij = row i, col j</span></span>
<span class="line"><span>(Aᵀ)_ij = a_ji     (AB)ᵀ = BᵀAᵀ</span></span>
<span class="line"><span>c_ij = Σ_k a_ik·b_kj  (need cols(A)=rows(B))</span></span>
<span class="line"><span>2×2 det = ad−bc    det(AB)=det(A)det(B) ; det(Aᵀ)=det(A)</span></span>
<span class="line"><span>A⁻¹ exists iff det(A)≠0</span></span>
<span class="line"><span>2×2⁻¹ = 1/det·[[d,−b],[−c,a]]</span></span>
<span class="line"><span>Gauss-Jordan:  [A | I] → [I | A⁻¹]</span></span></code></pre></div><h2 id="linear-algebra" tabindex="-1">Linear algebra <a class="header-anchor" href="#linear-algebra" aria-label="Permalink to &quot;Linear algebra&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vector space axioms: closed under + and scalar × ; 0 ∈ V</span></span>
<span class="line"><span>Subspace W: 0∈W ; u,v∈W ⇒ u+v∈W ; c·u∈W</span></span>
<span class="line"><span>Span(S)=all combos ; independent: Σc_i v_i=0 ⇒ all c_i=0</span></span>
<span class="line"><span>Basis = indep + spanning ; dim(V)=#basis vectors</span></span>
<span class="line"><span>Linear T: T(u+v)=T(u)+T(v), T(cu)=cT(u)</span></span>
<span class="line"><span>  kernel={v:T(v)=0} ; image=range</span></span>
<span class="line"><span>Row rank = Col rank = rank(A)</span></span></code></pre></div><h3 id="orthogonality" tabindex="-1">Orthogonality <a class="header-anchor" href="#orthogonality" aria-label="Permalink to &quot;Orthogonality&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>u·v = 0  ⇒ u ⟂ v</span></span>
<span class="line"><span>proj_a(b) = ((a·b)/(a·a))·a</span></span>
<span class="line"><span>S⊥ = {v : v·u=0 ∀u∈S} ;  (S⊥)⊥ = S</span></span>
<span class="line"><span>Orthonormal basis: u_i·u_j = δ_ij</span></span>
<span class="line"><span>Gram-Schmidt → orthonormal basis</span></span></code></pre></div><h2 id="eigenvalues" tabindex="-1">Eigenvalues <a class="header-anchor" href="#eigenvalues" aria-label="Permalink to &quot;Eigenvalues&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>A v = λ v</span></span>
<span class="line"><span>Characteristic eq:  det(A − λI) = 0</span></span>
<span class="line"><span>det(A) = Π λ_i       trace(A) = Σ λ_i</span></span>
<span class="line"><span>Diagonalisable: A = P D P⁻¹  (P=[v_i], D=diag(λ_i))</span></span>
<span class="line"><span>Powers: Aᵏ = P Dᵏ P⁻¹</span></span>
<span class="line"><span>Similar B=P⁻¹AP ⇒ same eigenvalues, trace, det</span></span></code></pre></div><h2 id="graphs" tabindex="-1">Graphs <a class="header-anchor" href="#graphs" aria-label="Permalink to &quot;Graphs&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>G=(V,E) ; degree d(v) ; Handshaking: Σ d(v) = 2|E|</span></span>
<span class="line"><span>Eulerian circuit ⇔ connected &amp; all degrees even</span></span>
<span class="line"><span>Eulerian trail ⇔ exactly two odd-degree vertices</span></span>
<span class="line"><span>Tree: connected + acyclic ; n vertices ⇒ n−1 edges</span></span>
<span class="line"><span>Subgraph: V&#39;⊆V, E&#39;⊆E ; Induced: keep all edges of G ; Spanning: V&#39;=V</span></span>
<span class="line"><span>Kruskal: sort edges, union-find, skip cycles</span></span>
<span class="line"><span>Prim: grow cheapest edge from a vertex</span></span>
<span class="line"><span>Adjacency matrix A; Aᵀ=A if undirected; (A²)[i][j]=2-walks</span></span></code></pre></div><h2 id="key-theorems" tabindex="-1">Key theorems <a class="header-anchor" href="#key-theorems" aria-label="Permalink to &quot;Key theorems&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- det(AB)=det(A)det(B)</span></span>
<span class="line"><span>- rank(A)=rank(Aᵀ)</span></span>
<span class="line"><span>- det(A)=Π eigenvalues</span></span>
<span class="line"><span>- trace(A)=Σ eigenvalues</span></span>
<span class="line"><span>- Cayley-Hamilton: p_A(A)=0 (optional)</span></span>
<span class="line"><span>- Fundamental theorem of linear algebra (four subspaces)</span></span>
<span class="line"><span>- Spectral theorem: symmetric A ⇒ orthonormal eigenvectors</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/first-semester/computational-mathematics/Cheat-Sheet.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheatSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CheatSheet as default
};
