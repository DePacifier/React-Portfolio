const Blogs = [
  {
    id: 1,
    name: "TellCo Acquisition Analysis",
    tags: [
      "Data Analysis",
      "Python",
      "Streamlit",
      "Data Preparation",
      "Seaborn",
      "Machine Learning",
      "Sklearn",
    ],
    date: "Completed",
    imgSrc:
      "https://github.com/DePacifier/TeleCo-Analysis/blob/main/data/engagement_cluster.png",
    link: "https://github.com/DePacifier/TeleCo-Analysis",
  },
  {
    id: 2,
    name: "Speech-to-text-data-collection",
    tags: [
      "Data Engineering",
      "Python",
      "Data Pipelines",
      "Apache Airflow",
      "Apache Kafka",
      "Amazon S3",
    ],
    date: "Completed",
    imgSrc:
      "https://github.com/Speech-to-text-data-collection/STT-data-collection/blob/main/data/Flowchart_Diagram.jpg",
    link: "https://github.com/Speech-to-text-data-collection/STT-data-collection",
  },
  {
    id: 3,
    name: "Amharic Speech To Text",
    tags: [
      "Data Engineering",
      "Machine Learning",
      "Python",
      "Streamlit",
      "Tensorflow",
      "MLflow",
    ],
    date: "Completed",
    imgSrc:
      "https://github.com/10Acad-WFP-App/AMH-STT/blob/main/sample_result.JPG",
    link: "https://github.com/10Acad-WFP-App/AMH-STT",
  },
  {
    id: 4,
    name: "Cancer Cell Feature Causal Inference Diagnosis",
    tags: ["Machine Learning", "Python", "CausalNex", "DVC", "MLflow"],
    date: "Completed",
    imgSrc:
      "https://github.com/CasualModel/CancerCausality/blob/main/causalitygraphcircle.png",
    link: "https://github.com/CasualModel/CancerCausality",
  },
  {
    id: 5,
    name: "SmartAd A/B testing",
    tags: ["react", "reactJS", "web-development"],
    date: "3 Feb, 2021",
    imgSrc:
      "https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625295480148%2FlyKj8bpHK.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    link: "https://github.com/DePacifier/abtest-mlops",
  },
  {
    id: 6,
    name: "Rossmann Pharmaceutical Sales Prediction",
    tags: ["react", "css"],
    date: "5 Jan, 2021",
    imgSrc:
      "https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625240050668%2FGAya9b0XK.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
    link: "https://codebucks.hashnode.dev/pagination-in-react",
  },

  {
    id: 7,
    name: "Python Package For Accessing LiDAR Data",
    tags: ["react", "redux", "javascript"],
    date: "16 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ZY1EK-Eo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bcz1u90oq3prr5fga3fs.png",
    link: "https://dev.to/codebucks/what-is-redux-simply-explained-2ch7",
  },
  {
    id: 8,
    name: "Twitter Data-Analysis Pipeline",
    tags: ["react", "framer-motion", "styled-components"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
  {
    id: 9,
    name: "Prometheus Autonomous 3D Mapping",
    tags: ["react", "framer-motion", "styled-components"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
  {
    id: 10,
    name: "Minalesh Tera Sales and Adminstration Website",
    tags: ["react", "scss", "g2-plot", "axios"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
  {
    id: 11,
    name: "Ethiopian Investment Commission Data Portal Website",
    tags: ["react", "framer-motion", "styled-components"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
  {
    id: 12,
    name: "YinganY Game",
    tags: ["react", "framer-motion", "styled-components"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
  {
    id: 13,
    name: "Chaos Ball Game",
    tags: ["react", "framer-motion", "styled-components"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
  {
    id: 14,
    name: "Gusto's Vending Machine",
    tags: ["react", "framer-motion", "styled-components"],
    date: "26 May, 2021",
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rv4I8UwE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a9h50milhlf1us6mn4a.png",
    link: "https://dev.to/codebucks/build-sidebar-navigation-menu-in-reactjs-with-react-router-and-framer-motion-for-cool-page-transition-effects-4bc3",
  },
];

export default Blogs;
