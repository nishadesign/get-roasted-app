// Fun and constructive design roasts for the UX team
const roasts = [
  // Color & Visual Design
  "This color palette looks like it was chosen by someone wearing sunglasses in a dark room. 🕶️",
  "I see you've discovered the 'rainbow explosion' design pattern. Very... festive! 🌈",
  "This gradient is so subtle, I need a magnifying glass to see the difference. Maybe try turning up the contrast dial? 🔍",
  "Did you use a color picker or just close your eyes and point at the screen? 🎯",
  "This design has more colors than a unicorn's fever dream. 🦄",
  
  // Typography
  "I love how you used 47 different fonts. Really shows your commitment to variety! 📚",
  "This text is so small, even ants would need reading glasses. 🐜👓",
  "Comic Sans would be proud of this font choice. Wait, that's not Comic Sans? 😅",
  "The hierarchy here is flatter than a pancake. Where's the visual drama? 🥞",
  
  // Layout & Spacing
  "I see you're a fan of the 'everything must touch everything' design philosophy. 🤗",
  "This white space is so cramped, it's having an anxiety attack. Give it some room to breathe! 😤",
  "Your alignment is more off than my work-life balance. 📐",
  "This layout looks like it was designed during an earthquake. 🌍",
  "I love how you've reinvented the grid system... by completely ignoring it! 📊",
  
  // User Experience
  "This user flow has more twists than a pretzel factory. 🥨",
  "I found Waldo faster than I could find the CTA button. 🔍",
  "This navigation is more confusing than IKEA furniture instructions. 🪑",
  "The user journey here is like a choose-your-own-adventure book... where every choice leads to confusion. 📖",
  
  // Mobile & Responsive
  "This mobile design looks like it was squeezed through a pasta maker. 🍝",
  "I see you've mastered the art of horizontal scrolling. Very 2005 of you! ↔️",
  "This responsive design is about as flexible as a brick wall. 🧱",
  
  // General Design
  "This design has more personality than a cardboard box... barely. 📦",
  "I can see you really pushed the boundaries of... something. Not sure what, but something! 🤷‍♀️",
  "This looks like it was designed by a committee of colorblind robots. 🤖",
  "I love the minimalist approach! So minimalist, it's practically invisible. 👻",
  "This design is so busy, it needs its own traffic controller. 🚦",
  
  // Constructive but funny
  "Great start! Now let's add some visual hierarchy so users know where to look first. 👀",
  "I can see the vision! Maybe we can make the important stuff pop a bit more? ✨",
  "This has potential! Let's just organize it like Marie Kondo would. 📚",
  "Nice concept! Now let's make it so good that even your mom would use it. 👵",
  "Solid foundation! Time to add some design seasoning to make it chef's kiss perfect. 👨‍🍳💋"
];


const positiveEndings = [
  "But hey, at least it's memorable! 😄",
  "Keep iterating, you're on the right track! 🚀",
  "Rome wasn't built in a day, and neither are great designs! 🏛️",
  "Every designer has been here. You've got this! 💪",
  "The next version is going to be fire! 🔥",
  "Practice makes perfect, and you're getting there! ⭐",
  "Your future self will thank you for this learning experience! 🙏",
  "Even Picasso had his blue period. This is just your... colorful period! 🎨"
];

export function generateRoast() {
  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  const ending = positiveEndings[Math.floor(Math.random() * positiveEndings.length)];
  
  return `${roast} ${ending}`;
}

export function generateRoastTitle() {
  const titles = [
    "Design Critique Incoming! 🎯",
    "Hot Take Alert! 🌶️",
    "Roast Level: Medium-Well 🔥",
    "Design Feedback (With Love) 💕",
    "Constructive Roasting Session 🍖",
    "Your Design's Fortune Cookie 🥠",
    "Brutally Honest Design Review 😅",
    "Design Roast: Served Fresh! ☕"
  ];
  
  return titles[Math.floor(Math.random() * titles.length)];
}
