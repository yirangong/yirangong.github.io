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
          description: "Education, applied AI work, research, and selected projects — as a PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-from-model-evaluation-to-shipped-ai-video-workflows",
          title: 'From model evaluation to shipped AI video workflows',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/applied-ai-product-operations/";
            },},{id: "projects-building-a-community-growth-system-without-automating-away-trust",
          title: 'Building a community-growth system without automating away trust',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/community-growth-operations/";
            },},{id: "projects-from-root-cause-to-dashboard-fixed-broken-ai-template-analytics",
          title: 'From root-cause to dashboard: fixed broken AI-template analytics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/product-analytics-infrastructure/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%72%61%6E%67%6F%6E%67%39%39@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yirangong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yiran-gong", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
