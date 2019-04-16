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
        title: "Testing",
        description: "A test landmark"
      },
      notes: {
        journalEntry: ["Displayed text","page2"],
        citation: "sources indexed in citations.bib"
      },
      position: 300
    }
  ),

  new Landmark().buildLandmark(
    {
      type: "info",
      graphic: null,
      info: {
        title: "Testing 2",
        description: "A second test landmark"
      },
      notes: {
        journalEntry: ["Displayed text","page2"],
        citation: "sources indexed in citations.bib"
      },
      position: 600
    }
  ),

  new Landmark().buildLandmark(
    {
      type: "info",
      graphic: null,
      info: {
        title: "Testing 3",
        description: "A third test landmark"
      },
      notes: {
        journalEntry: ["Displayed text","page2"],
        citation: "sources indexed in citations.bib"
      },
      position: 900
    }
  )
]
