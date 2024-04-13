// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nathanieldavies', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['nathanieldavies/Bioinformatics', 'nathanieldavies/Projects'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Synthetic Approaches Towards A Marine Natural Product, Anomoian B Poster',
          description:
            'Poster presentation at the Annual California State University, Stanislaus Student Research Presentation',
          imageUrl:
            'https://nathanieldavies.github.io/pdf/Anomoian B.jpeg',
          link: 'https://anomoianbposter.com',
        },
        {
          title: 'SERSCA Competition at CSU Stanislaus',
          description:
            '1st place in oral presentations for Biological Sciences',
          imageUrl:
            'https://github.com/NathanielDavies/nathanieldavies.github.io/blob/main/pdf/SCERSCA%20Comp.%20Presentation.pptx',
          link: 'https://serscapresentation.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nathaniel Davies',
    description: '',
    imageURL: 'https://github.com/NathanielDavies/nathanieldavies.github.io/blob/main/pdf/Headshot%20Compressed.jpeg',
  },
  social: {
    linkedin: 'nathanielpdavies',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://nathanieldavies.github.io',
    phone: '',
    email: 'nathanielpdavies@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/NathanielDavies/nathanieldavies.github.io/raw/main/pdf/NathanielDavies-CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Laboratory Research', 'Biotechnology', 'Experience working with animals'
  ],
  experiences: [
    {
      company: 'California State University, Stanislaus',
      position: 'Undergraduate Researcher',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://www.csustan.edu',
    },
    {
      company: 'Canal Veterinary Hospital',
      position: 'Veterinary Nurse',
      from: 'February 2020',
      to: 'January 2023',
      companyLink: '',
    },

    {
      company: 'Westside Ministries',
      position: 'Dance Instructor',
      from: 'May 2017',
      to: 'October 2019',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S Biological Sciences with Molecular, Cellular, and Microbiology concentration',
      from: '2024',
      to: '',
    },
  ],
  presentations: [
    {
      title: 'SERSCA Research Competition',
      conferenceName: '38th Annual Student Research Competition',
      journalName: 'Synthetic Approaches Towards A Marine Natural Product, Anomoian B',
      authors: 'Nathaniel Davies, Lydia Stiles',
      link: '',
      description: '1st place in the oral presenation event at the 38th Annual Student Research Competition',
    },
    {
      title: 'Poster Presentation',
      conferenceName: 'CSU Stanislaus Undergraduate Research Conference',
      journalName: 'Synthetic Approaches Towards A Marine Natural Product, Anomoian B',
      authors: 'Nathaniel Davies',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
