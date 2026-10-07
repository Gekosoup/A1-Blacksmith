// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

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

// ------------------------------------
// 2. CREATE THE STATE VARIABLES
// ------------------------------------

// Starting heat is 20
let heat = 20

// Starting number of swords is 0
let swords = 0

// 3. Write getForgeStatus(heatValue). Return the correct status string.

// ------------------------------------
// 3. GET FORGE STATUS
// ------------------------------------

// This function checks the amount of heat
// and returns the correct status
function getForgeStatus(heatValue) {
  // 0–29 = Too cold
  if (heatValue < 30) {
    return 'Too cold'
  }

  // 30–69 = Ready to forge
  if (heatValue < 70) {
    return 'Ready to forge'
  }

  // 70–100 = Roaring fire
  return 'Roaring fire. Keep crafting!'
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

// This function updates everything on the page
// whenever the forge state changes
function updateForge() {

  // Update the heat number
  $heatValue.textContent = heat

  // Update the number of swords
  $swordCount.textContent = swords

  // Get the current forge status
  const status = getForgeStatus(heat)

  // Update the status text
  $forgeStatus.textContent = status

  // --------------------------------
  // Change the forge class
  // --------------------------------

  // Remove the old status classes
  $forge.classList.remove('is-cold')
  $forge.classList.remove('is-ready')
  $forge.classList.remove('is-roaring')


  // --------------------------------
  // Change the image
  // --------------------------------

  if (heat < 30) {

    // Add the cold class
    $forge.classList.add('is-cold')

    // Change the image
    $forgeImage.src = 'assets/forge-cold.svg'

    // Change the image description
    $forgeImage.alt = 'A stone forge with dark coals and no flames'

  } 
  
  else if (heat < 70) {
    // Add the ready class
    $forge.classList.add('is-ready')

    // Change the image
    $forgeImage.src = 'assets/forge-ready.svg'

    // Change the image description
    $forgeImage.alt = 'A stone forge with glowing coals and a small flame'

  } 
  
  else {

    // Add the roaring class
    $forge.classList.add('is-roaring')

    // Change the image
    $forgeImage.src = 'assets/forge-roaring.svg'

    // Change the image description
    $forgeImage.alt = 'A stone forge with bright glowing coals and roaring flames'
  }
}


// 5. Write resetForge(). Restore the state, message, and display.

// This function returns the forge
// to its starting state
function resetForge() {

  // Reset heat to 20
  heat = 20

  // Reset swords to 0
  swords = 0

  // Show the starting message
  $actionMessage.textContent =
    'Welcome to the forge. Add heat to begin.'

  // Update everything on the page
  updateForge()
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// This function adds heat to the forge
function heatForge(amount) {

  // Add the requested amount of heat
  heat += amount

  // Make sure heat never goes above 100
  if (heat > 100) {
    heat = 100
  }

  // Update the message
  $actionMessage.textContent =
    `You added ${amount} heat.`

  // Update the page
  updateForge()
}


// 7. Write makeSword(). Handle both success and insufficient heat.

// This function attempts to make one sword
function makeSword() {

  // A sword requires 30 heat
  if (heat >= 30) {

    // Use 30 heat
    heat -= 30

    // Add one sword
    swords++

    // Show success message
    $actionMessage.textContent =
      'Sword crafted! The blade is ready.'

  } else {

    // Not enough heat
    $actionMessage.textContent =
      'Not enough heat. Add more heat to forge a sword.'
  }

  // Update the page
  updateForge()
}

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
