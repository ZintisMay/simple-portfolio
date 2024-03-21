let workData = [
  {
    name: "quakerCityShrubs",
    year: 2018,
    websiteFullURL: "http://www.quakercityshrubs.com/",
    properName: "Quaker City Shrubs",
    text: "",
    imageURL: "",
    image: "Fireshot-QC.png",
    linkURL: "http://www.quakercityshrubs.com/",
    description:
      "QC Shrubs is a brand of malt beverage, with a distinct site meant to convey its distinct flavor.I was responsible for website architecture, structure, UI and UX development.I translated UI mockups into HTML and CSS using the Gulp/ Nunjucks engine.",
  },
  {
    name: "joinThePact",
    year: 2018,
    websiteFullURL: "https://www.jointhepact.com/en-us/",
    properName: "Join The Pact",
    text: "",
    imageURL: "",
    image: "Fireshot-JTP.png",
    linkURL: "https://www.jointhepact.com/en-us/",
    description:
      "Join The Pact is a site for people to pledge against drunk driving. I was responsible for website architecture, structure, localization,    and database design.I translated UI mockups into HTML and CSS using the Gulp/Nunjucks engine.",
  },
  {
    name: "kikoriWhiskey",
    year: 2019,
    websiteFullURL: "https://www.kikoriwhiskey.com/",
    properName: "Kikori Whiskey",
    text: "",
    imageURL: "",
    image: "Fireshot-KW.png",
    linkURL: "https://www.kikoriwhiskey.com/",
    description:
      "Kikori is a Japanese rice whiskey. Originally Wordpress, I designed a custom scraper to pull the content into JSON and process it for the Gulp / Nunjucks engine to consume.I handled nearly every step in the process.",
  },
  {
    name: "cascadeBlonde",
    year: 2018,
    websiteFullURL: "https://www.cascadeblonde.com/",
    properName: "Cascade Blonde",
    text: "",
    imageURL: "",
    image: "Fireshot-CB.png",
    linkURL: "https://www.cascadeblonde.com/",
    description:
      "Cascade Blonde is a brand of Tennessee whiskey. For their site I handled translating the mockups into HTML, CSS, and Javascript animations.This site was a lot of fun to work on, with a nice color pallette interesting layout.",
  },
  {
    name: "unitedHealthcare",
    year: 2021,
    websiteFullURL: "https://www.uhc.com/",
    properName: "United Healthcare",
    text: "",
    imageURL: "",
    image: "uhc.png",
    linkURL: "",
    description:
      "I was with UHC for a short while before deciding that it wasn't for me. The work environment was not what I was expecting, and I didn't have strong leadership or mentorship while there. During my time I started adding features to their internal facing portal for Doctors to sign up as a UHC provider, and took point in another internal facing tool for business analysts.",
  },
  {
    name: "TakedaCT",
    year: 2021,
    websiteFullURL: "https://clinicaltrials.takeda.com/",
    properName: "Takeda Clinical Trials",
    text: "",
    imageURL: "",
    image: "takedaCT.png",
    linkURL: "",
    description:
      "For TCT I worked on implementing UI and UX improvements, and polishing the functionality of a fairly complex search page.I also created a number of prototype UI experiments proposed by the client.",
  },
  {
    name: "Community.Atlassian.Com",
    year: 2021,
    websiteFullURL: "https://community.atlassian.com/",
    properName: "Atlassian Community",
    text: "",
    imageURL: "",
    image: "atlassianCommunity.png",
    linkURL: "",
    description:
      "Community is a forum style site where Atlassian users can go to get help with various products and software. I did feature implementation, bug fixes, deployments, project planning, ticket management, research, prototyping, and some light UI/UX design.",
  },
  {
    name: "RCSB.org",
    year: 2021,
    websiteFullURL: "https://www.rcsb.org/",
    properName: "Research Collaboratory for Structural Bioinformatics",
    text: "",
    imageURL: "",
    image: "RCSB.png",
    linkURL: "",
    description:
      "RCSB is a scientific site where users can look up research data on proteins, and perform robust searches on protein structures. As lead dev, I handled feature implementation, bug fixing, project management, training, onboarding, refactoring, documentation, and various other tasks.",
  },
];

workData.sort((a, b) => a.year - b.year).reverse();
