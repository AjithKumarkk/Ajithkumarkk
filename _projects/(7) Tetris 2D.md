---
name: Tetris 2D
tools: [Input Handling, PlayerPref, Grid Based]
image: https://i.imgur.com/X1LJy18.png
description: This is a Tetris-inspired game created in Unity where players control falling blocks. The goal is to complete horizontal lines by placing blocks in a 10x20 grid. When a line is filled, it clears, and the player earns points. The game ends when the blocks stack up to the top. Scores are saved, and the player can view their high scores.
---

# Overview of the Project:

This is my first game project where I created a Tetris-like game in Unity. Key features I implemented include:

- Block Movement & Rotation: Blocks move left, right, and rotate with arrow keys. They fall automatically with adjustable speed.
- Grid Management: A 10x20 grid stores blocks, and I check if new block positions are valid.
- Line Clearing: Filled lines are cleared, and score points are added when lines are removed.
- Game Over: When blocks reach the top, the game ends, and the score is displayed.
- Score & High Scores: Player’s score is saved, and high scores are managed using PlayerPrefs.
- UI: Created a Game Over UI to display the player's score.

![preview](https://www.sketchappsources.com/resources/source-image/we-were-soldiers-landing-page-dbruggisser.jpg)

## What I Learned:
- **C# scripting in Unity:** Gained experience working with Unity's scripting system to create game mechanics, logic, and interactions.
- **Grid-based game design:** Understood how to manage a grid of cells for something like Tetris, where each cell can either be empty or occupied by part of a block.
- **Game Design Fundamentals:** Learned how to handle user input, update game states, and create meaningful interactions (such as clearing lines, adding scores, and handling game-over scenarios).

![search](https://www.sketchappsources.com/resources/source-image/microsoft-windows-10-virtual-keyboard-diogo-sousa.png)

<p class="text-center">
  {% include elements/button.html link="https://github.com/yousinix/portfolYOU" text="Learn More" %}
</p>
