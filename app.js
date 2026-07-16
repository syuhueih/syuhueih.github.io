const state = {
  language: "en",
  theme: localStorage.getItem("theme") || "light"
};

const dialogScrollPosition = {
  x: 0,
  y: 0
};

const copy = {
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      publications: "Publications",
      research: "Research",
      news: "News"
    },
    profile: {
      role: "M.S. student in Electrical and Computer Engineering"
    },
    hero: {
      eyebrow: "AI Research Portfolio",
      p1: "I am an M.S. student in Electrical and Computer Engineering at the University of Florida, working at the intersection of Multimodal Large Language Models (MLLMs), Computer Vision (CV), Image Quality Assessment (IQA), medical imaging, and autonomous systems.",
      p2: "My current research focuses on Multimodal Large Language Models (MLLMs) for perceptual quality assessment and medical imaging. I am interested in systems that are accurate, reproducible, efficient, interpretable, and robust across imaging domains.",
      p3: "Before UF, I worked as a research assistant at the IoT Smart Living Laboratory at NTUST, where I developed dense video captioning methods for edge cameras and optimized video understanding models under computational and memory constraints.",
      primary: "View publications",
      secondary: "Explore experience"
    },
    experience: {
      eyebrow: "Timeline",
      title: "Experience"
    },
    research: {
      eyebrow: "Focus Areas",
      title: "Research Interests"
    },
    project: {
      eyebrow: "Built Systems",
      title: "Projects",
      details: "Details",
      closeDetails: "Hide details"
    },
    publication: {
      eyebrow: "Selected Work",
      title: "Selected Publications",
      abstract: "Abstract",
      closeAbstract: "Hide abstract",
      paper: "Paper"
    },
    news: {
      eyebrow: "Updates",
      title: "Recent News"
    }
  },
  zh: {
    nav: {
      experience: "經歷",
      projects: "專案",
      publications: "論文",
      research: "研究",
      news: "近況"
    },
    profile: {
      role: "佛羅里達大學電機與電腦工程碩士生"
    },
    hero: {
      eyebrow: "AI Research Portfolio",
      p1: "我目前是佛羅里達大學電機與電腦工程碩士生，研究興趣橫跨多模態大型語言模型、電腦視覺、影像品質評估、醫學影像與自主系統。",
      p2: "目前研究聚焦於用於感知品質評估與醫學影像的多模態大型語言模型。我關注的不只是 benchmark 上的準確度，也包含可重現性、效率、可解釋性，以及跨影像領域的穩健性。",
      p3: "在 UF 之前，我曾於台科大 IoT Smart Living Laboratory 擔任研究助理，開發 edge camera 的 dense video captioning 方法，並在計算與記憶體限制下最佳化 video understanding 模型。",
      primary: "查看論文",
      secondary: "瀏覽經歷"
    },
    experience: {
      eyebrow: "Timeline",
      title: "Experience"
    },
    research: {
      eyebrow: "Focus Areas",
      title: "Research Interests"
    },
    project: {
      eyebrow: "Built Systems",
      title: "Projects",
      details: "Details",
      closeDetails: "收合"
    },
    publication: {
      eyebrow: "Selected Work",
      title: "Selected Publications",
      abstract: "Abstract",
      closeAbstract: "收合",
      paper: "Paper"
    },
    news: {
      eyebrow: "Updates",
      title: "Recent News"
    }
  }
};

const experiences = [
  {
    name: "Gong Lab",
    period: "2026/05 - Present",
    lines: ["Research Assistant", "Medical Imaging and MLLMs"],
    image: "./assets/images/experience-gong-lab.svg",
    url: "https://gong-lab.com/"
  },
  {
    name: "TEA Lab",
    period: "2026/05 - Present",
    lines: ["Research Assistant", "Anomaly Detection"],
    image: "./assets/images/TEA_lab_logo.jpg",
    url: "https://tea.ece.ufl.edu/"
  },
  {
    name: "University of Florida",
    period: "2025/08 - Present",
    lines: ["M.S. in Electrical and Computer Engineering"],
    image: "./assets/images/uf_logo.jpg",
    url: "https://www.ufl.edu/"
  },
  {
    name: "GatorAI",
    period: "2025/09 - 2025/12",
    lines: ["Team Lead", "Autonomous driving prototype"],
    image: "./assets/images/gator_ai_logo.jpeg",
    url: "#publications"
  },
  {
    name: "National Taiwan University of Science and Technology",
    period: "2021/09 - 2023/06",
    lines: ["M.S. in Electrical Engineering", "Research Assistant"],
    image: "./assets/images/Taiwan_Tech_logo.png",
    url: "https://www.ntust.edu.tw/"
  }
];

