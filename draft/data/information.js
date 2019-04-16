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
        journalEntry: ["Displayed text","page2"],
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
        journalEntry: ["Displayed text","page2"],
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
        journalEntry: ["Displayed text","page2"],
        citation: "GeethikaB.2016Ohp"
      },
      position: 2140
    }
  )
]
