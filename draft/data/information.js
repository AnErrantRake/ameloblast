// translations of technical information, formatted for in-game use
var LANDMARKS = [
  new Landmark().buildLandmark(
    {
      type: "none",
      graphic: null,
      info: {
        title: "Home",
        description: "Player character's start point"
      },
      notes: null,
      position: 0
    }
  ),

  new Landmark().buildLandmark(
    {
      type: "info",
      graphic: null,
      info: {
        title: "Oropharynx",
        description: "A bearded skeleton of a man stands before you, waving a ream of papers wildly. You can't understand anything he's saying, but the writing on some of the pages looks legible."
      },
      notes: {
        journalEntry: ["Dental plaque seems to be the cause of many of our mouth diseases. What plaque is remains unknown to me, but it seems toothbrushes and floss are effective for getting rid of it. Regular usage of both used to be considered healthy. The dental tomes recommend regular visits to a 'dentist', who could measure plaque and check for disease. High plaque could be identified by bleeding from the gums.",
                       "\nBrushing at least once a day seems most effective.\nFlossing is less clear, but at least a little.\nVisits to a dentist are highly recommended, if one can be found.\nBleeding from probing indicates disease."],
        citation: "BroadbentJonathanM.2011Dpao"
      },
      position: 600
    }
  ),

  new Landmark().buildLandmark(
    {
      type: "info",
      graphic: null,
      info: {
        title: "Palatoglossal Arch",
        description: "An elderly woman is lying in the sun, ringed by crinkled papers. She's unresponsive, but some of the papers seem recoverable."
      },
      notes: {
        journalEntry: ["Gingivitis - an indicator of poor oral hygiene\nFloss - associated with good oral hygiene, unknown relation to disease prevention\nDentist - regular visits associated with good health\nLongterm - regular cleaning more important than intensity",
                       "Floss was used primarily for cleaning between the teeth. Other tools were sometimes used for the same purpose, but toothbrushes were not considered effective for this purpose. Gaps between the gum and the teeth were best avoided by regular flossing, although even our forebears struggled with this task. Self-care important to preventing disease."],
        citation: "CrocombeLA.2012Isic"
      },
      position: 1749
    }
  ),

  new Landmark().buildLandmark(
    {
      type: "info",
      graphic: null,
      info: {
        title: "Palatine Tonsil",
        description: "A literal skeleton sits atop an enormous pile of books. Its left hand grasps an ornately detailed and extensive manuscript titled 'The Lost Art of Dentistry'. Unfortunately it disintegrates when you pick it up, leaving only a bookmark covered in hand-written notes."
      },
      notes: {
        journalEntry: ["The mealstorms may have taken my daughter, but now I understand the ancient's tools! I shall have my revenge, in this life or the next! When brushing, I must focus on the gumline and between the teeth. An electric toothbrush would prove useful in this. They also used abrasive toothpastes with active ingredients while brushing. Best of all for getting between the teeth is",
                       "flossing. Daily. I haven't seen this anywhere, but the ancients believed 'chewing gum' worked to clear away food debris, which is what the damage-causing organisms rely on to survive. Plaque! They're talking about plaque! These organisms can also be destroyed by some mouthwashes. Maybe that's why mouthwashes have that burning sensation. A small price to pay in the name of health!"],
        citation: "GeethikaB.2016Ohp"
      },
      position: 2140
    }
  )
]
