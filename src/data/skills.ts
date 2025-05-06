
export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML5", 
      "CSS3", 
      "JavaScript", 
      "TypeScript", 
      "React", 
      "Next.js", 
      "Tailwind CSS", 
      "Styled-components", 
      "Redux",
      "Vue.js",
    ]
  },
  {
    name: "Backend",
    skills: [
      "Node.js", 
      "Express", 
      "NestJS", 
      "Django", 
      "Flask", 
      "RESTful APIs", 
      "Python",
      "GraphQL"
    ]
  },
  {
    name: "Database",
    skills: [
      "MongoDB", 
      "PostgreSQL", 
      "MySQL", 
      "Firebase", 
      "Redis",
      "Prisma", 
      "Mongoose"
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git", 
      "Docker", 
      "AWS",  
      "CI/CD", 
      "Jest", 
      "Webpack", 
      "Vite"
    ]
  }
];
