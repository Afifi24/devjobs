import blogr from './assets/logos/blogr.svg'
import coffee from './assets/logos/coffeeroasters.svg'
import creative from './assets/logos/creative.svg'
import crownfund from './assets/logos/crowdfund.svg'
import maker from './assets/logos/maker.svg'
import master from './assets/logos/mastercraft.svg'
import office from './assets/logos/officelite.svg'
import pod from './assets/logos/pod.svg'
import poromodo from './assets/logos/pomodoro.svg'
import scoot from './assets/logos/scoot.svg'
import typemaster from './assets/logos/typemaster.svg'
import vector from './assets/logos/vector.svg'





export const jobsdata = [
    {
        id:1,
        logo:scoot,
        title:'Senior Software Engineer',
        profile:'Scoot',
        website: 'scoot.com',
        country:'United Kingdom',
        time:'5h ago',
        jobtime:'Full Time',
        bgcolor:'#EA9310',
        url:'/details/job1',
        desc:'Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.',
        require:'The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.',
        ul:[
            '5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.',
            'Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.',
            'Extremely data-driven.',
            'Ability to debug complex systems.',
        ],
        whattodo:'We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.',
        ol:[
            'This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.',
            'Translate the product roadmap into engineering requirements and own the engineering roadmap',
            'Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.',
            'Collaborate with product, design, and external engineering teammates as needed.'
        ],

    },
    {
        id:2,
        logo:blogr,
        title:'Haskell and PureScipt Dev',
        profile:'Blogr',
        website:'Blogr.com',
        country:'United States',
        time:'20h ago',
        jobtime:'Part Time',
        bgcolor:'#E54B24',
        url:'/details/job2',
        desc:'Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.',
        require:'We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).',
        ul:[
            'You have a knack for UI design',
            'Have Haskell or Purescript knowledge/hacking under your belt.',
            'An experienced engineer familiar with automated testing and deployment.',
            'Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job.',
        ],
        whattodo:'The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.',
        ol:[
            'Build up our tech stack around Haskell and introduce best practices',
            'Contribute to the design of our conversational engine and the architecture supporting it',
            'Design new UIs, working closely with users, stakeholders and the backend team.',
            'Maximize robustness, performance, and scalability of solutions'
        ],


    },
    {
        id:3,
        logo:vector,
        title:'Midlevel Back End Engineer',
        profile:'Vector',
        website:'vector.com',
        country:'Russia',
        time:'1d ago',
        jobtime:'Part Time',
        bgcolor:'#353641',
        url:'/details/job3',
        desc:'We are looking for a Mid-level Back End Engineer to join our growing software engineering organization. The right person will help move our platform to the next level. You’ll be working as part of a skilled, collaborative team to jointly design and implement high visibility applications.',
        require:'As our ideal candidate, you have previous experience in Ruby on Rails and are eager to continue to develop professionally. You work well in an agile environment, and collaborate well with other Software Engineers, Test Automation Engineers, Product Managers, and Designers. You thrive in a fast-paced environment, and are able to adapt when needed.',
        ul:[
            'Active participation on a software development team designing, coding, testing, and releasing functionality to our customers',
            'Close collaboration with other engineers and product managers to become a valued member of an autonomous, cross-functional team',
            'Operational responsibility for the services that are owned by your team, potentially including taking part in an on-call rotation',
            
        ],
        whattodo:'This is an IDEAL job if you already have a few years of software engineering experience under your belt, and you want to be part of a small, intensely skilled team, who feel total ownership of their work, and can’t imagine a day without learning & coding. You will play a crucial role in the Vector platform and everything you do will matter.',
        ol:[
            'Design, code, deploy, and test applications according to the user stories/requirements and industry best practices.',
            'Follow industry standard software lifecycle process when developing software',
            'Conduct code-review with other developers',
            'Assist in development and peer review of plans, technical solutions, and related documentation.'
        ],


    },
    {
        id:4,
        logo:office,
        title:'Senior Application Engineer',
        profile:'Office Lite',
        website:'office-lite.com',
        country:'Japan',
        time:'2d ago',
        jobtime:'Full Time',
        bgcolor:'#2F4FC6',
        url:'/details/job4',
        desc:'Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).',
        require:'As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.​',
        ul:[
            'Expert Node.js proficiency in a production environment',
            'Proficiency in developing REST APIs',
            'Expert proficiency with relational databases (MySQL) and optimizing SQL queries',
            'Extensive experience with microservices-based architecture in production',
            'Experience with CircleCI, Jenkins or similar CI/CD applications'
        ],
        whattodo:'You will work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You will be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.',
        ol:[
            'Administering and configuring software',
            'Identify opportunity and help to implement a monitoring solution for proactive and predictable operations.',
            'Triaging problems with applications - identifying known errors and problem trends and finding permanent solutions through root cause analysis.',
            'Providing level 2 and 3 application support.'
        ],


    },
    {
        id:5,
        logo:pod,
        title:'Remote DevOps Engineer',
        profile:'Pod',
        website:'pod.com',
        country:'Japan',
        time:'2d ago',
        jobtime:'Part Time',
        bgcolor:'#132034',
        url:'/details/job5',
        desc:'Join our dynamic team in developing Pod’s core products and supporting infrastructure. Our software is currently written in Java, VB.Net, React Native, React JS and others. You will help lead new initiatives to build and improve the testing, staging and deployment solutions. You will interact with all development teams, development leadership and our hosting/IT staff to define requirements and goals for the Dev Ops Platform.',
        require:'We are looking for talented and motivated engineers who can hit the ground running and take our products to the next level. The engineers who are building our platform across the stack are always willing to go the extra mile to deliver the highest quality software and client experiences. Ideally, you would have:',
        ul:[
            'Bachelor is degree preferred, strong preference for Computer Science field of study',
            'Minimum of 5 years of relevant work experience',
            'Hands-on experience with configuring and maintaining resources on AWS',
            'Experience and solid understanding to deploy and maintain container orchestration platforms such as ECS or Kubernetes',
            'Knowledge of networking fundamentals',
            'Expertise with cloud security, understand the principle of least privilege',
            'Strong written and verbal communication skills'
        ],
        whattodo:'You will work closely with development teams to implement automation solutions using technologies like Amazon Web Services (AWS), Ansible, Jenkins, and Kubernetes to automatically build, test, integrate, and deploy complex, modern systems. You will leverage the full power of the cloud to configure highly resilient and scalable applications that support zero downtime. This position is open to a mid-level to senior professional depending on experience and background.',
        ol:[
            'Configure and maintain resources on AWS',
            'Maintain infrastructure as code using Terraform, CloudFormation, and/or Ansible',
            'Responsible for production deployments using Jenkins, CodeDeploy, GitHub Actions',
            'Manage security groups and access controls',
            'Use ticket management system such as Jira and Confluence to manage work priorities',
            'Ability to clearly articulate and communicate complex technical ideas to non-DevOps colleagues',

        ],


    },
    {
        id:6,
        logo:creative,
        title:'Desktop Support Manager',
        profile:'Creative',
        website:'creative.com',
        country:'Germany',
        time:'4d ago',
        jobtime:'Part Time',
        bgcolor:'#4E1853',
        url:'/details/job6',
        desc:'Creative is seeking a Desktop Support Manager responsible for managing and leading a high-performance team in a dynamic environment. The ideal candidate should have management experience, a strong technical skillset, exceptional client service skills and enjoy mentoring a team.',
        require:'You are likely someone with a solid background in end-user support and troubleshooting, as this position involves dealing with a large, and often changing, number of day-to-day issues which arise in supporting the information technology requirements of our applications.',
        ul:[
            'Bachelor’s degree in IT or related field',
            '+ years demonstrating strong technical skills supporting end users',
            '3+ years in a leadership capacity (Team Lead, Supervisor, or Manager)',
            'Experience using Professional Services Automation (PSA) tools or ticketing platforms such as ConnectWise, Autotask, ServiceNow, etc.',
            'Possess and demonstrate excellent interpersonal/communication skills',
        ],
        whattodo:'This is an 80% management and 20% hands-on supervisory role where you will be responsible for the support of automation technologies and managing a team of support engineers in a 24x7 high-volume environment.',
        ol:[
            'Lead, coach and manage service desk teams on a daily basis to improve customer service and efficiency',
            'Implement best practices and standardize service desk processes to provide exceptional “white glove” service and deliverable',
            'Oversee the work performed by the team to help prioritize open tickets and tasks',
            'Provide guidance and direction on technical issues',
            'Develop and maintain KPIs for measuring team performance and improving customer experience',
            'Provide status reports to management and collaborate on new initiatives and technical planning'
        ],


    },
    {
        id:7,
        logo:poromodo,
        title:'iOS Engineer',
        profile:'Pomodoro',
        website:'pomodoro.com',
        country:'United States',
        time:'1w ago',
        jobtime:'Full Time',
        bgcolor:'#4721C4',
        url:'/details/job7',
        desc:'We are looking for thoughtful, well-rounded iOS engineer to join our team. We’re looking for someone to help build out the foundation of the app and infrastructure. If you are interested in taking part in building an application that millions of people use every day to increase their productivity, this is the perfect opportunity. You will play an important part in our mobile engineering practice, implementing new features, improving performance, and building beautiful user interfaces.',
        require:'You are an experienced mobile engineer looking to make Pomodoro one of the best mobile experiences out there. You are someone who excels at customer-centric product development and has a passion for working on application architecture and design, and making smooth, delightful experiences. You care deeply about quality, are energized by partnership and collaboration, and you strive to enable others around you to excel.',
        ul:[
            'Strong programming skills in Objective-C and/or Swift',
            'Previous experience developing mobile applications on iOS',
            'Experience working closely across a variety of teams, including product management, design, and engineering',
            'Knowledge of core CS concepts such as common data structures and algorithms, profiling, and optimization',
        ],
        whattodo:'You will be responsible for building infrastructure and abstractions to help us double our engineering velocity. You will work at all layers of the stack and closely with partners across engineering, data science, research, product, and design. You will help our codebase stay ahead of the curve of the constantly evolving development ecosystem.',
        ol:[
            'Design and develop UI components that make feature development faster, baking in consistency and accessibility to the designs',
            'Build frameworks and infrastructure to make product development faster, safer, and more consistent',
            'Improve the performance and stability of the mobile app',
            'Strive to keep the mobile codebase secure'
        ],


    },
    {
        id:8,
        logo:maker,
        title:'Senior EJB Developer',
        profile:'Maker',
        website:'maker.com',
        country:'United Kingdom',
        time:'1w ago',
        jobtime:'Full Time',
        bgcolor:'#21437D',
        url:'/details/job8',
        desc:'We are seeking an experienced EJB Developer who will join our fast-growing engineering team, working on mission-critical applications. Searching for a Senior Java Developer who thrives on working with enterprises in multiple industries with unique business challenges requiring sophisticated solution design.',
        require:'The candidate must have work experience in all aspects of designing and constructing J2EE/EJB systems and developing system requirements and design specifications, and J2EE/EJB Coding for new and existing applications.',
        ul:[
            'Computer Science degree or equivalent',
            'Experience with EJB, J2EE,Tomcat, JBoss andrelational databases such as MySQL, MSSQL, Oracle',
            'At least three years of post-graduate experience',
            'Deep understanding of OO programming principals and commitment to clean, efficient, well documented code.',
        ],
        whattodo:'Job responsibilities will include developing scalable Java applications while providing expertise in the full software development lifecycle, from concept and design to testing.',
        ol:[
            'Design and develop high-volume, low-latency applications that enhance Maker is core platform',
            'Create well designed, testable, efficient code',
            'Participate in all phases of the development lifecycle',
            'Investigate alternatives and technologies and present them for architectural review, in order to support continuous improvement'
        ],


    },
    {
        id:9,
        logo:coffee,
        title:'Senior Frontend Developer',
        profile:'Coffeeroastars',
        website:'coffeeroastars.com',
        country:'Singapor',
        time:'1mo ago',
        jobtime:'Full Time',
        bgcolor:'#F2DDCA',
        url:'/details/job14',
        desc:'We’re looking for a Junior Full-Stack Developer to join our Product and Engineering team. This is an exciting opportunity to work on building our core web application.',
        require:'This is an entry level full stack developer position that will assist in developing the next generation apps and APIs. You will be a contributor to agile teams by providing services that ensure Coffeeroasters is aligning technology efforts with business information needs. The intent is to develop a junior full stack developer to become a well-rounded API developer ready to take on any challenging opportunity.',
        ul:[
            'A degree in Computer Science or an equivalent engineering foundation.',
            'Experience in Python and/or JavaScript.',
            'Ability to thrive in a fast-paced startup.',
            'Someone who loves to learn and is passionate about helping others.',
        ],
        whattodo:'We are looking for a dynamic individual who is no stranger to building well-designed, performant and effective front-end web applications that support complex business rules/flows. You will start by learning from the experiences of our current team and our current offerings and become intimately familiar with our codebase. You will leverage your experience to establish best practices for web development and drive the team and the codebase to a higher level.',
        ol:[
            'Write frontend code and build UI to implement new features. Includes taking in data from our API, structuring that data, and displaying it.',
            'Build backend code for API.',
            'Consistently improve our platform so we can deliver features quickly with high reliability and scalability.',
            'Apply user experience methodology and best practices to translate user needs and business requirements into engaging user-centered design.',
            'Write/maintain documentation for the client and other team members.',
        ],


    },
    {
        id:10,
        logo:master,
        title:'App & Websites Designer',
        profile:'mastercraft',
        website:'matercraft.com',
        country:'United States',
        time:'2w ago',
        jobtime:'Freelance',
        bgcolor:'#1F1F1F',
        url:'/details/job10',
        desc:'We are looking for a talented tech lead to join a team that creates large-scale, highly-performant web applications. This team creates highly visible and responsive user interfaces used by millions of people.',
        require:'Our work is not just about the code: we seek a tech lead who cares deeply about user experience and how their work impacts users. An ideal candidate has extensive experience as a full-stack software engineer, including experience with both Django and React/Redux, our stack. This role is perfect for a seasoned full-stack developer who is looking to grow both as an engineer and technical product owner. We want someone who takes the initiative to learn, enjoys thoughtful code review, and has a history collaborating with other software engineers to develop best patterns and practices.',
        ul:[
            '5-7 years of experience in infrastructure engineering of applications',
            'Experience in web application security analysis and resolution.',
            'Experience working within a modern Javascript workflow through technologies such as: GitHub, CSS Preprocessors, Styled Components, Single Page Application frameworks and Module Bundlers (Webpack etc.)',
            'Experience in implementing A/B Tests',
            'Hands on experience with React/Redux in a production application',
        ],
        whattodo:'Here is the role: sling code, architect new systems, mentor junior engineers, and manage product as a tech lead on Typemaster’s growing dev team. You will work directly with Typemaster’s two technical co-founders and other engineers in a culture that includes clean code, extensive testing, rapid iteration, and the values you bring to the table. You will come to own one of our product lines, and will have the ability to contribute to multiple projects.',
        ol:[
            'Security audit of web application with an emphasis on commerce/transactional flows',
            'Maintain and improve security skills, knowledge, and training through professional development, including participating in tech conferences and wider tech community forums',
            'Work on a modern stack including React and Django.',
            'Enforce code quality through test driven development via unit tests and automated tests.'
        ],


    },
    {
        id:11,
        logo:crownfund,
        title:'Fullstack Developer',
        profile:'Crowdfund',
        website:'crowdfund.com',
        country:'New Zealand States',
        time:'1mo ago',
        jobtime:'Part time',
        bgcolor:'#37C890',
        url:'/details/job11',
        desc:'Crowdfund is currently expanding and working on revolutionizing the world of raising funds for any project – creative, entrepreneurial or cause-related. Come and join us in this growth! We are looking for an exceptionally talented Fullstack Developer who will become an integral part of the company’s exciting new chapter.',
        require:'We would love to hear from you if you take ownership of your work and continuously want to improve the products you have built. We are looking for developers who have an uncanny abilithy to work very well cross-functionality in a flat startup.',
        ul:[
            '4+ years of web development experience',
            'Strong CS fundamentals and problem solving skills',
            'Production expertise with Ruby on Rails [preferred], Python, PHP, Java, or your favorite modern stack',
            'Excellent debugging skills & strong belief in automated testing and coverage',
            'Team player who enjoys mentoring and agile environments',
            'Passion, drive, energy, a sense of humor and a great attitude!',
        ],
        whattodo:'At Crowdfund, you will have the opportunity to literally change the world and people’s lives by developing new features for our consumer platform to make it even more robust. You’ll work with exceptional developers and there are lots of interesting technical challenges to tackle, including projects dealing with heavy transaction volume, scalability and Big Data.',
        ol:[
            'Build a marketplace that empowers people to follow their dreams!',
            'Architect, design and implement beautiful, performant & scalable Ruby code.',
            'Create features for the international payment system which sees millions of transactions per day.',
            'Extend the reach of our platform APIs.'
        ],


    },
    {
        id:12,
        logo:typemaster,
        title:'Technical Lead Engineer',
        profile:'Typemaster',
        website:'typemaster.com',
        country:'United Kingdom',
        time:'1mo ago',
        jobtime:'Part Time',
        bgcolor:'#F26818',
        url:'/details/job12',
        desc:'We are looking for a talented tech lead to join a team that creates large-scale, highly-performant web applications. This team creates highly visible and responsive user interfaces used by millions of people.',
        require:'Our work is not just about the code: we seek a tech lead who cares deeply about user experience and how their work impacts users. An ideal candidate has extensive experience as a full-stack software engineer, including experience with both Django and React/Redux, our stack. This role is perfect for a seasoned full-stack developer who is looking to grow both as an engineer and technical product owner. We want someone who takes the initiative to learn, enjoys thoughtful code review, and has a history collaborating with other software engineers to develop best patterns and practices.',
        ul:[
            '5-7 years of experience in infrastructure engineering of applications',
            'Experience in web application security analysis and resolution.',
            'Experience working within a modern Javascript workflow through technologies such as: GitHub, CSS Preprocessors, Styled Components, Single Page Application frameworks and Module Bundlers (Webpack etc.)',
            'Experience in implementing A/B Tests',
            'Hands on experience with React/Redux in a production application'
        ],
        whattodo:'Here is the role: sling code, architect new systems, mentor junior engineers, and manage product as a tech lead on Typemaster’s growing dev team. You will work directly with Typemaster’s two technical co-founders and other engineers in a culture that includes clean code, extensive testing, rapid iteration, and the values you bring to the table. You will come to own one of our product lines, and will have the ability to contribute to multiple projects.',
        ol:[
            'Security audit of web application with an emphasis on commerce/transactional flows',
            'Translate the product roadmap into engineering requirements and own the engineering roadmap',
            'Maintain and improve security skills, knowledge, and training through professional development, including participating in tech conferences and wider tech community forums',
            'Work on a modern stack including React and Django.',
            'Enforce code quality through test driven development via unit tests and automated tests.'
        ],

    },
    {
        id:13,
        logo:crownfund,
        title:'Front-end Developer',
        profile:'Crowdfund',
        website:'crowdfund.com',
        country:'New Zealand',
        time:'1mo ago',
        jobtime:'Full Time',
        bgcolor:'#37C890',
        url:'/details/job13',
        desc:'We’re hiring a Front-end Developer to help create the front-end experience for Crowdfund’s management interface. As our ideal candidate, you’re an adept user of the front-end stack (React, Yarn, webpack, Babel, SCSS, JSX, GraphQL) and an avid learner of new frameworks. You enjoy building excellent user experiences as well as reusable components that other developers can use to solve similar problems. You love open-source and being part of a thriving developer community and understand that strong businesses enable great enduring communities.',
        require:'As a mid-level developer, we expect you to have a complete understanding of JavaScript, CSS, and HTML, and proven experience building and deploying single-page applications at scale. Experience with modern JavaScript application frameworks is a given, but you also have the ability to think outside the frameworks.',
        ul:[
            'Multiple years of React experience',
            'Good eye for detail',
            'Passion for great user experience and API design',
            'Comfortable working with cross-functional and cross-cultural teams',
        ],
        whattodo:'We want people who are passionate about building apps that you and your peers will love. We are looking for an experienced Front-end Developer who shares our passion for making complex applications appear simple for our customers. We’ll give you the freedom to do what you do best, so you should feel comfortable owning your work from start to finish, as well as bringing fresh ideas to the table that can make our products, development experience, and team better. You’ll have the opportunity to work closely with designers, product managers, and other engineers across the stack to make ideas a reality.',
        ol:[
            'Working with our team to build out our React/Typescript/GraphQL stack',
            'Collaborating with product and design to increase conversions and improve user experience',
            'Building new, efficient, and scalable front-end applications that will interface with public and internal APIs',
            'Writing clean, maintainable, and testable code',
            'Work with backend teams to solve complex problems',
        ],


    },
    {
        id:14,
        logo:coffee,
        title:'Junior Full-Stack Developer',
        profile:'Coffeeroastars',
        website:'coffeeroastars.com',
        country:'Singapor',
        time:'1mo ago',
        jobtime:'Full Time',
        bgcolor:'#F2DDCA',
        url:'/details/job14',
        desc:'We’re looking for a Junior Full-Stack Developer to join our Product and Engineering team. This is an exciting opportunity to work on building our core web application.',
        require:'This is an entry level full stack developer position that will assist in developing the next generation apps and APIs. You will be a contributor to agile teams by providing services that ensure Coffeeroasters is aligning technology efforts with business information needs. The intent is to develop a junior full stack developer to become a well-rounded API developer ready to take on any challenging opportunity.',
        ul:[
            'A degree in Computer Science or an equivalent engineering foundation.',
            'Experience in Python and/or JavaScript.',
            'Ability to thrive in a fast-paced startup.',
            'Someone who loves to learn and is passionate about helping others.',
        ],
        whattodo:'We are looking for a dynamic individual who is no stranger to building well-designed, performant and effective front-end web applications that support complex business rules/flows. You will start by learning from the experiences of our current team and our current offerings and become intimately familiar with our codebase. You will leverage your experience to establish best practices for web development and drive the team and the codebase to a higher level.',
        ol:[
            'Write frontend code and build UI to implement new features. Includes taking in data from our API, structuring that data, and displaying it.',
            'Build backend code for API.',
            'Consistently improve our platform so we can deliver features quickly with high reliability and scalability.',
            'Apply user experience methodology and best practices to translate user needs and business requirements into engaging user-centered design.',
            'Write/maintain documentation for the client and other team members.',
        ],


    },
    {
        id:15,
        logo:blogr,
        title:'Mideweight Front-end Developer',
        profile:'Blogr',
        website:'blogr.com',
        country:'United States',
        time:'1mo ago',
        jobtime:'Full Time',
        bgcolor:'#E54B24',
        url:'/details/job15',
        desc:'Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.',
        require:'We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).',
        ul:[
            'You have a knack for UI design',
            'Have Haskell or Purescript knowledge/hacking under your belt.',
            'An experienced engineer familiar with automated testing and deployment.',
            'Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job.',
        ],
        whattodo:'The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.',
        ol:[
            'Build up our tech stack around Haskell and introduce best practices',
            'Contribute to the design of our conversational engine and the architecture supporting it',
            'Design new UIs, working closely with users, stakeholders and the backend team.',
            'Maximize robustness, performance, and scalability of solutions'
        ],


    }
]