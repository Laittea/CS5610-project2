# CS5610-project2

# CS5610-project2
Challenges Faced While Making This App
The render was a bit challenging because I started with it first, which I realized later that I shouldn't, because I didn't really include any code in it. The most challenging part is about the logic. I literally watched a lot of YouTube videos about Minesweeper because it is so hard to think about the logic straight, especially the part in the bonus point, the Auto Clear:

const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1],          [0, 1],
  [1, -1], [1, 0], [1, 1],
];
This is what I learned from one of the videos. Also, dividing the structure isn't easy. I searched online for advice on how I should structure my files to be organized. I think the most challenges come from my Cell.jsx and my Grid.jsx files.

Given More Time, What Additional Features or Design Changes Would You Make
I don't know, but somehow I cannot include both Red Flag and Auto Clear, the bonus functions in my Minesweeper, at the same time. I think there may be some code conflicts, but I cannot figure it out, so I can only keep one, which is Auto Clear. The same goes for other functions. I cannot achieve First Turn Safe and Data Save either. If I have more time, I can search more to fix that.

What Assumptions Did You Make While Working on This Assignment
I assumed the hard one, the 30x16 grid, is horizontal. I think this is not clearly mentioned in the instruction. Besides, the easy, medium, and hard modes should be like a page that allows the user to play the game (URL: “/game/{difficulty}”). I listed three of them after the rules so that players can choose in the header, and there is no back button. Players can only navigate through the header.

How long did this assignment take to complete?
This assignment nearly took me 15 hours or more, mostly watching videos about how to make Minesweeper, searching for the logic, and debugging.

(Optional) Any feedback on this challenge? What did you like or not like about it?
I think overall it is interesting, but the logic of it is very challenging for me, especially the bonus functions. I tried to add them all, but eventually, nothing worked out except for the Auto Clear.

Bonus part finished: Auto clean
in Grid.jsx
const revealCells = (row, col) => {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  const queue = [[row, col]]; // Start a queue with the initially clicked cell
  const newGrid = [...grid]; // Create a copy of the grid

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();
    const cell = newGrid[currentRow][currentCol];

    if (!cell.revealed) { 
      cell.revealed = true; // Reveal the cell
      setRevealedCount((prev) => prev + 1);

      if (cell.nearbyMines === 0) { 
        directions.forEach(([dx, dy]) => {
          const newRow = currentRow + dx;
          const newCol = currentCol + dy;

      
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            !newGrid[newRow][newCol].revealed
          ) {
            queue.push([newRow, newCol]); 
          }
        });
      }
    }
  }

  setGrid(newGrid); // Update the grid with revealed cells
};
