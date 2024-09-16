export interface MemberProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  email?: string;
  skills: string[];
}

export const membersList: MemberProps[] = [
  {
    name: "Debasish Sarkar",
    role: "DevOps engineer",
    imageUrl: "debasish.png",
    skills: ["AWS", "Docker", "Terraform", "Kubernetes", "Jenkins"],
    linkedin: "linkedin.com/in/debasish-sarkar-08465388",
    github: "",
    email: "debasishrocks27@gmail.com",
  },
  {
    name: "Antaro Hyedima Waha",
    role: "Senior backend engineer",
    imageUrl: "dm.jpg",
    skills: [".NET", "Azure cloud", "Docker", "Redis"],
    linkedin: "",
  },
  {
    name: "Jean Pratt",
    role: "Software Engineer",
    imageUrl: "jean.jpeg",
    skills: ["React", "Redux", "GraphQL", "AWS Amplify"],
  },
  {
    name: "Joshua Alex",
    role: "Sr. Fullstack Engineer",
    imageUrl: "joshua.jpg",
    skills: ["React", "Node JS", "MongoDB", "Express JS", "TypeScript"],
    linkedin: "",
  },
  {
    name: "Shehu-Fatiudeen Lawal",
    role: "DevOps Engineer",
    imageUrl: "",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
  },

  {
    name: "David Emmanuel",
    role: "Data Scientist",
    imageUrl: "",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "SQL",
    ],
  },
  {
    name: "Joshua Madu",
    role: "Backend Engineer",
    imageUrl: "",
    skills: ["Node JS", "NestJs", "Express JS", "MongoDB", "TypeScript"],
  },

  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
  //   {
  //     name: '',
  //     role: '',
  //     skills: ['', '', '', '', ''],
  //     linkedin: '',
  //     github: '',
  //     email: '',
  //   },
];
