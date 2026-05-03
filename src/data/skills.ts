
export interface SkillCategory {
  name: string;
  key: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    key: "languages",
    skills: ["Node.js", "NestJS", "Express", "Java", "Spring", "Python", "Django", "Ruby on Rails", "TypeScript", "Vue.js"]
  },
  {
    name: "Architecture",
    key: "architecture",
    skills: ["Microservices", "Serverless", "Event-Driven", "Distributed Systems", "System Design", "API Design"]
  },
  {
    name: "Databases & Indexers",
    key: "databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLServer", "CassandraDB", "ElasticSearch", "Hive", "Redis"]
  },
  {
    name: "Messaging & Streaming",
    key: "messaging",
    skills: ["Kafka", "RabbitMQ", "AWS SQS"]
  },
  {
    name: "Cloud & DevOps",
    key: "devops",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    name: "Testing & Observability",
    key: "testing",
    skills: ["Jest", "Sentry", "DataDog", "TDD"]
  },
  {
    name: "Best Practices",
    key: "practices",
    skills: ["DDD", "SOLID", "DRY", "Clean Architecture", "Code Review"]
  }
];
