// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

// Assignment 1: Blacksmith — The Tiny Forge


// ------------------------------------
// 1. SELECT THE HTML ELEMENTS
// ------------------------------------

// Find the forge section
const $forge = document.getElementById('forge')

// Find the heat number
const $heatValue = document.getElementById('heat-value')

// Find the sword count
const $swordCount = document.getElementById('sword-count')

// Find the status message
const $forgeStatus = document.getElementById('forge-status')

// Find the forge image
const $forgeImage = document.getElementById('forge-image')

// Find the workshop message
const $actionMessage = document.getElementById('action-message')

// 2. Create the two state variables: heat and swords made.

// 3. Write getForgeStatus(heatValue). Return the correct status string.

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

// 5. Write resetForge(). Restore the state, message, and display.

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
