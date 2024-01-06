/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'CSAA Insurance Group, a AAA Insurer',
    position: 'Software Engineer Intern',
    url: 'https://csaa-insurance.aaa.com/content/aaa-ie/b2c/en/homepage.html/',
    startDate: '2023-05-23',
    endDate: '2023-08-10',
    summary: 'Remote',
    highlights: [
      'Shadowed senior managers in the Application Security team to gain insights on roles and responsibilities of technical vulnerabilities',
      'Assessed vulnerability testing to identify and prioritize vulnerabilities based on severity, type, or time with Fortify and Burpsuite',
      'Executed a dashboard project for DevOps teams starting from design to implementation for comprehensible graphs and visuals of data',
    ],
  },
  {
    name: 'Lehigh University',
    position: 'Undergraduate Blockchain Research Assistant',
    url: 'https://wordpress.lehigh.edu/sss/',
    startDate: '2023-01-20',
    summary: 'Blockchain Research of Hierarchial Consensus',
    highlights: [
      'Conducted a custom implementation and application of a consensus algorithm for Central Bank Digital Currencies (CBDCs)',
      'Isolating a widely used consensus algorithm (SCP) and successfully simulated test cases for different global central banks',
      'Present weekly findings and accomplishments as well as future plans to 15+ professors and students once a week',
    ],
  },
  {
    name: 'SinLuz Ingeniería y Arquitectura',
    position: 'Data Science Intern',
    url: 'https://www.linkedin.com/company/sinluz-ingenier-a-y-arquitectura-slp/about/',
    startDate: '2022-05-025',
    endDate: '2022-06-25',
    summary: 'Barceloa, Spain',
    highlights: [
      'Evaluate and debug algorithms that interpret images to solve computer vision problems for 800+ images in the construction sector',
      'Utilized the OpenCV Python library to implement new algorithmic solutions for scaling axis and features for over 800 images',
      'Rendered graphical results of convolutional neural networks, with scale, colors, brightness of sample, and location factors using Pandas',
      'Examined and restructured patterns in code for efficiency and documented code that aided in readability for future employees',
    ],
  },
  {
    name: 'Lehigh University',
    position: 'Computer Science Teaching Assistant and Grader',
    url: 'https://engineering.lehigh.edu/cse',
    startDate: '2023-08-10',
    summary: 'Bethlehem, PA',
    highlights: [
      'Graded a series of assignments and projects for 50+ students in the computer science department classes like CSE340, CSE303, and CSE242',
    ],
  },
  {
    name: 'Lehigh University',
    position: 'System Administrator',
    url: 'https://engineering.lehigh.edu/cse',
    startDate: '2022-09-10',
    summary: 'Bethlehem, PA',
    highlights: [
      'Closely monitored manager on 10+ system admin projects to understand workloads of the faculty in the computer science department',
      'Research information in the IT space and troubleshoot problems or issues varying from network security to loss of passwords',
      'Exploration of Flask, SQLAlchemy, and other Python libraries for the implementation of a website to log hours for the department',
    ],
  },
  {
    name: 'Lehigh University',
    position: 'Computer Science Engineering Lab Monitor',
    url: 'https://engineering.lehigh.edu/cse',
    startDate: '2021-08-10',
    endDate: '2022-10-10',
    summary: 'Bethlehem, PA',
    highlights: [
      'Monitored the equipment and daily activity in computer science labs, ensuring smooth operations and efficient use of resources',
      'Maintained lab environment of 50+ computers, performed regular maintenance and assisted students with computer operations',
    ],
  },
  {
    name: 'ACME Markets',
    position: 'Courtesy Clerk',
    url: 'https://local.acmemarkets.com/pa/doylestown/480-n-main-st.html',
    startDate: '2017-10-10',
    endDate: '2021-08-10',
    summary: 'Doylestown, PA',
    highlights: [
      'Assisted in maintaining and facilitating daily operations at ACME Markets across 4 or more departments needing help',
      'Closely monitored and analyzed supervisors performance, effectively delegated tasks to departments needing improvement',
      'Ensuring the quality and quantity of 200+ products for filling of shelves in the produce or dairy department and reporting loss prevention',
    ],
  },
  {
    name: 'Lehigh University',
    position: 'Campus Sustainable Impact Fellow',
    url: 'https://creativeinquiry.lehigh.edu/mountaintop-programs/campus-sustainable-impact-fellowship',
    startDate: '2022-01-10',
    endDate: '2022-12-10',
    summary: 'Bethlehem, PA',
    highlights: [
      'Organized and conducted studies on 100+ first-year students throughout campus to change recycling habits and increase sustainability',
      'Researched and analyzed plastic contamination to improve campus habits for technical implementation of our venture',
    ],
  },
  {
    name: 'Sigma Phi Delta Professional Engineering Fraternity',
    position: 'Various Positions',
    url: 'https://creativeinquiry.lehigh.edu/mountaintop-programs/campus-sustainable-impact-fellowship',
    startDate: '2021-04-10',
    summary: 'Bethlehem, PA',
    highlights: [
      'Fundraising Chair: ',
      'Guide: ',
      'Chaplain: ',
      'Creative Merch Chair: ',
    ],
  },
  {
    name: 'Lehigh Mentor Collective',
    position: 'Computer Science Engineering Peer Mentor',
    url: 'https://diversityandinclusion.lehigh.edu/studentsuccess/mentor-collective',
    startDate: '2021-08-10',
    endDate: '2022-05-10',
    summary: 'Bethlehem, PA',
    highlights: [
      'Peer mentor a small group of 5 first year Engineering students to help navigate their first year',
      'Conducted monthly check in meetings to help point people in the right direction and give resources and guidance',
    ],
  },
];

export default work;
