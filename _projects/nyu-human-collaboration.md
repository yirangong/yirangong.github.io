---
layout: project
title: Modeling Communication Dynamics in Complex Strategic Planning
pillar: understand
index: U—01
kind: NYU research · Behavioral experiment
summary: A Unity-based behavioral experiment exploring when communication helps people coordinate through complex, asymmetric planning tasks.
media:
  - type: image
    src: /assets/img/projects/nyu-human-collaboration/representative-task-map.svg
    featured: true
    caption: "Representative task map rendered from the project's map data."
team: "Yiran and Nastaran · Weiji Ma Lab, NYU"
skills:
  - Behavioral experiment design
  - Collaborative planning
  - Python data analysis
  - Unity
links:
  - label: View GitHub repository
    url: https://github.com/yirangong/CRC_communication
featured: true
importance: 1
published: true
status: published
problem: Communication can help collaborators align their plans, but speaking also consumes attention and time. The study asks when that cost is justified in a complex joint-planning task.
approach: The experiment combines a Unity road-construction game with a Python analysis pipeline that identifies situations where locally greedy and globally optimal plans meaningfully diverge.
roadmap_label: Research setup
roadmap_headline: When is talking worth the cost?
---

## 01 / Research question

Communication supports collaboration, but not every decision benefits from discussion. The study tests whether people communicate selectively when uncertainty, branching choices, or long-term consequences increase.

- **Selective communication:** Do people speak more when the next move is difficult to predict?
- **Communication benefits:** Does talking improve planning by clarifying intent and repairing mismatched expectations?
- **Communication biases:** When does discussion create over-coordination or unequal contribution?

## 02 / Experimental task

Two participants plan roads across the same map in a Unity-based game. Each map creates a different strategic environment, allowing communication behavior to be connected to the structure and difficulty of the decisions being made.

The experiment is designed to capture gameplay and communication together, including when participants speak, what action follows, and whether their joint plan improves.

## 03 / Selecting informative maps

The analysis pipeline evaluates 1,242 candidate maps under two strategies: **greedy**, which chooses the locally best move, and **optimal**, which produces the best overall result.

Maps are filtered using starting-position distance and contribution balance, then compared through measures such as tree depth, number of possible paths, optimal solutions, and each player's contribution. Selected maps are exported into training and evaluation blocks for use in the game.

> **Pipeline** Candidate maps → greedy and optimal comparison → balanced study set → Unity experiment

## 04 / Current scope

The repository documents the hypotheses, map data, selection notebooks, visualization code, and game-asset export pipeline. It does not yet present final participant results.

The next question is empirical: whether communication improves coordination at strategically difficult moments—and when the cost of talking outweighs its benefit.
