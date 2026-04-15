export const storyData = {
  title: "The Blackwood Curse",
  description: "A 1924 Investigative File. To proceed, group consensus on the passcode is required.",
  phases: [
    {
      id: 1,
      name: "The Cryptic Summons",
      content: "October 14th, 1924. A letter arrived at your agency. Elias Blackwood, heir to the Blackwood estate, wrote it in a frantic rush. He claimed the shadows in his manor were whispering his name. He has since vanished. The police found nothing but this letter on his desk.",
      clues: [
        { type: "text", content: "My dearest investigators, if you are reading this, the 'RAVEN' has taken me. Do not trust the servants. Do not look directly into the mirrors. Find the diary." },
        { type: "image", src: "/occult_letter.png", alt: "A typewritten letter with a strange crest" },
      ],
      puzzlePrompt: "What entity did Elias claim took him?",
      passcode: "RAVEN",
      passcodeHint: "Look closely at the capitalization in Elias's final words."
    },
    {
      id: 2,
      name: "The Manor's History",
      content: "You arrive at Blackwood Manor. The gates are rusted, and the air is thick with unnatural fog. Inside the library, you find an old newspaper clipping hidden behind a portrait.",
      clues: [
        { type: "image", src: "/manor_photo.png", alt: "Photograph of Blackwood Manor" },
        { type: "text", content: "The clipping speaks of a tragic fire that occurred in the East Wing decades ago. The year of the fire is circled in dried red ink." },
        { type: "text", content: "Excerpt: 'The grand gala of 1893 ended in ash and sorrow. The master of the house was never found, but his pocket watch was discovered frozen exactly at midnight.'" }
      ],
      puzzlePrompt: "What year did the original tragedy occur?",
      passcode: "1893",
      passcodeHint: "The year is explicitly mentioned in the newspaper excerpt."
    },
    {
      id: 3,
      name: "The Seance Transcript",
      content: "Deep in the cellar, you uncover a hidden room filled with occult paraphernalia. A phonograph starts playing on its own. A seance took place here.",
      clues: [
        { type: "text", content: "'We call upon the spirit of the lost master. We call upon MALACHAI. Show us the path. The flame flickers... he is here. He demands a sacrifice in the name of the old blood.'" }
      ],
      puzzlePrompt: "What is the name of the spirit summoned in the cellar?",
      passcode: "MALACHAI",
      passcodeHint: "The name was spoken during the seance."
    },
    {
      id: 4,
      name: "The Final Confrontation",
      content: "As you speak the name MALACHAI, the temperature in the room drops below freezing. The shadows detach from the walls and form a figure. Elias Blackwood was never a victim... he was the vessel. You must destroy the mirror to break the curse. The investigation is complete. You barely escape with your lives. Do you dare share this file with anyone else?",
      clues: [],
      puzzlePrompt: "",
      passcode: null, // End of game
      passcodeHint: ""
    }
  ]
};
