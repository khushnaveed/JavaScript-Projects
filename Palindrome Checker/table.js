import Table from 'cli-table';
import { palindromeExamples } from "./variables.js";


// Create a new table instance with horizontal orientation
export const table = new Table({
    head: ['Single Words', 'Phrases', 'Numbers', 'Sentences'], // Define headers
    style: {
        head: ['cyan'], // Header color
        border: ['green'], // Border color
    },
  });
  
  // Find the maximum length of examples in any category
  const maxExamplesLength = Math.max(
    ...Object.values(palindromeExamples).map(arr => arr.length)
  );
  
  // Populate the table with data
  for (let i = 0; i < maxExamplesLength; i++) {
    const row = []; // Row for the current index
  
    // For each category, get the example at index `i`, if it exists
    for (const category of Object.keys(palindromeExamples)) {
        const example = palindromeExamples[category][i] || ''; // Get the example or an empty string
        row.push(example); // Add example to the row
    }
  
    // Add the row to the table
    table.push(row);
  }
  