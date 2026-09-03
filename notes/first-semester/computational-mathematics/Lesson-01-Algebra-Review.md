# Lesson 1: Algebra Review - Building the Foundation

**Study plan:** Six short concept blocks of 10-15 minutes each, plus practice.

This lesson begins with the language of algebra and ends with simple linear
equations. No previous algebra knowledge is assumed. Study one concept block,
answer its checkpoint, and pause before starting the next block.

## 1. Learning Objectives

By the end of this lesson, you should be able to:

- recognize numbers, variables, constants, coefficients, and operators;
- evaluate an expression using the correct order of operations;
- simplify expressions by combining like terms;
- use the distributive property; and
- solve and verify a simple linear equation.

## 2. Intuition

Algebra is arithmetic with labelled boxes.

Imagine a shopping bill:

```text
3 notebooks at x rupees each + a 20-rupee pen

Total cost = 3x + 20
```

The letter `x` is not mysterious. It is simply a placeholder for a number that
may be unknown or may change. If one notebook costs 40 rupees, replace `x` with
40:

```text
3x + 20 = 3(40) + 20 = 140
```

This ability to describe a whole family of calculations with one expression is
why algebra is useful in programming, science, finance, and computing.

## 3. Theory

### Concept 1: The language of algebra

An **expression** is a mathematical phrase made from numbers, letters, and
operations. For example:

```text
4x + 7
```

Its parts are:

| Part        | Name        | Meaning                                    |
| ----------- | ----------- | ------------------------------------------ |
| `x`         | Variable    | A number that can vary or is not yet known |
| `4` in `4x` | Coefficient | The number multiplying the variable        |
| `7`         | Constant    | A fixed number                             |
| `4x`, `7`   | Terms       | Parts separated by `+` or `-`              |
| `+`         | Operator    | An instruction to perform an operation     |

Multiplication is often written without the multiplication sign:

```text
4 * x = 4x
a * b = ab
```

#### Simple example

In `5y - 9`, the variable is `y`, its coefficient is `5`, and the constant is
`-9`.

#### Real-world application

If a taxi charges 50 rupees initially and 15 rupees per kilometre, the cost for
`k` kilometres is:

```text
Cost = 15k + 50
```

#### University-style problem

Identify the terms, variables, coefficients, and constant in:

```text
6a - 3b + 11
```

**Step 1:** Terms are separated by addition or subtraction.

```text
Terms: 6a, -3b, 11
```

**Step 2:** Letters represent variables.

```text
Variables: a, b
```

**Step 3:** The number multiplying each variable is its coefficient.

```text
Coefficient of a: 6
Coefficient of b: -3
```

**Step 4:** The number without a variable is the constant.

```text
Constant: 11
```

#### Checkpoint 1

In `8p - 5`, identify the variable, coefficient, and constant. Write your answer
before continuing.

### Concept 2: Substitution and evaluating expressions

To **evaluate** an expression, replace each variable with its given value and
calculate the result. This replacement is called **substitution**.

#### Simple example

Evaluate `2x + 3` when `x = 4`.

```text
2x + 3
= 2(4) + 3
= 8 + 3
= 11
```

Parentheses around the substituted value make multiplication clear.

#### Real-world application

Computer programs use variables in exactly this way:

```python
price = 40
total = 3 * price + 20
print(total)  # 140
```

The algebraic variable becomes a memory location in a program.

#### University-style problem

Evaluate `3x^2 - 2y + 5` for `x = 2` and `y = -1`.

**Step 1:** Substitute both values carefully.

```text
3(2)^2 - 2(-1) + 5
```

**Step 2:** Calculate the power first.

```text
3(4) - 2(-1) + 5
```

**Step 3:** Perform multiplication.

```text
12 + 2 + 5
```

Notice that `-2(-1) = +2` because a negative multiplied by a negative is
positive.

**Step 4:** Add.

```text
Answer = 19
```

#### Checkpoint 2

Evaluate `4m - 7` when `m = 3`. Write your answer before continuing.

### Concept 3: Order of operations

When an expression contains several operations, everyone must calculate in the
same order. Use **BODMAS**:

```text
B  Brackets
O  Orders: powers and roots
D  Division       (left to right)
M  Multiplication (left to right)
A  Addition       (left to right)
S  Subtraction    (left to right)
```

Multiplication does not always come before division; they have equal priority
and are handled from left to right. The same is true for addition and
subtraction.

#### Visual explanation

```text
          2 + 3 * (4 + 1)^2
                    |
Step 1: brackets -> 2 + 3 * 5^2
                         |
Step 2: power    -> 2 + 3 * 25
                             |
Step 3: multiply -> 2 + 75
                         |
Step 4: add       -> 77
```

#### Simple example

```text
10 - 2 * 3 = 10 - 6 = 4
```

