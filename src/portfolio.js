//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  //"--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
   //"--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Ashish>";

// Main Page
export const main = {
  name: "Ashish Kumar Dwivedi",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1QIOgSiKGBsUrcqU-hyneIxJbij4Dq9lM/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://user-images.githubusercontent.com/95959029/189178117-6894baab-3aa4-4038-8452-37eecb54bb20.png",
  p1: "Hey, My name is Ashish Kumar Dwivedi. I have completed my Graduation in BTech (Electronics and Communications Engineering) from Cochin University of Science & Technology,Kochi India.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like listening music and exploring new places.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    // "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    // {
    //   name: "Tailwind",
    //   iconifyClassName: "logos:tailwindcss-icon",
    //   id: "12",
    // },
    // {
    //   name: "Material-UI",
    //   iconifyClassName: "logos:material-ui",
    //   id: "13",
    // },
    // {
    //   name: "Ant Design",
    //   iconifyClassName: "logos:ant-design",
    //   id: "14",
    // },
    // {
    //   name: "Netlify",
    //   iconifyClassName: "vscode-icons:file-type-netlify",
    //   id: "15",
    // },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
//   {
//     id: 1,
//     title: "Frontend Masters Clone",
//     desc: `Frontend Masters is an E-learning platform where users can advance their skills with in-depth, modern front-end engineering courses.`,
//     feature: `Sign-in/Sign-up,
// Explore top courses and teachers,
// Dynamic progress monitor page,
// Subscription page.`,
//     tech: `Tech Stack: EJS | CSS | JavaScript | nodeJS | express | MongoDB`,
//     img: "https://github.com/Shivam2101s/images/blob/main/frontend.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Frontend_Masters",
//     link: "https://frontend-masters.herokuapp.com/"
//   },
//   {
//     id: 2,
//     title: "MyFitnessPal Clone",
//     desc: `MyFitnessPal is a smartphone app and website that tracks users diet and exercise. Here users can explore various food items and their respective nutrition contents , exercise, and various fitness tracking apps.`,
//     feature: `Sign-in/Sign-up,
// search bar for food items to see their nutrition contents, explore various fitness tracking apps,
// Subscription page.`,
//     tech: `Tech Stack: React | CSS | JavaScript | nodeJS | express | MongoDB`,
//     img: "https://i.ibb.co/c1THySK/hero-image.jpg",
//     link: "https://github.com/AbhijitAher/MyFitnessPal_U5",
//     github: "https://github.com/AbhijitAher/MyFitnessPal_U5",
//   },
  
//   {
//     id: 3,
//     title: "Reliance Retail Clone",
//     desc: `Reliance Retail is an informative website where users can get information about various brands of Reliance Industries.`,
//     feature: `Features:
// Sign-in/Sign-up, User Authentication,
// Integreted Hamleys shopping page,
// Sorting, filtering and debouncing based search bar,
// Carousel and slideshows,
// Add to cart & Check out.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript `,
//     img: "https://github.com/Shivam2101s/images/blob/main/reliance(1)%20-%20Copy.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Reliance-retails",
//     link: "https://relianceretailclone.netlify.app/",
//   },
  {
    id: 4,
    title: "PHARMEASY-CLONE",
    desc: `A web application for healthcare products with basic functionalities where consumers involved in selling online medicines, diagnostics, telehealth, online doctor consultation services.`,
    feature: ` Search bar,Product Page,
    Add to cart, Sign in ,Sign up,Payment page
    `,
    tech: `Tech Stack: HTML | CSS | JavaScript | MongoDB | Node.js | Express.js.`,
    img: "https://user-images.githubusercontent.com/97445865/161431981-4b03f1df-26e0-4ddb-aa63-b306061619e9.jpeg",
    github: "https://github.com/bharathk07/PHARMEASY-CLONE",
    link:"https://pharmeasy-clone.vercel.app/"
  },
  {
    id: 5,
    title: "Reliance Digital Clone",
    desc: `A web application to buy electronic items online.it has basic functionalities and it is responsive in every page`,
    feature: `Responsive site in every page, Search bar,Sign-in/Sign-up , Product Page,Add to cart,Payment page.
    `,
    tech: `Tech Stack: HTML | CSS | JavaScript.`,
    img: "https://miro.medium.com/max/875/1*qRNfRbuHCDC1ct0chLZoWA.png",
    link: "https://reliance-digital.vercel.app/",
    github: "https://github.com/iamrituyadav/Reliance_digital",
  },
  {
    id: 6,
    title: "Dermstore Clone",
    desc: `A web application to buy cosmetic items online`,
    feature: `Search bar ,Product page, Sorting ,Add to cart, User authentication, payment page`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://abhijeet-dharme.netlify.app/images/Dermstore_pic.PNG",
    link: "https://practical-curran-e48460.netlify.app/",
    github: "https://github.com/ashishdwivedi447/dermstore-project",
  },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/ashish-dwivedi12/",
  "mailto:ad1358787@gmail.com",
  
  "https://github.com/ashishdwivedi447",
];
