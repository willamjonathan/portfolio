import "../styles/project.css";

const dataProjects = [

{
  id: '001',
  title: 'Teaching Team (TT)',
  summary: '(Website) Multi-user fullstack system for tutor & lab assistant application.',
  tools: 'React (TypeScript), Node.js, Express, GraphQL, MySQL, TypeORM',
  description: `
    <b>Tools:</b> React (TypeScript), Node.js, Express, GraphQL, MySQL, TypeORM<br/>
    <b>Description:</b>
    <p>Teaching Team (TT) is a university-level platform built to manage tutor and lab assistant recruitment. It includes three main user roles: Candidates (who apply for roles), Lecturers (who view applicants for their courses), and Admins (who manage courses, assignments, and reports via a separate dashboard). The system is fully integrated with Cloud MySQL, uses REST and GraphQL APIs, and features a clean, functional UI built with TypeScript.</p>
  `,
  github: 'https://github.com/willamjonathan/TeachingTeam-Fullstack',
  imageClasses: ['p15-lecturer', 'p15-tutor', 'p15-admin'] 
}
,
{
    // pict ke 16
  id: '002',
  title: 'Jesslyn Gerardhine Portfolio',
  summary: '(Website) Freelance portfolio site for a design student, built based on a client-supplied layout.',
  tools: 'React.js, Node.js',
  description: `
    <p><a href="https://willamjonathan.github.io/website-portfolio/">Website's link</a></p>
    <b>Tools:</b> React.js, Node.js<br/>
    <b>Description:</b>
    <p>This project is a personal portfolio site for Jesslyn Gerardhine, a design student. It was developed following a custom design request to showcase her visual work professionally. The site features a responsive layout tailored for design presentation.</p>
  `,
  github: 'https://github.com/willamjonathan/website-portfolio',
  imageClass: 'p16'
}
,

{
    // pict ke 17
  id: '003',
  title: 'LookGlass',
  summary: '(Fullstack - Capstone (source code can not be shared))A web tool to trace climate change denial narratives across online news media.',
  tools: 'Next.js, MongoDB, Express.js, Node.js',
  description: `
      <p><a href="https://lookglass.net/">Website's link</a></p>
    <b>Tools:</b> Next.js, MongoDB, Express.js, Node.js<br/>
    <b>Description:</b>
    <p>LookGlass is a fullstack investigative tool developed to identify and track the spread of climate change denial across online news platforms. It enables researchers, journalists, and the public to filter and analyze articles by source, date, and denial themes through an intuitive interface. The platform addresses the growing challenge of disinformation in the digital age by providing insight into how and where denialist narratives are being propagated, helping promote media transparency and accountability.</p>
  `,
//   github: 'https://github.com/willamjonathan/LookGlass-RMIT',
  imageClass: 'p17'
}
,

 {
  id: '004',
  title: 'Automated Waste Sorting Bin for Metal and Non metal Dry Waste',
  summary: 'Project with sensors that is specifically designed for separating metal and non-metal dry waste.',
  tools: 'Ultrasonic sensor, inductive proximity sensor, servo motors, arduino microcontroller, relay, resistor, breadboard.',
  description: `
    <b>Tools:</b> Ultrasonic sensor, inductive proximity sensor, servo motors, arduino microcontroller, relay, resistor, breadboard.<br/>
    <b>Description:</b>
    <p>The Automated Waste Sorting Bin for Metal and Non-metal Dry Waste that we are making is
    specifically designed for separating metal and non-metal dry waste. We have incorporated
    the use of several sensors. One of them is the inductive proximity sensors for
    recognizing and sorting metal and non-metal items. Additionally, we have included an
    ultrasonic sensor to detect the presence of objects and servo motors to facilitate the
    rotation of trash compartments and coin dispensing.</p>
    <p>To support such machinery, designing and creating a shell case for the hardware is also necessary,
    to which we decided to use infra boards. Metal wiring will also be added to some parts of the casing
    for better functionality, such as for the coin dispenser and rotational trash sorting apparatus.</p>
  `,
  github: 'https://github.com/willamjonathan/Automated-Waste-Sorting-Bin-for-Metal-and-Non-metal-Dry-Waste?tab=readme-ov-file',
  youtube: 'https://youtu.be/m9mmT7ff5fg',
  imageClass: 'p1'
}
,
{
  id: '005',
  title: 'Using Machine Learning to Analyse the Effect of Antiretroviral therapy (ART) on People with HIV',
  summary: 'Analyzing the effect of ART on People with HIV.',
  tools: 'Jupyter Notebook, Pandas, Numpy, Machine Learning',
  description: `
    <p><a href="https://ieeexplore.ieee.org/document/10291717">PUBLICATION LINK</a></p>
    <b>Tools:</b> Jupyter Notebook, Pandas, Numpy, Machine Learning<br/>
    <p>The Machine-Learning algorithms: (1) K-Nearest Neighbor (KNN),
    (2) Logistic Regression, (3) Support Vector Machine (SVM), (4) XGBoost,
    (5) Decision Tree, (6) Random Forest, and (7) K-Means clustering.</p>
    <b>Description:</b>
    <p>Human immunodeficiency virus or HIV is a virus that attacks the body’s immune system.
    HIV is a virus that has become a world problem as its cure has not yet been found. The
    HIV can go to an undetected state if only treated by ART or antiretroviral therapy.
    Hence, knowing the danger that HIV brings, we are here to analyze the effect of
    Antiretroviral therapy or ART to HIV using several of its categories between 75
    countries. We are planning to use machine learning techniques that are available.
    We will use both supervised and unsupervised learning, then we will do evaluation by using
    accuracy testing, recall, precision, and F1-score. After that, we will conclude which
    machine learning is the best to apply to our dataset.</p>
  `,
  github: 'https://github.com/willamjonathan/Using-Machine-Learning-to-Analyse-the-Effect-of-Antiretroviral-therapy-ART-on-People-with-HIV.git',
  youtube: 'https://youtu.be/MVdq2kGq30g',
  imageClass: 'p2'
}
,{
  id: '006',
  title: 'MusicMate',
  summary: '(Website) Music-Mate is an innovative music application that connects music creators and listeners.',
  tools: 'ReactJS, Firebase, NodeJS, Vercel, Github, Visual Studio Code',
  description: `
    <p><a href="https://e-hakcipta.dgip.go.id/index.php/c?code=N2Y5YTFlZDJmNTIzZjkzOWY4MzhjYjg5MWUyZTlhMmUK">Intellectual Rights</a></p>
    <b>Tools:</b> ReactJS, Firebase, NodeJS, Vercel, Github, Visual Studio Code<br/>
    <b>Description:</b>
    <p>Music-Mate is an innovative music application that connects music creators and listeners.
    Users can listen to music, post their own compositions (supporting MP3, WAV, and OGG
    file formats), and engage with the music through comments and reactions. The app
    emphasizes collaboration, enabling musicians to connect with others globally and explore
    new genres. It also provides a supportive environment with constructive feedback and
    discussions. Music-Mate includes a feature-rich music production toolset for creating
    music within the app. Overall, Music-Mate revolutionizes music connection and
    collaboration, offering a platform for musicians to thrive and connect with a global
    audience.</p>
  `,
  github: 'https://github.com/willamjonathan/MusicMate.git',
  youtube: 'https://youtu.be/ibJIHb7vbXU',
  imageClass: 'p3'
}
,{
  id: '007',
  title: 'MUSE',
  summary: 'MUSE is a program designed with 2 main features, an image reconstructor and a painter identifier.',
  tools: 'Python, Tkinter, Keras, TensorFlow, Deap Genetic Algorithm',
  description: `
    <b>Tools:</b> Python, Tkinter, Keras, TensorFlow, Deap Genetic Algorithm<br/>
    <b>Description:</b>
    <p>MUSE is a program designed with 2 main features, an image reconstructor and a painter
    identifier. It is designed to assist art enthusiasts and general users in decomposing
    pictures and reconstruct it step by step and assisting people in identifying the painter
    behind a famous painting. From identifying the painter behind a painting, users can
    explore the artist's works for their artstyles, fulfill their curiosity, or just to
    appreciate them.</p>
    <p>Moreover, the image reconstructor allows users to see the decomposition
    to full reconstruction process, done by a genetic algorithm through a natural selection
    of the fittest generation, which can aid in their art journey. The image reconstructor
    utilizes the DEAP framework for genetic algorithm while the painter identifier uses a
    Tensorflow Keras (CNN) based model for the predictions.</p>
  `,
  github: 'https://github.com/willamjonathan/FamousPainter.git',
  youtube: 'https://youtu.be/qTk5u7i3xj8',
  imageClass: 'p4'
}
,
{
    // pict ke 18
  id: '008',
  title: "William's Portfolio",
  summary: 'A personal portfolio showcasing my projects and skills.',
  tools: 'React, JavaScript, CSS',
  description: `
    <b>Tools:</b> React, JavaScript, CSS<br/>
    <b>Description:</b>
    <p>This portfolio website is designed to present my academic, professional, and personal projects in a clean and accessible way. It highlights my experience across fullstack development, research, and design, with detailed project pages and interactive components. The site is continually updated as I expand my skills and complete new work.</p>
  `,
  github: 'https://github.com/willamjonathan/portfolio',
  youtube: '',
  imageClass: 'p18'
}
,
{
  id: '009',
  title: 'E-Concert Ticketing System!',
  summary: 'Ticketing System made using JFrame and SQL.',
  tools: 'Java (JFrame), SQL',
  description: `
    <b>Tools:</b> Java (JFrame), SQL<br/>
    <b>Description:</b>
    <p>Some of the music festivals do not have a good e-ticketing
    management system yet therefore, we want to create this project to help them. This
    project is aimed to help people who like music and the event organizer that arranges the
    music festival. E-ticketing also helps reduce paper or plastic being used as it is
    compatible with countless devices. Moreover, e-ticketing is an interaction of humans to
    interface resulting in a faster process and promoting ease of use. In conclusion, this
    is why we decided to pick this topic.</p>
  `,
  github: 'https://github.com/willamjonathan/E-Concert-Ticketing-System.git',
  youtube: 'https://www.youtube.com/watch?v=t3B-k9voN9M',
  imageClass: 'p5'
}
,{
  id: '010',
  title: 'Best Employee of the Month (JFrame)',
  summary: 'Management System made using JFrame and SQL.',
  tools: 'JFrame, SQL',
  description: `
    <b>Tools:</b> JFrame, SQL<br/>
    <b>Description:</b>
    <p>BEM purpose is to decide and give a reward to the best employee in a company. This is to increase
    the motivation of those employees and increase the competition between one employee and another.
    The best employee of the month will be decided by the number of visitors that created an account
    member and supports an employee. Actually, this system can be changed to whatever you want,
    it doesn't have to be choosing the best employee. This system can be used for a competition too.</p>
  `,
  github: 'https://github.com/willamjonathan/addprojOOP.git',
  youtube: 'https://www.youtube.com/watch?v=llXV8PWGOII&t=205s',
  imageClass: 'p6'
}
,
{
  id: '011',
  title: 'Best Employee of the Month (OOP)',
  summary: 'The same project with 006 but fully Java (OOP)',
  tools: 'Java',
  description: `
    <b>Tools:</b> Java<br/>
    <b>Description:</b>
    <p>BEM purpose is to decide and give a reward to the best employee in a company. This is to increase the motivation
    of those employees and increase the competition between one employee and another. The best employee of the month
    will be decided by the number of visitors that created an account member and supports an employee. Actually, this
    system can be changed to whatever you want, it doesn't have to be choosing the best employee. This system can be
    used for a competition too.</p>
  `,
  github: 'https://github.com/willamjonathan/Java_project-Sem2-.git',
  youtube: 'https://www.youtube.com/watch?v=wxBOXTfDIak',
  imageClass: 'p7'
}
,
{
  id: '012',
  title: 'SpaghettiMachine',
  summary: 'The spaghetti machine is an intriguing device inspired by the idea of a Rube Goldberg machine',
  tools: 'VPython',
  description: `
    <b>Tools:</b> VPython<br/>
    <b>Description:</b>
    <p>The spaghetti machine is an intriguing device inspired by the idea of a Rube Goldberg
    machine. Similar to a Rube Goldberg machine, the spaghetti machine is designed to
    accomplish a simple objective, which is to guide a ball through a series of maps and
    obstacles in a creative and intricate manner. The machine comprises a setup that
    includes maps featuring different layouts, along with strategically placed obstacles
    along the path that the ball will traverse.</p>
  `,
  github: 'https://github.com/willamjonathan/SpaghettiMachine.git',
  youtube: 'https://www.glowscript.org/#/user/josualex156/folder/MyPrograms/program/Vpython',
  imageClass: 'p8'
}
,
{
  id: '013',
  title: 'UFO WORLD DOMINATION',
  summary: 'Shooting game developed using pygame.',
  tools: 'Pygame, Python',
  description: `
    <b>Tools:</b> Pygame, Python<br/>
    <b>Description:</b>
    <p>UFO WORLD DOMINATION is designed to deliver an engaging and entertaining gaming
    experience for players. It revolves around a dynamic shooting game, where the player
    assumes the role of a UFO and engages in combat against enemies using star bullets as
    ammunition.</p>
  `,
  github: 'https://github.com/willamjonathan/UFOWORLDDOMINATION.git',
  youtube: 'https://youtu.be/U7K6nJXr2Cg',
  imageClass: 'p9'
}
,
{
  id: '014',
  title: 'HTML ERROR IDENTIFIER',
  summary: 'Identify the syntax and logic error in HTML.',
  tools: 'Tkinter, Python',
  description: `
    <b>Tools:</b> Tkinter, Python<br/>
    <b>Description:</b>
    <p>The HTML error identifier tool is designed to tackle the challenges commonly faced in web development. This tool provides a simplified solution for identifying and fixing HTML errors effectively, making the process of ensuring the accuracy and functionality of web pages more straightforward. Web development involves creating and maintaining websites or web applications, covering tasks like design, coding, and scripting. The HTML error identifier tool aids developers by offering clear diagnostics and feedback when working with HTML code.</p>
  `,
  github: 'https://github.com/willamjonathan/HTML_ErrorIdentifier.git',
  youtube: 'https://www.youtube.com/watch?v=ikeq7widqu4&feature=youtu.be',
  imageClass: 'p10'
}
,
{
  id: '015',
  title: 'Conducting Evolutionary Analysis on Most Endangered Primate’s Species Through Phylogenetic Tree Study',
  summary: 'Identifying and conserving the genetic diversity within primate species is essential for their long-term survival.',
  tools: 'Tkinter, Python',
  description: `
    <b>Tools:</b> Tkinter, Python<br/>
    <b>Description:</b>
    <p>Phylogenetic analysis helps inform conservation strategies by highlighting evolutionary lineages. A phylogenetic tree visually represents relationships among species, helping scientists understand evolutionary processes. This project constructs and analyzes such trees to support biodiversity preservation, offering a deep dive into evolutionary biology and its impact on endangered species.</p>
  `,
  github: 'https://github.com/willamjonathan/Phylogenetic.git',
  youtube: '',
  imageClass: 'p11'
}
,
{
  id: '016',
  title: "Will's (OLD) Portfolio",
  summary: ' (Website) My portfolio',
  tools: 'HTML, CSS',
  description: `
    <b>Tools:</b> HTML, CSS<br/>
    <b>Description:</b>
    <p>Will's portfolio showcases all of his projects, demonstrating his skills in web development, design, and coding. It includes a variety of works ranging from small experiments to large-scale applications, each documenting the technologies used, problems encountered, and solutions implemented.</p>
  `,
  github: '',
  youtube: '',
  imageClass: 'p12'
}
,
{
  id: '017',
  title: 'HASH WEB PROTOTYPE',
  summary: 'A web prototype for Health and Aid for Senior Healthcare',
  tools: 'HTML, CSS, Bootstrap',
  description: `
    <b>Tools:</b> HTML, CSS, Bootstrap<br/>
    <b>Description:</b>
    <p>HASH (Health and Aid for Senior Healthcare) is a web prototype developed as part of the Final Project for the Entrepreneurship Hatchery course. This platform is aimed at improving senior healthcare services by offering a centralized, user-friendly interface. It is designed to help caregivers and medical professionals manage appointments, monitor patient records, and provide support resources efficiently. The prototype demonstrates William Jonathan Mulyadi's ability to develop responsive and accessible web interfaces tailored for specific societal needs.</p>
  `,
  github: 'https://github.com/willamjonathan/HASH_WEBPROTOTYPE.git',
  youtube: 'https://willamjonathan2.github.io/EH1/',
  imageClass: 'p13'
}
,
  
  {
    id: '018',
    title: 'Vulnerable Infrastructure',
    summary: 'Network config with GNS3, weak SSH, DDOS etc.',
    tools: 'GNS3, Linux',
    description: `
      <b>Tools:</b> GNS3, Linux<br/>
      <b>Description:</b>
      <p>Configuring the Internal Firewall and Router, trying:
      Distributed Denial of Service (DDOS) attack, disrupting the network by overwhelming it with internet traffic.</p>
      <p>Request control is used to manage incoming request rates to mitigate DDOS threats.</p>
      <p>Lack of deep packet inspection (DPI) prevents analysis of packet contents, which weakens security.</p>
      <p>SSH with weak password increases risk of unauthorized access. Strong passwords are essential.</p>
    `,
    github: 'https://github.com/willamjonathan/FP-EthHack.git',
    imageClass: 'p14'
  }
];

export default dataProjects;