Doing subtraction first would incorrectly give `24`.

#### Real-world application

Spreadsheets, calculators, and programming languages use precedence rules. A
formula such as `base + rate * hours` multiplies before adding unless
parentheses explicitly change the order.

#### University-style problem

Evaluate:

```text
18 / 3 * 2 + (5 - 1)^2
```

**Step 1:** Brackets.

```text
18 / 3 * 2 + 4^2
```

**Step 2:** Power.

```text
18 / 3 * 2 + 16
```

**Step 3:** Division and multiplication from left to right.

```text
6 * 2 + 16
= 12 + 16
```

**Step 4:** Addition.

```text
Answer = 28
```

#### Checkpoint 3

Evaluate `6 + 2 * (7 - 4)^2`. Write your answer before continuing.

### Concept 4: Like terms and simplification

**Like terms** have exactly the same variable part. They can be combined just as
similar objects can be counted together.

```text
3 apples + 2 apples = 5 apples
3x      + 2x       = 5x
```

But apples and oranges are different categories:

```text
3x + 2y cannot be simplified to 5xy or 5x
```

The terms `4x` and `7x` are like terms. The terms `4x`, `4x^2`, and `4y` are not
like terms.

#### Simple example

```text
5x + 3 - 2x + 4
= (5x - 2x) + (3 + 4)
= 3x + 7
```

#### Real-world application

Symbolic mathematics software and compilers simplify repeated operations to
reduce computation. For example, `2 * size + 5 * size` can be optimized to
`7 * size`.

#### University-style problem

Simplify `7a - 3b + 2a + 5b - 4`.

**Step 1:** Group like terms.

```text
(7a + 2a) + (-3b + 5b) - 4
```

**Step 2:** Add their coefficients.

```text
9a + 2b - 4
```

**Answer:** `9a + 2b - 4`.

#### Checkpoint 4

Simplify `6x + 4 - 2x + 9`. Write your answer before continuing.

### Concept 5: The distributive property

The distributive property means multiplying every item inside a bracket.

Imagine three gift bags, each containing one pen and two chocolates:

```text
3 bags * (1 pen + 2 chocolates)
= 3 pens + 6 chocolates
```

In algebra:

```text
a(b + c) = ab + ac
a(b - c) = ab - ac
```

#### Visual explanation

```text
      3(x + 4)
      /       \
   3 * x     3 * 4
      \       /
       3x + 12
```

#### Simple example

```text
2(x + 5) = 2x + 10
```

#### Real-world application

If five students each buy a notebook costing `n` rupees and a pen costing 10
rupees, the total can be written in two equivalent ways:

```text
5(n + 10) = 5n + 50
```

#### University-style problem

Simplify `4(2x - 3) + 5x`.

**Step 1:** Distribute 4 to both terms in the bracket.

```text
8x - 12 + 5x
```

**Step 2:** Combine like terms.

```text
13x - 12
```

**Answer:** `13x - 12`.

#### Checkpoint 5

Simplify `3(y + 2) + 2y`. Write your answer before continuing.

### Concept 6: Solving linear equations

An **equation** states that two expressions have the same value. Think of it as
a balanced weighing scale:

```text
          2x + 3 = 11

       left side     right side
           \           /
            \_________/
              balance
```

Whatever operation is performed on one side must also be performed on the other
side. The goal is to leave the variable alone.

#### Formula explanation

For the general linear equation:

```text
ax + b = c, where a is not 0
```

subtract `b` from both sides and then divide both sides by `a`:

```text
ax + b = c
ax     = c - b
x      = (c - b) / a
```

The formula is simply a summary of balance-preserving steps.

#### Simple example

Solve `x + 5 = 9`.

```text
x + 5 - 5 = 9 - 5
x = 4
```

#### Real-world application

Suppose a mobile plan charges a fixed 100 rupees plus 2 rupees per minute. A
bill is 220 rupees. The minutes used satisfy:

```text
100 + 2m = 220
```

Solving the equation finds `m = 60` minutes.

#### University-style problem

Solve and verify `3(x - 2) + 4 = 19`.

**Step 1:** Open the bracket.

```text
3x - 6 + 4 = 19
```

**Step 2:** Combine constants.

```text
3x - 2 = 19
```

**Step 3:** Add 2 to both sides.

```text
3x = 21
```

**Step 4:** Divide both sides by 3.

```text
x = 7
```

**Step 5:** Verify by substituting `x = 7` into the original equation.

```text
Left side = 3(7 - 2) + 4
          = 3(5) + 4
          = 19

Right side = 19
```

Both sides match, so `x = 7` is correct.

#### Checkpoint 6

Solve and verify `2x + 5 = 17`. Do not continue until you have written the value
of `x` and checked it in the original equation.

## 4. Visual Explanation

The ideas in this lesson form one small pipeline:

