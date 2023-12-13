"use strict";

var quote = document.getElementById("quote");
var lastQuoteIndex = -1; // Initialize with an index that won't match any valid index

function displayQuote() {
  var myQuotes = [
    `<q>The only way to do great work is to love what you do.</q> <p>-Steve Jobs</p>`,
    `<q>It is better to be hated for what you are than to be loved for what you are not.</q> <p>-Andre Gide, Autumn Leaves</p>`,
    `<q>Everything you can imagine is real.</q> <p>-Pablo Picasso</p>`,
    `<q>Sometimes the questions are complicated and the answers are simple.</q> <p>-Dr. Seuss</p>`,
    `<q>Life isn't about finding yourself. Life is about creating yourself.</q> <p>-George Bernard Shaw</p>`,
    `<q>Life is like riding a bicycle. To keep your balance, you must keep moving.</q> <p>-Albert Einstein</p>`,
    `<q>Some infinities are bigger than other infinities.</q> <p>-John Green, The Fault in Our Stars</p>`,
    `<q>Be yourself; everyone else is already taken.</q> <p>-Oscar Wilde</p>`,
    `<q>Success is not final, failure is not fatal: It is the courage to continue that counts.</q> <p>-Winston Churchill</p>`,
    `<q>The future belongs to those who believe in the beauty of their dreams.</q> <p>-Eleanor Roosevelt</p>`,
  ];

  // Ensure the next quote is not the same as the last one
  var quoteIndex;
  do {
    quoteIndex = Math.floor(Math.random() * myQuotes.length);
  } while (quoteIndex === lastQuoteIndex);

  // Update the last quote index
  lastQuoteIndex = quoteIndex;

  // Set the inner HTML of the "quote" element
  return (quote.innerHTML = myQuotes[quoteIndex]);
}

// Display an initial quote
displayQuote();
