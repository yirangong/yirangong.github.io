// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-build",
          title: "Build",
          description: "Turning ideas into products, workflows, agents, and experiments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/build/";
          },
        },{id: "nav-understand",
          title: "Understand",
          description: "Investigating cognition, decisions, interaction, and evaluation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/understand/";
          },
        },{id: "nav-field-notes",
          title: "Field Notes",
          description: "Observations of people, places, and systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/field-notes/";
          },
        },{id: "nav-about",
          title: "About",
          description: "Working across applied AI, cognitive science, and human behavior.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A concise record of education, research, applied AI work, and selected projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-from-model-evaluation-to-shipped-ai-video-workflows",
          title: 'From model evaluation to shipped AI video workflows',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/applied-ai-product-operations/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yirangong", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
