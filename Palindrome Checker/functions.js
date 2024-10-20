// Function to center text in terminal
export default function centerBoxedMessage(boxedMessage) {
    const terminalWidth = process.stdout.columns; // Get the terminal width
    const lines = boxedMessage.split('\n'); // Split the boxed message into lines
    
    // Calculate how much padding is needed for centering
    const maxLength = Math.max(...lines.map(line => line.length)); // Get the maximum length of lines
    const totalPadding = Math.floor((terminalWidth - maxLength) / 2); // Total padding needed
  
    // Center each line
    const centeredLines = lines.map(line => {
      return ' '.repeat(totalPadding) + line; // Add spaces to the left for centering
    });
    
    return centeredLines.join('\n'); // Join the centered lines back together
  }