const interests = [
  "Multimodal LLMs (MLLMs)",
  "Computer Vision (CV)",
  "Image Quality Assessment (IQA)",
  "Medical Imaging",
  "Trustworthy Autonomy",
  "Robotics & Edge AI"
];

const news = [
  ["2026/05", "Working on MLLM-based perceptual quality assessment and medical imaging research at the University of Florida."],
  ["2025/09", "Led a GatorAI team building a real-time lane departure warning prototype with CARLA validation and Jetson Nano deployment."],
  ["2025/08", "Starting my master degree in UF, Gainesville, FL."],
  ["2023/12", "Published first-author work on sequence-aware dense video captioning for IoT smart cameras in IEEE Internet of Things Journal."],
  ["2021/09", "Starting my master degree in NTUST, Taipei, Taiwan."]
];

const projects = [
  {
    title: "VLM-Guided Autonomous Mobile Manipulation System",
    period: "2026",
    category: "Robotics / Vision-Language Systems",
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/6a7uvTOKMfY",
      label: "Demo video"
    },
    summary: "Built a vision-language robotic system that connects semantic perception, autonomous navigation, and manipulation in a ROS 2-based mobile platform.",
    bullets: [
      "Integrated OWLv2 object grounding with LiDAR SLAM to support semantic mapping in real-world environments.",
      "Implemented A* path planning and ROS 2 feedback control for autonomous navigation.",
      "Developed inverse-kinematics-based manipulation routines for robotic grasping and object placement."
    ],
    tags: ["ROS 2", "OWL-V2", "LiDAR SLAM", "A*", "IK"],
    links: [
      { label: "Demo Video", url: "https://youtu.be/6a7uvTOKMfY" }
    ]
  },
  {
    title: "Real-time Lane Departure Warning System",
    period: "2025",
    category: "Autonomous Driving / Edge AI",
    summary: "Led the development of an edge-deployed ADAS prototype for real-time lane departure warning, validated in simulation and deployed on NVIDIA Jetson Nano.",
    bullets: [
      "Led an 8-member GatorAI team through system design, implementation, testing, and deployment.",
      "Built a CARLA-based simulation pipeline for closed-loop validation of lane departure behavior.",
      "Optimized CUDA-accelerated lane detection for 25 FPS inference on NVIDIA Jetson Nano."
    ],
    tags: ["CARLA", "Jetson Nano", "CUDA", "ADAS", "Team Lead"]
  },
  {
    title: "CT-MR Thorax-abdomen Intra-patient Registration",
    period: "2025",
    category: "Medical Imaging",
    summary: "Developed a Diffeomorphic VoxelMorph-based registration pipeline for CT-MR thorax-abdomen alignment with anatomically plausible deformation fields.",
    bullets: [
      "Implemented a deep learning registration workflow for intra-patient CT-MR thorax-abdomen alignment.",
      "Improved image correspondence using mutual information-based evaluation and deformation regularization.",
      "Reduced folding artifacts to 0.08%, supporting smoother and more plausible deformation fields."
    ],
    tags: ["VoxelMorph", "Registration", "CT-MR", "MONAI", "PyTorch"],
    links: [
      { label: "GitHub", url: "https://github.com/syuhueihuang/ct-mr-diffeomorphic-voxelmorph.git" }
    ]
  }
];

