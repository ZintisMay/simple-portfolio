let teachingData = [
  {
    name: "RCBC",
    year: 2018,
    properName: "Rutgers Coding Bootcamp",
    image: "img_2456_360.jpg",
    linkURL: "https://trilogy.com/",
    description:
      "Rutgers Coding Bootcamp was the same program that I entered Web Development with. Right after I finished the course I was invited to become a TA, as I had shown a lot of the qualities they look for in their teaching staff. Patience, passion, focused on helping others. This was my first foray into teaching, and was a great way to solidify my understanding of many programming topics.",
  },
  {
    name: "Wyzant",
    year: 2020,
    properName: "Wyzant",
    image: "wyzant.png",
    linkURL: "https://www.wyzant.com/",
    description:
      "Wyzant is an online platform that connects students and teachers across numerous topics, for in person and remote lessons. Back in 2020 I learned about these kinds of sites and services, and spent quite a lot of time helping students (and professionals!) learn more about coding. This really solidified a lot of my skills as a teacher and tutor, giving me thousands of hours of practice working with individuals of all skill levels. From high school students learning their first lines of coding, to seasoned professionals who just need a little help figuring out the latest tech.",
  },
  {
    name: "Mentor",
    year: 2019,
    properName: "Mentor",
    image: "mentoring.png",
    description:
      "Mentoring has been one of the most fulfilling things I've done, professionally. As a co-worker, teacher, tutor, I've managed to make a few dozen contacts with individuals who are trying to get ahead in the programming space. I've kept in touch with them over years, checking in and providing support and direction as needed. It is very satisfying seeing everyone achieve their goals, and it's great knowing that I had a small part in that.",
  },
  {
    name: "devX",
    year: 2021,
    properName: "DevX",
    image: "wedevx.png",
    linkURL: "https://www.wedevx.com/",
    description:
      "Following my time on Wyzant, word got around and an online bootcamp reached out to me to teach a class. Primarily they focused on Java development, but were branching out into other topics such as Web Design and Web Development. I was one of their early teachers of a Fundamental Web class. I worked with 20 students for 8 weeks (16 classes) to teach completely green students core HTML/CSS, and build up some portfolio pieces. <br><br> Later on, DevX reached out to me again to teach another remote class, this time broadcasting to colleges in Kyrgystan. This was an awesome opportunity (and a lot of work), but I managed to put together some great course materials and deliver the best classes I knew how to.",
  },
];

workData.sort((a, b) => a.year - b.year).reverse();
