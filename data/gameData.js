let gameData = [
  {
    name: "Cave Paintings",
    year: 2016,
    companySaleLink: "https://rnrgames.com/cave-paintings",
    youtubeVideoLink: "https://www.youtube.com/watch?v=9iBpWkupsWc",
    BGGpageLink: "https://boardgamegeek.com/boardgame/255712/cave-paintings",
    linkURL: "/CP",
    abbreviation: "CP",
    description:
      "Draw poorly? No matter! Cave Paintings is a drawing game where drawing poorly is the best way to play! Players have a minute to make their cave paintings, before guessing each other's.",
    image: "CP.png",
  },
  {
    name: "Sector Z4X",
    year: 2018,
    youtubeVideoLink: "https://youtu.be/anlTpMSCmxk",
    linkURL: "/Z4X",
    abbreviation: "Z4X",
    description:
      "Take to the stars in this 4X space opera. Sector Z4X aims to be the most 4X board game, using streamlined euro mechanics to deliver a sci-fi civilization building experience.<br><br>The plan is to put this on Kickstarter in early 2025 (if all goes well!).",
    image: "Z4X.png",
  },
  {
    name: "Wise Guys and Lies",
    year: 2014,
    youtubeVideoLink: "https://youtu.be/UAUDUzu2ybQ",
    linkURL: "/WGAL",
    abbreviation: "WGAL",
    description:
      'Do you have what it takes to be the most devious crime boss in town? A take that card game of player politics, Wise Guys and Lies is a game where nobody believes the truth. Formerly named "Be Honest"',
    image: "WGAL.png",
  },
  {
    name: "Huts",
    year: 2014,
    linkURL: "/HUTS",
    description:
      "A game about small islands and angry gods. In Huts, you are a tribal god, petty and cruel. You send omens, miracles and disasters to the different tribes, to have only the ones who worship you remaining.",
    image: "HUTS.png",
  },
  {
    name: "Belief in the Old Gods",
    year: 2016,
    linkURL: "/BITOG",
    abbreviation: "BITOG",
    description:
      "The Great Old Ones are forgotton monsters, sleeping in space, under the earth, at the bottom of the sea. Inspired by the works of HP Lovecraft, play as those unspeakable horrors behind the veil, manipulating cultists to carry out your wishes.",
    image: "BITOG.png",
  },
  {
    name: "Draft Beer",
    year: 2016,
    youtubeVideoLink: "https://youtu.be/TBF-ou-G1Yc",
    BGGpageLink: "https://boardgamegeek.com/boardgame/297367/draft-beer",
    linkURL: "/DB",
    abbreviation: "DB",
    description:
      "You've fulfilled you lifelong dream, to open a bar! But you find that all your friends have also opened bars, in the same town even! So stock your bars in this quick to learn, hard to master, pick ans pass card drafting game.",
    image: "DB.png",
  },
  {
    name: "Flower Shop",
    year: 2017,
    youtubeVideoLink: "https://youtu.be/b5eSvVd-_u8",
    linkURL: "/FS",
    abbreviation: "FS",
    description:
      "Take a stroll through a greenhouse to make the most beautiful bouquets for you clients. Flower Shop is a easy to learn card game that uses clear cards to create floral arrangements.",
    image: "FS.png",
  },
  {
    name: "Drawing Lots",
    year: 2018,
    linkURL: "/DL",
    description:
      'Drawing Lots is a "Flip and Write" style game. Players bid money in order to gain blueprints or empty lots on the grid. With the right combinations of lots and blueprints, they can develop the town into a sprawling city.',
    image: "DL.png",
  },
];

gameData.sort((a, b) => a.year < b.year);