const publications = [
  {
    title: "Sequence-Aware Learnable Sparse Mask for Frame-Selectable End-to-End Dense Video Captioning for IoT Smart Cameras",
    venue: "IEEE Internet of Things Journal",
    year: "2023",
    image: "./assets/images/sequence-aware-architecture.png",
    paper: "https://ieeexplore.ieee.org/document/10330595",
    abstract: "In recent years, Artificial Intelligence of Things (AIoT) has been widely adopted across various smart systems, accelerating the development of edge computing. Nevertheless, existing research on end-to-end dense video captioning falls short in one of two areas: 1) either it does not prioritize global information or 2) it tends to focus on irrelevant details. Our study proposes an end-to-end dense video captioning model with sequence-aware learnable sparse mask. This model results in improved focus on essential information in a video while ignoring irrelevant details, thus enhancing the quality of caption generation. In addition, existing video captioning research which uses all input video frames are frequently hampered by redundancy and thus generate incorrect captions. To overcome this issue, we propose a lightweight frame selection model that primarily utilizes our proposed lightweight attention-enhancement residual gated network to achieve the desired accuracy with a smaller computational cost. The effectiveness of our proposed approaches was tested and compared to existing models. Our model achieved higher accuracy compared to previous studies, and the lightweight frame selection network resulted in higher efficiency while generating more accurate captions after frame selection."
  },
  {
    title: "Hand-detection with Transferrable Design for Smart Factories",
    venue: "IEEE International Symposium on Intelligent Signal Processing and Communication Systems",
    year: "2021",
    image: "./assets/images/hand-detection-architecture.png",
    paper: "https://ieeexplore.ieee.org/document/9651134",
    abstract: "Nowadays, a smart factory in Industry 4.0 often must produce a variety of products, so its assemblers need to learn different assembly processes and post-inspections. Smart cameras that leverage edge computing can now incorporate deep neural networks (DNNs) and have been widely used in smart factories. However, in response to the demand for rapid learning and deployment of DNNs across different assembly lines, which has not been addressed in previous studies, we propose Knowledge Transfer across Multiple Assembly Lines (KTaMAL) to transfer learned knowledge across different assembly lines. The experimental results show that the model prediction accuracy of KTaMAL is improved by 8% compared with non-transfer-learning based approaches and the training time can be significantly reduced by approximately 80%."
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function translate() {
  const langCopy = copy[state.language];
  $$("[data-i18n]").forEach((node) => {
    const path = node.dataset.i18n.split(".");
    const value = path.reduce((obj, key) => obj?.[key], langCopy);
    if (value) node.textContent = value;
  });
  document.documentElement.lang = "en";
  renderProjects();
  renderPublications();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme === "dark" ? "dark" : "";
  localStorage.setItem("theme", state.theme);
}

function renderExperiences() {
  const track = $("#experienceTrack");
  track.innerHTML = experiences.map((item) => `
    <article class="experience-card">
      <a href="${item.url}">
        <span class="experience-logo-frame">
          <img src="${item.image}" alt="${item.name}">
        </span>
        <h3>${item.name}</h3>
        <time>${item.period}</time>
        <p>${item.lines.join("<br>")}</p>
      </a>
    </article>
  `).join("");
}

function renderInterests() {
  $("#interestGrid").textContent = interests.join(" · ");
}

function renderNews() {
  $("#newsList").innerHTML = news.map(([date, text]) => `
    <li class="news-item">
      <time>${date}</time>
      <p>${text}</p>
    </li>
  `).join("");
}

function renderProjectDialogMedia(project) {
  if (!project.media) {
    return "";
  }

  if (project.media.type === "youtube") {
    return `
      <iframe class="project-dialog__media" src="${project.media.src}" title="${project.title} demo video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  }

  if (project.media.type === "video" && project.media.src) {
    return `
      <video class="project-dialog__media" controls playsinline poster="${project.media.poster || ""}">
        <source src="${project.media.src}">
      </video>
    `;
  }

  return `
    <div class="project-dialog__media">
      <img src="${project.media.poster || project.media.src}" alt="${project.title} preview">
      ${project.media.type === "video" ? `<span class="project-media__play" aria-hidden="true">▶</span>` : ""}
    </div>
  `;
}

function renderProjectLinks(project) {
  if (!project.links?.length) return "";

  return `
    <div class="project-dialog__section">
      <h4>Links</h4>
      <div class="project-dialog__links">
        ${project.links.map((link) => `
          <a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>
        `).join("")}
      </div>
    </div>
  `;
}

function renderProjects() {
  const projectCopy = copy[state.language].project;
  $("#projectGrid").innerHTML = projects.map((project, index) => `
    <article class="project-card" data-project="${index}">
      <div class="project-card__topline">
        <span>${project.category}</span>
        <time>${project.period}</time>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <button class="project-toggle" type="button" data-project-detail="${index}">${projectCopy.details}</button>
    </article>
  `).join("");
}

function openProjectDialog(project) {
  $("#projectDialogContent").innerHTML = `
    <div class="project-dialog__layout">
      ${renderProjectDialogMedia(project)}
      <div class="project-dialog__content">
        <p class="project-dialog__meta">${project.category} · ${project.period}</p>
        <h3>${project.title}</h3>
        <p class="project-dialog__summary">${project.summary}</p>
        <div class="project-dialog__section">
          <h4>Key Responsibilities</h4>
          <ul>
            ${project.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </div>
        <div class="project-dialog__section">
          <h4>Tech Stack</h4>
          <div class="project-dialog__tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        ${renderProjectLinks(project)}
      </div>
    </div>
  `;
  lockDialogScroll();
  $("#projectDialog").showModal();
}

function openPreviewDialog({ type = "image", src, poster = "", alt = "", caption = "" }) {
  const image = $("#dialogImage");
  const video = $("#dialogVideo");

  if (type === "video" && src) {
    image.hidden = true;
    image.removeAttribute("src");
    video.hidden = false;
    video.src = src;
    video.poster = poster;
  } else {
    video.pause();
    video.hidden = true;
    video.removeAttribute("src");
    video.removeAttribute("poster");
    image.hidden = false;
    image.src = src || poster;
    image.alt = alt;
  }

  $("#dialogCaption").textContent = caption;
  lockDialogScroll();
  $("#imageDialog").showModal();
}

function renderPublications() {
  const publicationCopy = copy[state.language].publication;
  $("#publicationList").innerHTML = publications.map((publication, index) => `
    <article class="publication-card" data-publication="${index}">
      <button class="publication-figure" type="button" data-preview="${index}" aria-label="Preview ${publication.title}">
        <img src="${publication.image}" alt="${publication.title} architecture">
      </button>
      <div class="publication-content">
        <h3>${publication.title}</h3>
        <p class="publication-meta"><i>${publication.venue}</i>, ${publication.year}</p>
        <div class="publication-actions">
          <button class="publication-button" type="button" data-abstract="${index}">${publicationCopy.abstract}</button>
          <a class="publication-button" href="${publication.paper}">${publicationCopy.paper}</a>
        </div>
        <div class="abstract-panel">
          <div class="abstract-inner">
            <p>${publication.abstract}</p>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function bindEvents() {
  $("#themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  $("[data-carousel-prev]").addEventListener("click", () => {
    $("#experienceTrack").scrollBy({ left: -260, behavior: "smooth" });
  });

  $("[data-carousel-next]").addEventListener("click", () => {
    $("#experienceTrack").scrollBy({ left: 260, behavior: "smooth" });
  });

  $("[data-project-prev]").addEventListener("click", () => {
    $("#projectGrid").scrollBy({ left: -360, behavior: "smooth" });
  });

  $("[data-project-next]").addEventListener("click", () => {
    $("#projectGrid").scrollBy({ left: 360, behavior: "smooth" });
  });

  $("#projectGrid").addEventListener("click", (event) => {
    const detail = event.target.closest("[data-project-detail]");
    if (!detail) return;
    openProjectDialog(projects[Number(detail.dataset.projectDetail)]);
  });

  $("#publicationList").addEventListener("click", (event) => {
    const abstractButton = event.target.closest("[data-abstract]");
    const previewButton = event.target.closest("[data-preview]");

    if (abstractButton) {
      const card = abstractButton.closest(".publication-card");
      const isOpen = card.classList.toggle("is-open");
      abstractButton.textContent = isOpen
        ? copy[state.language].publication.closeAbstract
        : copy[state.language].publication.abstract;
    }

    if (previewButton) {
      const publication = publications[Number(previewButton.dataset.preview)];
      openPreviewDialog({
        src: publication.image,
        alt: `${publication.title} architecture`,
        caption: publication.title
      });
    }
  });

  $(".dialog-close").addEventListener("click", closeDialog);
  $("#imageDialog").addEventListener("click", (event) => {
    if (event.target.id === "imageDialog") closeDialog();
  });
  $("[data-project-dialog-close]").addEventListener("click", closeProjectDialog);
  $("#projectDialog").addEventListener("click", (event) => {
    if (event.target.id === "projectDialog") closeProjectDialog();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $("#imageDialog").open) closeDialog();
    if (event.key === "Escape" && $("#projectDialog").open) closeProjectDialog();
  });
}

function closeDialog() {
  $("#dialogVideo").pause();
  $("#dialogVideo").removeAttribute("src");
  $("#imageDialog").close();
  restoreDialogScroll();
}

function closeProjectDialog() {
  const video = $("#projectDialog video");
  if (video) video.pause();
  $("#projectDialog").close();
  restoreDialogScroll();
}

function lockDialogScroll() {
  dialogScrollPosition.x = window.scrollX;
  dialogScrollPosition.y = window.scrollY;
  document.body.style.top = `-${dialogScrollPosition.y}px`;
  document.body.style.left = `-${dialogScrollPosition.x}px`;
  document.body.classList.add("is-dialog-open");
}

function restoreDialogScroll() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  document.body.classList.remove("is-dialog-open");
  document.body.style.top = "";
  document.body.style.left = "";
  window.scrollTo(dialogScrollPosition.x, dialogScrollPosition.y);
  requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
}

function init() {
  applyTheme();
  renderExperiences();
  renderInterests();
  renderNews();
  renderProjects();
  translate();
  bindEvents();
}

init();
