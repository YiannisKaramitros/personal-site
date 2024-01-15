const courses = [
  {
    title: 'Introduction to Programming',
    number: 'CSE 007',
    link: 'https://engineering.lehigh.edu/cse/cse-007-introduction-programming-4',
    university: 'Lehigh',
  },
  {
    title: 'Survey Of Computer Science',
    number: 'CSE 012',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-12-survey-computer-science-3',
    university: 'Lehigh',
  },
  {
    title: 'Programming & Data Structures',
    number: 'CSE 017',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-17-programming-and-data-structures-3',
    university: 'Lehigh',
  },
  {
    title: 'System Software',
    number: 'CSE 109',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-109-systems-software-4',
    university: 'Lehigh',
  },
  {
    title: 'Programming Languages',
    number: 'CSE 262',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-262-programming-languages-3',
    university: 'Lehigh',
  },
  {
    title: 'Foundations Of Discrete Structures & Algorithms',
    number: 'CSE 140',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-140-foundations-discrete-structures-and-algorithms-3',
    university: 'Lehigh',
  },
  {
    title: 'Computer Organization And Architecture',
    number: 'CSE 202',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-202-computer-organization-and-architecture-3',
    university: 'Lehigh',
  },
  {
    title: 'Computers, Internet, And Society',
    number: 'CSE 252',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-252-computers-internet-and-society-3',
    university: 'Lehigh',
  },
  {
    title: 'Programming In Linux And Windows Operating Systems',
    number: 'CSE 271',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-271-programming-linux-and-windows-operating-systems-3',
    university: 'Lehigh',
  },
  {
    title: 'Software Engineering',
    number: 'CSE 216',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-216-software-engineering-3',
    university: 'Lehigh',
  },
  {
    title: 'Blockchain Algorithms And Systems',
    number: 'CSE 242',
    link: 'https://catalog.lehigh.edu/courselisting/cse/',
    university: 'Lehigh',
  },
  {
    title: 'Design And Analysis Of Algorithms',
    number: 'CSE 340',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-340-design-and-analysis-algorithms-3',
    university: 'Lehigh',
  },
  {
    title: 'Capstone Project I',
    number: 'CSE 280',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-280-capstone-project-i-3',
    university: 'Lehigh',
  },
  {
    title: 'Capstone Project II',
    number: 'CSE 281',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-281-capstone-project-ii-3',
    university: 'Lehigh',
  },
  {
    title: 'Operating System Design',
    number: 'CSE 303',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-303-operating-system-design-3',
    university: 'Lehigh',
  },
  {
    title: 'Database Systems, Algorithms, And Applications',
    number: 'CSE 341',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-341-database-systems-algorithms-and-applications-3',
    university: 'Lehigh',
  },
  {
    title: 'Artificial Intelligence Theory and Practice',
    number: 'CSE 327',
    link: 'https://engineering.lehigh.edu/cse/academics/course-index/cse-327-artificial-intelligence-theory-and-practice-3',
    university: 'Lehigh',
  },
  {
    title: 'Blockchain Projects',
    number: 'CSE 398',
    link: 'https://wordpress.lehigh.edu/blockchain/',
    university: 'Lehigh',
  },
  {
    title: 'Advanced Programming Techniques (Graduate Course)',
    number: 'CSE 411',
    link: 'https://catalog.lehigh.edu/courselisting/cse/',
    university: 'Lehigh',
  },
  {
    title: 'Blockchain Projects (Graduate Course)',
    number: 'CSE 467',
    link: 'https://wordpress.lehigh.edu/blockchain/',
    university: 'Lehigh',
  },
  {
    title: 'Advanced Algorithms (Graduate Course)',
    number: 'CSE 440',
    link: 'https://catalog.lehigh.edu/courselisting/cse/',
    university: 'Lehigh',
  },
  {
    title: 'Principals Of Economics',
    number: 'ECO 001',
    link: 'https://catalog.lehigh.edu/courselisting/eco/',
    university: 'Lehigh',
  },
  {
    title: 'Intermediate Microeconomic Analysis',
    number: 'ECO 119',
    link: 'https://catalog.lehigh.edu/courselisting/eco/',
    university: 'Lehigh',
  },
  {
    title: 'Intermediate Microeconomic Analysis II',
    number: 'ECO 146',
    link: 'https://catalog.lehigh.edu/courselisting/eco/',
    university: 'Lehigh',
  },
  {
    title: 'Economics Of The Sports Industry',
    number: 'ECO 324',
    link: 'https://catalog.lehigh.edu/courselisting/eco/',
    university: 'Lehigh',
  },
  {
    title: 'International Economics',
    number: 'ECO 338',
    link: 'https://catalog.lehigh.edu/courselisting/eco/',
    university: 'Lehigh',
  },
  {
    title: 'Game Theory',
    number: 'ECO 358',
    link: 'https://catalog.lehigh.edu/courselisting/eco/',
    university: 'Lehigh',
  },
  {
    title: 'Calculus I',
    number: 'MATH 021',
    link: 'https://catalog.lehigh.edu/courselisting/math/',
    university: 'Lehigh',
  },
  {
    title: 'Calculus II',
    number: 'MATH 022',
    link: 'https://catalog.lehigh.edu/courselisting/math/',
    university: 'Lehigh',
  },
  {
    title: 'Calculus III',
    number: 'MATH 023',
    link: 'https://catalog.lehigh.edu/courselisting/math/',
    university: 'Lehigh',
  },
  {
    title: 'Linear Methods',
    number: 'MATH 205',
    link: 'https://catalog.lehigh.edu/courselisting/math/',
    university: 'Lehigh',
  },
  {
    title: 'Probability and Statistics',
    number: 'MATH 231',
    link: 'https://catalog.lehigh.edu/courselisting/math/',
    university: 'Lehigh',
  },
  // {
  //   title: 'Crit Reading and Composition',
  //   number: 'ENGL 001',
  //   link: 'https://catalog.lehigh.edu/courselisting/engl/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Research and Argument',
  //   number: 'ENGL 002',
  //   link: 'https://catalog.lehigh.edu/courselisting/engl/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Applied Engineering Computer Methods',
  //   number: 'ENGR 010',
  //   link: 'https://catalog.lehigh.edu/courselisting/engr/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introduction to Engineering',
  //   number: 'ENGR 095',
  //   link: 'https://catalog.lehigh.edu/courselisting/engr/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introduction to Engineering II',
  //   number: 'ENGR 096',
  //   link: 'https://catalog.lehigh.edu/courselisting/engr/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introductory Physics I',
  //   number: 'PHY 011',
  //   link: 'https://catalog.lehigh.edu/courselisting/phy/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introductory Physics Lab I',
  //   number: 'PHY 012',
  //   link: 'https://catalog.lehigh.edu/courselisting/phy/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introductory Physics II',
  //   number: 'PHY 021',
  //   link: 'https://catalog.lehigh.edu/courselisting/phy/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introductory Physics Lab II',
  //   number: 'PHY 022',
  //   link: 'https://catalog.lehigh.edu/courselisting/phy/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Intro To Chemical Principles',
  //   number: 'CHM 030',
  //   link: 'https://catalog.lehigh.edu/courselisting/chm/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Creative Inquiry Projects',
  //   number: 'CINQ 387-389',
  //   link: 'https://catalog.lehigh.edu/courselisting/cinq/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'Introduction to Linguistics',
  //   number: 'ANTH 140',
  //   link: 'https://catalog.lehigh.edu/courselisting/anth/',
  //   university: 'Lehigh',
  // },
  // {
  //   title: 'History of Architecture',
  //   number: 'ARCH 002',
  //   link: 'https://catalog.lehigh.edu/courselisting/arch/',
  //   university: 'Lehigh',
  // },
];

export default courses;
