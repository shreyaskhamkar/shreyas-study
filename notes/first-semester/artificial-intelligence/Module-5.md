# Module 5: Artificial Neural Networks

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)

## Learning outcomes

After completing this module, you should be able to:

- explain the structure of an artificial neuron and neural network;
- compare common activation functions;
- apply the perceptron learning rule;
- explain gradient descent and backpropagation; and
- distinguish major network architectures and their applications.


## Prerequisites

Complete [Module 4](Module-4.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | From biological to artificial neurons | 10-15 minutes |
| 2 | Activation functions | 10-15 minutes |
| 3 | Network architectures | 10-15 minutes |
| 4 | The perceptron | 10-15 minutes |
| 5 | Loss functions | 10-15 minutes |
| 6 | Gradient descent | 10-15 minutes |
| 7 | Backpropagation | 10-15 minutes |
| 8 | Generalization and common problems | 10-15 minutes |
| 9 | Example: XOR network | 10-15 minutes |
| 10 | Applications | 10-15 minutes |


## From biological to artificial neurons

A biological neuron receives signals through dendrites, integrates them in the
cell body, and sends an output through an axon. An artificial neuron is a simple
mathematical abstraction of this process.

For inputs `x1, ..., xn`, weights `w1, ..., wn`, and bias `b`:

```text
z = w1*x1 + w2*x2 + ... + wn*xn + b
y = activation(z)
```

Weights control the importance and direction of each input. The bias shifts the
decision boundary. Training adjusts weights and biases to reduce error.

## Activation functions

| Function | Definition or range | Common use |
|---|---|---|
| Step | 0 or 1 based on a threshold | Perceptron |
| Linear | `f(z) = z` | Regression output |
| Sigmoid | `1 / (1 + exp(-z))`, range 0 to 1 | Binary probability output |
| Tanh | Range -1 to 1 | Zero-centred hidden activation |
| ReLU | `max(0, z)` | Deep hidden layers |
| Softmax | Normalized class scores | Multi-class output |

Sigmoid and tanh can suffer from vanishing gradients when saturated. ReLU is
computationally simple and often trains deep networks faster, though a unit can
become inactive if it remains in the negative region.

## Network architectures

### Feedforward network

Information moves from input to output without cycles. A multilayer perceptron
(MLP) contains one or more hidden layers and can learn nonlinear mappings.

### Recurrent or feedback network

Connections form cycles, allowing internal state to carry information across
time. Recurrent networks are useful for sequences, speech, and time-series data.

### Other important architectures

- **Convolutional neural network (CNN):** learns local spatial patterns, commonly
  used for images.
- **Radial basis function network:** uses distance-based hidden activations.
- **Self-organizing map:** unsupervised mapping and visualization.
- **Transformer:** uses attention to model long-range relationships in sequences.

## The perceptron

A perceptron is a single linear threshold unit:

```text
output = 1 if w.x + b >= 0, otherwise 0
```

It learns a linear decision boundary.

### Perceptron learning rule

For input `x`, target `t`, predicted output `y`, and learning rate `eta`:

```text
error = t - y
w_new = w_old + eta * error * x
b_new = b_old + eta * error
```

Repeat over examples until all are correctly classified or a stopping condition
is reached.

### Worked update

Suppose `x = [1, 0]`, `w = [0.2, -0.1]`, `b = -0.3`, target `t = 1`, and
`eta = 0.1`.

```text
z = (0.2)(1) + (-0.1)(0) - 0.3 = -0.1
y = 0
error = 1 - 0 = 1
w_new = [0.2, -0.1] + 0.1(1)[1, 0] = [0.3, -0.1]
b_new = -0.3 + 0.1(1) = -0.2
```

The perceptron convergence theorem applies when the training data are linearly
separable. A single perceptron cannot represent XOR because XOR is not linearly
separable; an MLP can.

## Loss functions

A loss function measures prediction error.

- Mean squared error: common for regression.
- Binary cross-entropy: common for binary classification.
- Categorical cross-entropy: common for multi-class classification.

Training minimizes average loss over examples, often with a regularization term
to discourage overly complex weights.

## Gradient descent

The gradient points in the direction of greatest increase in loss, so parameters
move in the opposite direction:

```text
theta_new = theta_old - eta * gradient(L(theta_old))
```

The learning rate `eta` controls step size:

- too small: training is slow;
- too large: training may oscillate or diverge;
- a schedule or adaptive optimizer can adjust the effective rate.

### Variants

| Variant | Data used per update | Trade-off |
|---|---|---|
| Batch | Entire training set | Stable but expensive |
| Stochastic | One example | Fast, noisy updates |
| Mini-batch | Small subset | Efficient practical compromise |

Momentum accumulates a moving direction to reduce oscillation. Adaptive methods
such as Adam maintain parameter-specific learning rates.

## Backpropagation

Backpropagation efficiently computes loss gradients in a multilayer network by
applying the chain rule from output to input.

### Training cycle

1. Initialize weights and biases to small random values.
2. Perform a forward pass to compute activations and prediction.
3. Compute the loss against the target.
4. Propagate the output error backward through each layer.
5. Compute gradients for every weight and bias.
6. Update parameters using gradient descent.
7. Repeat over many mini-batches and epochs.

For a weight connecting activation `a_i` to a unit with error signal `delta_j`:

```text
dL/dw_ij = a_i * delta_j
w_ij = w_ij - eta * dL/dw_ij
```

The hidden-layer error is obtained by multiplying downstream errors by connecting
weights and the derivative of the hidden activation.

## Generalization and common problems

**Underfitting** occurs when the model is too simple or insufficiently trained.
Both training and validation error remain high.

**Overfitting** occurs when training performance is strong but validation
performance is poor. Controls include:

- more representative training data;
- train/validation/test separation;
- L1 or L2 regularization;
- dropout;
- early stopping; and
- data augmentation.

Deep networks may face vanishing or exploding gradients. ReLU-family
activations, careful initialization, normalization, residual connections, and
gradient clipping can help.

## Example: XOR network

XOR outputs 1 when exactly one input is 1. No straight line separates its two
classes, so one perceptron fails. An MLP with a hidden layer can create multiple
linear boundaries and combine them into the nonlinear XOR region. This example
shows why hidden layers increase representational power.

## Applications

- image classification and object detection;
- speech recognition and synthesis;
- language translation and text generation;
- medical diagnosis and signal analysis;
- recommendation and fraud detection; and
- forecasting and autonomous control.

## Quick revision

- A neuron computes a weighted sum, adds bias, and applies an activation.
- A perceptron learns only linearly separable patterns.
- Hidden layers and nonlinear activations let MLPs model nonlinear functions.
- Gradient descent updates parameters opposite the loss gradient.
- Backpropagation computes gradients through the network using the chain rule.
- Validation and regularization help measure and improve generalization.

## Important exam questions

1. Draw and explain an artificial neuron with its mathematical model.
2. Compare step, sigmoid, tanh, ReLU, and softmax activations.
3. Apply the perceptron learning rule for one or more training samples.
4. Explain why a single perceptron cannot solve XOR.
5. Explain gradient descent and its batch, stochastic, and mini-batch variants.
6. Describe backpropagation with a clear training algorithm.
7. Distinguish underfitting and overfitting and list remedies.

## PDF-aligned additions

### Learning algorithm, model, and learning types

An **algorithm** is the training procedure; a **model** is the learned structure
and parameters. The same architecture can produce different models when the
data, initialization, or training settings differ.

| Type | Training signal | Typical task |
|---|---|---|
| Supervised | Labelled examples | Classification or regression |
| Unsupervised | No target labels | Clustering or pattern discovery |
| Reinforcement | Rewards or penalties | Sequential decision-making |

Separate training, validation, and test data. Training loss measures fit to the
training examples; validation performance helps select settings; test performance
should be reported only after the final model is selected.

### Neuron and backpropagation procedure

```text
inputs -> weighted sum -> bias addition -> activation -> output
```

For a numerical backpropagation problem, show the forward weighted sums,
activation outputs, loss, output error, hidden-layer error using the chain rule,
gradients, and updated weights. Do not omit the learning-rate multiplication.

The perceptron convergence theorem applies only to linearly separable data. If
the data are not linearly separable, updates may continue without reaching zero
classification error; XOR is the standard example.

### Responsible use of learned models

Model quality depends on representative data, suitable evaluation, and the cost
of errors. Accuracy alone can hide class imbalance, unfair performance, privacy
risks, or unsafe deployment.

## Practice ladder

1. **Easy - Recall:** Define the module's central idea in one or two sentences.
2. **Easy - Recognize:** Identify the correct method for a small example and explain why it fits.
3. **Medium - Apply:** Work through one representative problem without copying the example.
4. **Medium - Compare:** Contrast two methods or concepts from the module.
5. **Hard - Integrate:** Solve a university-style scenario and justify every major step.

<details>
<summary>Reveal self-evaluation guide</summary>

A complete response uses correct terminology, shows intermediate steps, connects the result to the scenario, and states one assumption or limitation.

</details>

---

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)
