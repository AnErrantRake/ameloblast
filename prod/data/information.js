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
        citationKey: "BroadbentJonathanM.2011Dpao",
        citation: "@article{BroadbentJonathanM.2011Dpao,\
          issn = {0002-8177},\
          abstract = {BackgroundStudies investigating the role of dental plaque in oral disease have focused primarily on the quantity and quality of plaque at a given point in time. No large-scale epidemiologic research has been conducted regarding the continuity and change in plaque levels across the long term and the association of plaque levels with oral health. MethodsThe authors used data from the Dunedin Multidisciplinary Health and Development Study. Collection of dental plaque data occurred at ages 5, 9, 15, 18, 26 and 32 years by means of the Simplified Oral Hygiene Index. The authors assessed oral health outcomes when participants were aged 32 years. ResultsThe authors identified three plaque trajectory groups (high, n = 357; medium, n = 450; and low; n = 104) and found substantial, statistically significant differences in both caries and periodontal disease experience among those groups. For example, after the authors controlled for sex, socioeconomic status and dental visiting pattern, they found that participants in the high-plaque-trajectory group lost nearly five times more teeth owing to caries than did those in the low-plaque-trajectory group. ConclusionsAcross the long term, participants in the high-plaque-trajectory group were more likely to experience caries, periodontal disease and subsequent tooth loss than were those in the low- or medium-plaque-trajectory groups, and they experienced all those conditions with greater severity. Clinical ImplicationsImproving oral health requires emphasizing long-term self-care, as well as providing broad public health and health promotion measures that promote and support oral self-care. This study's findings suggest that poor oral hygiene and smoking have a synergistic effect on periodontal disease experience.},\
          journal = {The Journal of the American Dental Association},\
          pages = {415--426},\
          volume = {142},\
          publisher = {Elsevier Inc.},\
          number = {4},\
          year = {2011},\
          title = {Dental plaque and oral health during the first 32 years of life},\
          language = {eng},\
          author = {Broadbent, Jonathan M. and Thomson, W. Murray and Boyens, John V. and Poulton, Richie},\
          keywords = {Longitudinal Study ; Adult ; Socioeconomic Status ; Oral Hygiene ; Dental Neglect ; Smoking ; AL: Attachment Loss ; Bic: Bayesian Information Criterion ; Dmfs: Decayed, Missing or Filled Surfaces of Permanent Teeth ; Dmhds: Dunedin Multidisciplinary Health and Development Study ; Gbtm: Group-Based Trajectory Modeling ; Gr: Gingival Recession ; Ohi-S: Simplified Oral Hygiene Index ; PD: Pocket Depth ; Ses: Socioeconomic Status},\
        }"
      },
      position: 1000 + getRandomInt(600)
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
        citationKey: "CrocombeLA.2012Isic",
        citation: "@article{CrocombeLA.2012Isic,\
          issn = {0022-3484},\
          abstract = {Crocombe LA, Brennan DS, Slade GD, Loc DO. Is self interdental cleaning associated with dental plaque levels, dental calculus, gingivitis and periodontal disease? J Periodont Res 2012; 47: 188–197. © 2011 John Wiley & Sons A/S To ascertain whether interdental cleaning behaviours of Australian adults were associated with lower levels of plaque, gingivitis and periodontal disease. Data were obtained from the National Survey of Adult Oral Health 2004–06. Outcome variables were three indicators of oral hygiene outcomes (the presence or not of dental plaque, dental calculus and gingivitis) and two of periodontal disease (the presence or not of at least one tooth with a periodontal pocket or clinical attachment loss of ≥ 4 mm). The independent variable was classified into the following three groups: regularly clean interproximally ‘at least daily’ (daily+); ‘less than daily’ (< daily); and ‘do not regularly clean interproximally’ (reference group). Poisson regression with robust variance estimation was used to calculate prevalence ratios (PRs) and 95% confidence intervals (95% CIs) relative to the reference group, adjusted for covariates. Regular self interdental cleaning was associated with less dental plaque (< daily, PR = 0.89, 95% CI = 0.84, 0.95; and daily+, PR = 0.89, 95% CI = 0.82, 0.96), less dental calculus (< daily, PR = 0.88, 95% CI = 0.80, 0.97; and daily+, PR = 0.79, 95% CI = 0.70, 0.89) and lower levels of moderate/severe gingivitis (daily+, PR = 0.85, 95% CI = 0.77, 0.94). Periodontal pocketing was less likely for the < daily group (PR = 0.61, 95% CI = 0.46, 0.82), but was not associated with daily+ cleaning (PR = 0.99, 95% CI = 0.663, 1.49). There was not a significant association between interdental cleaning and clinical attachment loss (< daily, PR = 0.90, 95% CI = 0.77, 1.05; and daily+, PR = 1.17, 95% CI = 0.95, 1.44). Regular interdental cleaning was associated with better oral hygiene outcomes, such as dental plaque and gingivitis, although there was no significant association between regular interdental cleaning and clinical attachment loss.},\
          journal = {Journal of Periodontal Research},\
          pages = {188--197},\
          volume = {47},\
          publisher = {Blackwell Publishing Ltd},\
          number = {2},\
          year = {2012},\
          title = {Is self interdental cleaning associated with dental plaque levels, dental calculus, gingivitis and periodontal disease?},\
          address = {Oxford, UK},\
          author = {Crocombe, L. A. and Brennan, D. S. and Slade, G. D. and Loc, D. O.},\
          keywords = {Dental Plaque ; Epidemiology ; Oral Hygiene ; Periodontal Health ; Plaque Index ; Pocket Depth},\
        }"
      },
      position: 1800 + getRandomInt(600)
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
        journalEntry: ["The mealstorms may have taken my daughter, but now I understand the ancient's tools! I shall have my revenge, in this life or the next! When brushing, I must focus on the gumline and between the teeth. An electric toothbrush would prove useful in this. They also used abrasive toothpastes with active ingredients while brushing. Best of all for getting between the teeth is flossing. Daily.",
                       "I haven't seen this anywhere, but the ancients believed 'chewing gum' worked to clear away food debris, which is what the damage-causing organisms rely on to survive. Plaque! They're talking about plaque! These organisms can also be destroyed by some mouthwashes. That might explain the funny taste and feeling. A small price to pay in the name of health!"],
        citationKey: "GeethikaB.2016Ohp",
        citation: "@article{GeethikaB.2016Ohp,\
          issn = {0976044X},\
          journal = {International Journal of Pharmaceutical Sciences Review and Research},\
          pages = {134--137},\
          volume = {39},\
          publisher = {Global Research Online},\
          number = {2},\
          year = {2016},\
          title = {Oral hygiene products},\
          copyright = {Copyright 2017 Elsevier B.V., All rights reserved.},\
          author = {Geethika, B. and Selvarasu, K.},\
          keywords = {Floss ; Oral Health ; Oral Hygiene ; Products},\
        }"
      },
      position: 2800 + getRandomInt(600)
    }
  )
]

var WEATHER = [
  new Weather().buildWeather(
    {
      type: "Quickbreads",
      severity: 50.0, // fermentable carbs - plaque
      citationKey: "DarbyWalsh.2015Dht"
    }
  ),

  new Weather().buildWeather(
    {
      type: "Fruits",
      severity: 70.0, // natural sugars - plaque and caries
      citationKey: "DarbyWalsh.2015Dht"
    }
  ),

  new Weather().buildWeather(
    {
      type: "Vegetables",
      severity: 20.0, // high fiber, low sugar
      citationKey: "DarbyWalsh.2015Dht"
    }
  ),

  new Weather().buildWeather(
    {
      type: "Cured Meats",
      severity: 10.0, // protein-based
      citationKey: "DarbyWalsh.2015Dht"
    }
  ),

  new Weather().buildWeather(
    {
      type: "Hard Candy",
      severity: 100.0, // refined sugars, held in mouth
      citationKey: "DarbyWalsh.2015Dht"
    }
  ),
]

var DISEASES = [
  new Disease().buildDisease(
    {
      type: "gingivitis",
      severity: 10.0,
      healthThreshold: 7/10,
      citationKey: ""
    }
  ),
]