```text
Real situation
     |
     v
Variable and expression      3x + 20
     |
     v
Substitute or simplify       3(40) + 20
     |
     v
Use operation rules          120 + 20
     |
     v
Result                       140

If two expressions are equal:

Equation -> preserve balance -> isolate variable -> verify answer
```

## 5. Formula Explanation

These are the only rules to remember from this lesson:

| Rule                               | Meaning                                  |
| ---------------------------------- | ---------------------------------------- |
| `a + a + a = 3a`                   | Repeated addition becomes multiplication |
| `ax + bx = (a + b)x`               | Combine coefficients of like terms       |
| `a(b + c) = ab + ac`               | Multiply every term inside the bracket   |
| `a(b - c) = ab - ac`               | Distribute across subtraction too        |
| `ax + b = c` gives `x = (c - b)/a` | Undo addition, then multiplication       |

Do not memorize a rule without connecting it to its meaning. For example,
`a(b + c)` distributes because there are `a` copies of everything inside the
bracket.

## 6. Worked Examples

### Mixed example

Evaluate `2(3x + 1) - x` when `x = 4`.

**Method 1: substitute first**

```text
2(3(4) + 1) - 4
= 2(12 + 1) - 4
= 26 - 4
= 22
```

**Method 2: simplify first**

```text
2(3x + 1) - x
= 6x + 2 - x
= 5x + 2

When x = 4:
5(4) + 2 = 22
```

Both methods agree. Simplifying first is often faster when the expression must
be evaluated for many different values.

## 7. Programming Connection

Algebra and programming use variables differently but relatedly:

| Mathematics                       | Programming                                      |
| --------------------------------- | ------------------------------------------------ |
| `x = 5` states that x has value 5 | `x = 5` assigns 5 to a memory location           |
| `2x` means multiplication         | Most languages require `2 * x`                   |
| `x^2` may mean x squared          | Python uses `x ** 2`; many languages use `x * x` |
| An equation describes equality    | Many languages test equality with `==`           |

Example Python function:

```python
def taxi_fare(kilometres):
    return 15 * kilometres + 50

print(taxi_fare(10))  # 200
```

Algebra helps design the formula; programming repeats it accurately for many
inputs.

## 8. Real-Life Applications

- **Chemistry:** rearranging concentration and dilution equations.
- **Programming:** calculating memory, time complexity, and coordinates.
- **Data science:** expressing relationships between variables.
- **Computer graphics:** scaling and moving points.
- **Finance:** calculating cost, tax, interest, and profit.
- **AI:** defining model inputs, weighted sums, and loss functions.
- **Algorithms:** describing running time using variables such as `n`.

## 9. Summary

### Key takeaways

- A variable is a placeholder for a number.
- An expression describes a calculation; an equation states that two expressions
  are equal.
- Substitute values using parentheses.
- Follow BODMAS and work left to right between equal-priority operations.
- Combine only like terms.
- Distribute multiplication to every term inside a bracket.
- Preserve equality by doing the same operation to both sides.
- Verify a solution by substituting it into the original equation.

### Common mistakes

- Treating `3x` as `3 + x` instead of `3 * x`.
- Combining unlike terms, such as writing `2x + 3 = 5x`.
- Forgetting to multiply every term: `2(x + 3)` is `2x + 6`, not `2x + 3`.
- Ignoring BODMAS.
- Losing a negative sign during substitution or simplification.
- Changing only one side of an equation.
- Stopping after finding `x` without checking the answer.

### Quick revision notes

```text
Expression:  3x + 5
Equation:    3x + 5 = 20
Like terms:  3x + 2x = 5x
Distribute:  3(x + 2) = 3x + 6
Solve:       3x + 5 = 20 -> 3x = 15 -> x = 5
Check:       3(5) + 5 = 20
```

## 10. Practice Questions

Complete these without looking back at the worked examples.

1. **Easy:** In `7x - 4`, identify the variable, coefficient, and constant.
2. **Easy:** Evaluate `3a + 2` when `a = 5`.
3. **Medium:** Simplify `8x + 3 - 5x + 7`.
4. **Medium:** Simplify `4(2y - 3) + y`.
5. **Hard:** Solve and verify `5(2x - 1) + 3 = 38`.

## 11. Mini Quiz

Answer all five questions before checking any notes:

1. What is the difference between an expression and an equation?
2. Evaluate `20 / 5 * 2 + 3`.
3. Can `4x + 3y` be simplified to `7xy`? Explain why or why not.
4. Expand and simplify `2(3x + 4) - x`.
5. A service charges a fixed fee of 80 rupees and 12 rupees per hour. The total
   charge is 200 rupees. Form an equation and find the number of hours.

## Stop Here

Do not begin another topic yet. Complete the six checkpoints, five practice
questions, and mini quiz. Continue only after the learner requests **Next Lesson**.
