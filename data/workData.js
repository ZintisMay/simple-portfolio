let workData = [
  {
    name: "cascadeBlonde",
    year: 2018,
    properName: "Cascade Blonde",
    text: "",
    imageURL: "",
    image: "Fireshot-CB.png",
    linkURL:
      "https://web.archive.org/web/20180801221649/https://www.cascadeblonde.com/",
    description:
      "Cascade Blonde is a brand of Tennessee whiskey. For their site I handled translating mockups into HTML, CSS, and Javascript animations. This was one of the first sites I ever worked on, and the first site I worked on solo.",
  },
  {
    name: "quakerCityShrubs",
    year: 2018,
    properName: "Quaker City Shrubs",
    text: "",
    imageURL: "",
    image: "Fireshot-QC.png",
    linkURL: "http://www.quakercityshrubs.com/",
    description:
      "QC Shrubs is a marketing site from out major client, Diageo. I was responsible for architecture, structure, UI and UX development. We used Gulp / Nunjucks to handle HTML templating and SCSS.",
  },
  {
    name: "joinThePact",
    year: 2018,
    properName: "Join The Pact",
    text: "",
    imageURL: "",
    image: "Fireshot-JTP.png",
    linkURL:
      "https://web.archive.org/web/20191221232042/https://www.jointhepact.com/",
    description:
      "JTP's purpose is for people to pledge against drunk driving. It's major feature is to display all user signups on an interactive world map, showing the location of millions of users in many countries.<br><br>I handled architecture, localization, database design, and implementation. Built using Gulp/Nunjucks to generate the pages, Leaflet.js for an interactive map, and MySql for user signups.",
  },
  {
    name: "kikoriWhiskey",
    year: 2019,
    properName: "Kikori Whiskey",
    text: "",
    imageURL: "",
    image: "Fireshot-KW.png",
    linkURL: "https://www.kikoriwhiskey.com/",
    description:
      "Kikori is a marketing site for Japanese rice whiskey. Originally hosted on Wordpress, the client managed to lose control of the site hosting and had no backups. I designed a custom Node scraper to pull the content into JSON and process it for Gulp / Nunjucks consume and create identical pages. We chose a simpler suite of technologies to build it to allow the client an easier time with future updates and maintenance: HTML, SCSS, JS, JQuery, and various JS libraries to help with the UI. I handled this project from start to finish.",
  },
  {
    name: "unitedHealthcare",
    year: 2020,
    properName: "United Healthcare",
    text: "",
    imageURL: "",
    image: "uhc.png",
    linkURL: "https://www.uhc.com/",
    description:
      "At UHC I worked as a Web Developer on various internal facing tools. Our primary work was on a sign-up portal for Doctors to become healthcare providers under the UHC insurance program. This portal was written with React, Node, Mongo and RxJs. The business logic was well documented and very thorough, with a huge amount of data being pulled from various API's to make the signup process easy for the user. I also created prototypes for analytics dashboards to consume company data and provide visualizations for executives. These tools also utilized React and Node.",
  },
  {
    name: "TakedaCT",
    year: 2021,
    properName: "Takeda Clinical Trials",
    text: "",
    imageURL: "",
    image: "takedaCT.png",
    linkURL: "https://clinicaltrials.takeda.com/",
    description:
      "I came into TCT to implement a number of UI/UX features, cleaned up the user flow and experience, and prototyped a number of experimental UI elements for the client to review. The project was built with React, Node, Express, Redux, SCSS, MySQL, and Mongo.",
  },
  {
    name: "Community.Atlassian.Com",
    year: 2022,
    properName: "Atlassian Community",
    text: "",
    imageURL: "",
    image: "atlassianCommunity.png",
    linkURL: "https://community.atlassian.com/",
    description:
      "Atlassian Community is a forum style site where Atlassian users can go to get help with various products and software, garnering approximately 1.3 million users per month. The community team was responsible for all technical aspects of the site, including Devops and Analytics.<br><br>Community is built on top of a 3rd party platform called Khoros, which is a robust forum product. Khoros allows for significant customization, allowing programmers to provide additional features to the user. We also would take point in the creation of support sites and projects, not built with Khoros. Overall we utilized Freemarker (Java templating language), Node, Mongo, MySQL, and React.<br><br>We also would often collaborate with other teams across Atlassian, teams focused on initiatives involving Analytics, AI Innovation, customer service, customer retention, and others.",
  },
  {
    name: "RCSB.org",
    year: 2023,
    properName:
      "Research Collaboratory for Structural Bioinformatics (RCSB.org)",
    text: "",
    imageURL: "",
    image: "RCSB.png",
    linkURL: "https://www.rcsb.org/",
    description:
      "RCSB is a scientific site where millions of users look up research data on proteins and perform robust searches across protein structures. I managed the Front-End team, gathered requirements, architecture design, prototyping, development, and documentation of new and existing projects.<br><br>Most projects utilized React and Node, with Redux for state management, Mysql as the DB, and Elasticsearch to sift through the data. I also worked with older projects, largely written in Node, Handlebars, and utilizing numerous internal libraries to handle the parsing and visualization of scientific data. Most notable being JSmol and Mol*.<br><br>As team lead, I worked with onboarding new members, training, project management, ticket management, collaboration with other teams and stakeholders. This role was fairly challenging due to the depth of knowledge required in Biology and Bioinformatics, and the wide variety of stakeholders (scientific, administrative, academic).",
  },
];

workData.sort((a, b) => a.year - b.year).reverse();
