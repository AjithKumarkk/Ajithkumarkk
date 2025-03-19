---
name: Puzzle Odyssey
tools: [Unity IAP, Line Renderer, in-app Reviews]
image: https://i.imgur.com/gFmttwW.png
description: Puzzle Odyssey is an immersive word puzzle game that combines challenging gameplay with stunning visuals and relaxing soundscapes. Players can test their vocabulary, sharpen their minds, and unwind as they swipe through hidden words across beautiful landscapes. Designed for puzzle lovers seeking both fun and education, the game offers an engaging experience. I implemented Unity in-app purchases for both iOS and Android, used Line Renderer to form words from letters using colliders, and integrated in-app reviews to enhance user feedback on both platforms.
---

# Overview of the Project:

This is my first game project where I created a Tetris-like game in Unity. Key features I implemented include:

- Block Movement & Rotation: Blocks move left, right, and rotate with arrow keys. They fall automatically with adjustable speed.
- Grid Management: A 10x20 grid stores blocks, and I check if new block positions are valid.
- Line Clearing: Filled lines are cleared, and score points are added when lines are removed.
- Game Over: When blocks reach the top, the game ends, and the score is displayed.
- Score & High Scores: Player’s score is saved, and high scores are managed using PlayerPrefs.
- UI: Created a Game Over UI to display the player's score.

![preview](https://i.imgur.com/PnVI2Qr.png)

## What I Learned:
- **C# scripting in Unity:** Gained experience working with Unity's scripting system to create game mechanics, logic, and interactions.
- **Grid-based game design:** Understood how to manage a grid of cells for something like Tetris, where each cell can either be empty or occupied by part of a block.
- **Game Design Fundamentals:** Learned how to handle user input, update game states, and create meaningful interactions (such as clearing lines, adding scores, and handling game-over scenarios).

![search](https://i.imgur.com/Rmey2RW.png)

external link : https://play.google.com/store/apps/details?id=com.Sector4Interactive.PuzzleOdyssey&hl=en_IN
<p class="text-center">
  {% include elements/button.html link="https://github.com/AjithKumarkk/Tetris-2D" text="Download" %}
</p>
