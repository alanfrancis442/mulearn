const mainlink = "https://learn.mulearn.org"
export const links = [
  {
    head: -1,
    name: "About",
    submenu: true,
    sublinks: [
      {
        name: "Key Pages",
        submenu: true,
        sublinks: [
          {
            name: "Our Team",
            submenu: false,
            sublinks: [],
            link: "/team",
            foreign: false,
          },
          {
            name: "Terms & Conditions",
            submenu: false,
            sublinks: [],
            link: "/termsandconditions",
            foreign: false,
          },
          {
            name: "Privacy Policy",
            submenu: false,
            sublinks: [],
            link: "/privacypolicy",
            foreign: false,
          },
        ],
      },

      {
        name: "Partners",
        submenu: true,
        sublinks: [
          {
            name: "Community Partners",
            submenu: false,
            sublinks: [],
            link: "/community-partners",
            foreign: false,
          },
          {
            name: "Company Partners",
            submenu: false,
            sublinks: [],
            link: "/company-partners",
            foreign: false,
          },
        ],
      },
      {
        name: "Participate",
        submenu: true,
        sublinks: [
          {
            name: "Enablers & Mentors",
            submenu: false,
            sublinks: [],
            link: "/participate",
            foreign: false,
          },
        ],
      },
      {
        name: "Leaderboard",
        submenu: true,
        sublinks: [
          {
            name: "Overall Leaderboards",
            link: "/leaderboard",
          },
          {
            name: "Monthly Leaderboards",
            link: "/leaderboard/monthly",
          },
        ],
      },
      {
        name: "Media",
        submenu: true,
        sublinks: [
          {
            name: "Gallery",
            submenu: false,
            sublinks: [],
            link: "/gallery",
            foreign: false,
          },
          {
            name: "News",
            submenu: false,
            sublinks: [],
            link: "/news",
            foreign: false,
          },
          {
            name: "Blogs",
            submenu: false,
            sublinks: [],
            link: "/blogs",
            foreign: false,
          },
        ],
      },
      {
        name: "Campus Chapters",
        submenu: true,
        sublinks: [
          {
            name: "Home Page",
            submenu: false,
            sublinks: [],
            link: "/campuschapters",
            foreign: false,
          },
          {
            name: "Campus Logo Generator",
            submenu: false,
            sublinks: [],
            link: "/campuschapters/#logo-generator",
            foreign: false,
          },
          {
            name: "Success Stories",
            submenu: false,
            sublinks: [],
            link: "/blogs",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Programs",
    submenu: true,
    sublinks: [
      {
        head: 1,
        name: "Flagship",
        submenu: true,
        sublinks: [
          {
            name: "Foundation Program",
            submenu: false,
            sublinks: [],
            link: "https://foundation.mulearn.org",
            foreign: true,
          },
          {
            name: "Art of Teaching",
            submenu: false,
            sublinks: [],
            link: "/artofteaching",
            foreign: false,
          },
        ],
      },
      {
        head: 1,
        name: "Ongoing",
        submenu: true,
        sublinks: [
          {
            name: "Bootcamps",
            submenu: false,
            sublinks: [],
            link: "/bootcamps",
            foreign: false,
          },
        ],
      },
      {
        head: 1,
        name: "Others",
        submenu: true,
        sublinks: [
          {
            name: "Wiki Syllabus",
            submenu: false,
            sublinks: [],
            link: "/wikisyllabus",
            foreign: false,
          },
          {
            name: "Hacktober Fest",
            submenu: false,
            sublinks: [],
            link: "/hacktoberfest",
            foreign: false,
          },
          {
            name: "Build For Team",
            submenu: false,
            sublinks: [],
            link: "/buildforteam",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Events",
    submenu: true,
    sublinks: [
      {
        head: 2,
        name: "Global Calendar",
        submenu: true,
        sublinks: [
          {
            name: "Calendar",
            link: "/calendar",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: "Announcements",
        submenu: true,
        sublinks: [
          {
            name: "Announcements",
            link: "/announcements",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: "Weekly Events",
        submenu: true,
        sublinks: [
          {
            name: "Home",
            link: "/events",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Inspiration Station",
            link: "/isr",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Mentor Connect",
            link: "/events/mentorconnect",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Open Mic",
            link: "/events/openmic",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Salt Mango Tree",
            link: "/events/saltmangotree",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Interest Group",
    submenu: true,
    sublinks: [
      {
        head: 3,
        name: "Interest Groups",
        submenu: true,
        sublinks: [
          {
            name: "Home Page",
            link: mainlink + "/",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Android Development",
            link: mainlink + "/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Artificial Intelligence",
            link: mainlink + "/ai",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Civil Engineering",
            link: mainlink + "/civil",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Cyber Security",
            link: mainlink + "/cybersec",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "IoT",
            link: mainlink + "/iot",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Product Management",
            link: mainlink + "/pm",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "UX",
            link: mainlink + "/ux",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Web Development",
            link: mainlink + "/web",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Bootcamps",
        submenu: true,
        sublinks: [
          {
            name: "Home",
            link: mainlink + "/bootcamps",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Android",
            link: mainlink + "/bootcamps/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Artificial Intelligence",
            link: mainlink + "/bootcamps/ai",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "CTF",
            link: mainlink + "/bootcamps/ctf",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Flutter",
            link: mainlink + "/bootcamps/flutter",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Rust",
            link: mainlink + "/bootcamps/rust",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "JavaScript",
            link: mainlink + "/bootcamps/javascript",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Python",
            link: mainlink + "/bootcamps/python",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },

      {
        head: 3,
        name: "Practice",
        submenu: true,
        sublinks: [
          {
            name: "OpenSource Projects",
            link: mainlink + "/opensource",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Problem Shelf",
            link: mainlink + "/problemshelves",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Challenges",
            link: mainlink + "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Courses",
            link: mainlink + "/courses",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "API Setu",
            link: mainlink + "/apisetu",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Learning Circles",
        submenu: true,
        sublinks: [
          {
            name: "Create Circle",
            link: mainlink + "/create",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Join Circles",
            link: mainlink + "/join",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Search",
        submenu: true,
        sublinks: [
          {
            name: "Mentor Directory",
            link: mainlink + "/mentors",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Existing Circles",
            link: mainlink + "/searchcircles",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
]
