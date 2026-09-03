# Computational Mathematics - Practice Test 1

This test covers Modules 1-2.

## Questions

1. Define a proposition.
2. When is an implication `p -> q` false?
3. State both quantifier-negation laws.
4. What is a tautology?
5. What is a well-formed formula?
6. Distinguish a free variable from a bound variable.
7. What is a formation tree?
8. Give two benefits of type checking.
9. What is type inference?
10. Explain one limitation of computable type checking.

## Answer Key

1. A statement with a definite truth value, true or false.
2. When `p` is true and `q` is false.
3. `not forall x P(x)` is equivalent to `exists x not P(x)`; `not exists x P(x)` is equivalent to `forall x not P(x)`.
4. A formula true under every valuation.
5. A formula that follows the grammar rules of the formal language.
6. A free variable is outside a quantifier's scope; a bound variable is within it.
7. A tree showing how a formula was constructed from its grammar rules.
8. Earlier error detection, clearer documentation, safer refactoring, or compiler optimization.
9. Deduction of a likely type from an expression's context and operations.
10. Rich language features can make general type checking or inference undecidable.
