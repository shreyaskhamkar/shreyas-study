# Module 1: Introduction to Artificial Intelligence

[↑ Semester I](../README.md) · [Subject index](README.md) · [Next: Module 2 →](<Module-2.md>)

## Learning outcomes

After completing this module, you should be able to:

- define artificial intelligence and describe its major approaches;
- identify the components of an intelligent agent;
- specify a task environment using PEAS;
- classify an environment by its important properties; and
- distinguish simple reflex, model-based, goal-based, utility-based, and learning agents.


## Prerequisites

No earlier module is required. Start with the plain-English overview and review each unfamiliar term before continuing.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | What is artificial intelligence? | 10-15 minutes |
| 2 | Foundations and applications | 10-15 minutes |
| 3 | Intelligent agents | 10-15 minutes |
| 4 | PEAS task specification | 10-15 minutes |
| 5 | Properties of task environments | 10-15 minutes |
| 6 | Types of agents | 10-15 minutes |
| 7 | Worked classification | 10-15 minutes |


## What is artificial intelligence?

Artificial intelligence (AI) studies systems that perceive their environment,
reason about what they perceive, and act to achieve goals. AI is not limited to
human imitation. A route planner, fraud detector, game-playing program, and robot
may all be intelligent systems even though they solve very different problems.

Four common ways to describe AI are:

| Approach | Main question | Example |
|---|---|---|
| Acting humanly | Can the machine behave like a person? | Turing test |
| Thinking humanly | Does it model human thought? | Cognitive modelling |
| Thinking rationally | Does it derive correct conclusions? | Logic-based theorem prover |
| Acting rationally | Does it choose actions that best achieve its goals? | Rational agent |

Modern AI usually adopts the **rational-agent approach** because it gives a
clear way to evaluate success without requiring a machine to think exactly like
a human.

## Foundations and applications

AI draws ideas from mathematics, computer science, psychology, neuroscience,
linguistics, philosophy, economics, and control theory.

Major application areas include:

- search and planning;
- knowledge representation and automated reasoning;
- machine learning and neural networks;
- natural-language processing;
- computer vision and speech recognition;
- robotics and autonomous systems; and
- expert and decision-support systems.

## Intelligent agents

An **agent** perceives its environment through **sensors** and acts upon the
environment through **actuators**.

```text
Environment -> sensors -> agent -> actuators -> Environment
```

The **agent function** maps a percept sequence to an action. The **agent
program** is the implementation of that function on a particular architecture.

### Rationality

A rational agent selects the action expected to maximize its performance
measure, given:

- the percept sequence received so far;
- the agent's built-in knowledge;
- the actions available; and
- the expected consequences of those actions.

Rational does not mean all-knowing. An agent can make a rational choice with
limited information and still receive a bad outcome because the world is
uncertain.

## PEAS task specification

PEAS stands for **Performance measure, Environment, Actuators, and Sensors**.

### Worked example: autonomous taxi

| PEAS element | Specification |
|---|---|
| Performance | Safety, legality, travel time, comfort, fuel efficiency |
| Environment | Roads, traffic, pedestrians, passengers, weather |
| Actuators | Steering, accelerator, brake, indicators, display |
| Sensors | Cameras, GPS, speedometer, lidar, microphones |

The performance measure should describe the desired result, not the internal
steps used to obtain it.

## Properties of task environments

| Property | Meaning | Example |
|---|---|---|
| Fully observable | Sensors provide all relevant state information | Chess board |
| Partially observable | Important state information is hidden or noisy | Driving |
| Deterministic | Current state and action determine the next state | Crossword |
| Stochastic | Outcomes contain uncertainty | Medical diagnosis |
| Episodic | Each decision is independent | Image classification |
| Sequential | Current actions affect future decisions | Chess |
| Static | World does not change while the agent deliberates | Printed puzzle |
| Dynamic | World may change during deliberation | Road traffic |
| Discrete | States, actions, or time are countable | Tic-tac-toe |
| Continuous | State, action, or time uses real-valued ranges | Robot control |
| Single-agent | One agent determines the solution | Route planning |
| Multi-agent | Other agents cooperate or compete | Football |
| Known | Transition and outcome rules are known | Board game |
| Unknown | The agent must learn how the world works | New robot environment |

## Types of agents

### Simple reflex agent

Uses condition-action rules based only on the current percept.

```text
IF room_is_dirty THEN suck
ELSE move
```

It is fast but performs poorly when the environment is partially observable.

### Model-based reflex agent

Maintains an internal state describing aspects of the world that are not
currently visible. It updates this state using a model of how the world changes.

### Goal-based agent

Evaluates actions according to whether they lead to a goal. Search and planning
allow it to compare alternative action sequences.

### Utility-based agent

Uses a utility function to rank outcomes. Utility is useful when several goals
conflict or when outcomes are uncertain.

### Learning agent

A learning agent improves from experience. Its main components are:

- **performance element:** chooses external actions;
- **learning element:** improves the performance element;
- **critic:** evaluates behaviour against the performance measure; and
- **problem generator:** proposes exploratory actions that may provide useful experience.

## Worked classification

Consider an online chess program:

- observable: fully observable;
- agents: multi-agent and competitive;
- deterministic: deterministic at the rule level;
- structure: sequential;
- change: semi-dynamic because the board waits but the clock runs;
- representation: discrete; and
- knowledge: known rules.

## Quick revision

- AI builds systems that perceive, reason, learn, and act.
- A rational agent maximizes expected performance using available information.
- PEAS specifies an agent's task environment.
- Environment properties influence which agent architecture is suitable.
- Reflex agents react; model-based agents remember; goal agents plan; utility
  agents compare preferences; learning agents improve.

## Important exam questions

1. Define AI and compare its four major approaches.
2. Explain a rational agent and distinguish rationality from omniscience.
3. Give a PEAS description for a medical diagnosis system or delivery robot.
4. Classify a task environment using all major environment properties.
5. Compare the five agent architectures with suitable examples.

## PDF-aligned additions

### Capability levels of AI

- **Narrow AI (weak AI):** designed for a limited task or domain, such as spam
  filtering, route planning, or game playing. It does not automatically transfer
  its ability to unrelated tasks.
- **General AI (strong AI):** a hypothetical system able to learn and apply
  knowledge across many different tasks with human-like flexibility. It should
  not be presented as an existing technology.

These capability labels are different from the four approaches to AI. The four
approaches describe how intelligence is defined; narrow and general AI describe
the breadth of a system's capabilities.

### Representation, reasoning, and learning

An AI system normally needs three connected abilities: represent facts, rules,
patterns, or features; reason over those representations; and learn from data or
feedback. A system can be strong in one ability and weak in another.

### Constraints and assumptions in task environments

State assumptions that simplify the environment model. A route planner may use a
fixed map, while a driving agent must handle changing traffic and noisy sensors.
The assumptions affect whether the task is observable, deterministic, static, and
known. A simplified model is useful only when its limitations are stated.

### Responsible AI reminder

AI systems may affect privacy, safety, employment, health, or access to services.
Data quality, hidden bias, explainability, and human oversight are important
practical limitations of deployed AI systems.

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

[↑ Semester I](../README.md) · [Subject index](README.md) · [Next: Module 2 →](<Module-2.md>)
