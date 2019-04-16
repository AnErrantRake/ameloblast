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
        journalEntry: ["Displayed text",
                       "page2"],
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
        journalEntry: ["Displayed text",
                       "page2"],
        citation: "GeethikaB.2016Ohp"
      },
      position: 2140
    }
  )
]
