


Hello!

I have created a simple application that allows you to enter in text under a certain time-block and then save that text to localStorage in the broswer. Once an event is saved, it should be color coded in order to show past, present and future appointments with the respective colors of red, grey, and green.

To accomplish this, I started with declaring some global variables such at moment.js for current date and time.

Next I moved on to creating variables for the dyanmic elements I wanted to generate. Those are rows with 3 columns in each one. The columns are time, task/textarea/and button for saving.

To generate these dynamically I created an array of the times/hours I needed. Next I created a for loop which had an index of my time array to generate the format. Additionally in this loop i added conditionals to check against time to print the appropriate colors.

Finally I created an event.listener on the button class and becan to pull the text area data/value by using the sibling method because they button and textarea are on the same hierarchy under the parent row. i used their values to creat variables in order to create a key from the time block, and a value from the text are, which makes pushing these to the localStrorage easier.