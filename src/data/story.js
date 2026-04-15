export const storyData = {
  title: "The Blackwood Curse",
  description: "A 1924 Investigative File. To proceed, group consensus on the passcode is required.",
  phases: [
    {
      id: 1,
      name: "The Cryptic Summons",
      content: "October 14th, 1924. A letter arrived at your agency, addressed directly to Chief Investigator James. It is from Peter Blackwood, heir to the estate, written in a frantic rush. He claimed the shadows in his manor were whispering his name. He has since vanished. Detective Lawrence searched the room and found nothing but this letter on Peter's desk.",
      clues: [
        { type: "text", content: "My dearest investigators... James, Lawrence... if you are reading this, the 'RAVEN' has taken me. Do not trust the servants, especially Paul the butler and Peris the maid. They know more than they let on. Find the diary." },
        { type: "image", src: "/occult_letter.png", alt: "A typewritten letter with a strange crest" },
      ],
      puzzlePrompt: "What entity did Peter claim took him?",
      passcode: "RAVEN",
      passcodeHint: "Look closely at the capitalization in Peter's final words."
    },
    {
      id: 2,
      name: "The Manor's History",
      content: "You arrive at Blackwood Manor. Moses, the old groundskeeper, reluctantly unlocks the rusted gates. Inside the library, the family lawyer Dedan tells you that Peter's wealthy aunt, Peninah, was the last to see him. You find an old newspaper clipping hidden behind Peter's portrait.",
      clues: [
        { type: "image", src: "/manor_photo.png", alt: "Photograph of Blackwood Manor" },
        { type: "text", content: "The clipping speaks of a tragic fire that occurred in the East Wing decades ago. The year of the fire is circled in dried red ink." },
        { type: "text", content: "Excerpt: 'The grand gala of 1893 ended in ash and sorrow. The master of the house was never found, but his pocket watch was discovered frozen exactly at midnight. Aunt Peninah refused to comment.'" }
      ],
      puzzlePrompt: "What year did the original tragedy occur at the manor?",
      passcode: "1893",
      passcodeHint: "The year is explicitly mentioned in the newspaper excerpt."
    },
    {
      id: 3,
      name: "The Seance Transcript",
      content: "Deep in the cellar, following a tip from the mysterious neighbor Racheal, you uncover a hidden room filled with occult paraphernalia. A phonograph starts playing on its own. A seance took place here, led by the spiritualist Janet.",
      clues: [
        { type: "text", content: "Janet's Voice on the recording: 'We call upon the spirit of the lost master. We call upon MALACHAI. Show us the path... Ah! The flame flickers... he is here. He demands a sacrifice in the name of the old blood.'" },
        { type: "text", content: "Paul's Voice in the background: 'Janet, are you sure about this? Paul the butler warned us Peter is not safe...'" }
      ],
      puzzlePrompt: "What is the name of the spirit summoned in the cellar by Janet?",
      passcode: "MALACHAI",
      passcodeHint: "The name was spoken entirely in capital letters by Janet during the seance."
    },
    {
      id: 4,
      name: "The Final Confrontation",
      content: "As you speak the name MALACHAI, the temperature drops below freezing. The shadows detach from the walls and form a figure. Peter Blackwood was never a victim... he was the vessel! Together with James, Lawrence, and Moses, you shatter the cursed mirror, breaking the entity's hold. The investigation is complete, and Peter is freed. You all barely escape with your lives. Do you dare share this file with anyone else?",
      clues: [],
      puzzlePrompt: "",
      passcode: null, // End of game
      passcodeHint: ""
    }
  ]
};
