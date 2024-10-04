$("#inputButton1").click(function() {
    // Prompt the user for input
    const userInput = prompt("Please enter something:");
    
    // Display the input in the div
    if (userInput !== null) {
      // Display the input in the table row
      $("#displayTable1").text(userInput);
    }
    $(this).blur();
  });
  
$("#inputButton2").click(function() {
    // Prompt the user for input
    const userInput = prompt("Please enter something:");
    
    // Display the input in the div
    if (userInput !== null) {
      // Display the input in the table row
      $("#displayTable2").text(userInput);
    }
    $(this).blur();
  });
  
$("#inputButton3").click(function() {
    // Prompt the user for input
    const userInput = prompt("Please enter something:");
    
    // Display the input in the div
    if (userInput !== null) {
      // Display the input in the table row
      $("#displayTable3").text(userInput);
    }
    $(this).blur();
  });
  
$("#inputButton4").click(function() {
    // Prompt the user for input
    const userInput = prompt("Please enter something:");
    
    // Display the input in the div
    if (userInput !== null) {
      // Display the input in the table row
      $("#displayTable4").text(userInput);
    }
    $(this).blur();
  });
  
$("#inputButton5").click(function() {
    // Prompt the user for input
    const userInput = prompt("Please enter something:");
    
    // Display the input in the div
    if (userInput !== null) {
      // Display the input in the table row
      $("#displayTable5").text(userInput);
    }
    $(this).blur();
  });
  

  // $(this).blur(); removes the focus after an element is clicked (So any bootstrap effects after clicking button but before somewhere else on the website is removed)
  // To understand what it means, comment out the line in the first inputButton and click on add answer in first row, then don't click anywhere else on website after entering prompt.