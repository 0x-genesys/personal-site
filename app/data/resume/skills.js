export const categories = [
  {
    name: 'AI Engineering',
    color: '#8a2be2',
  }, {
    name: 'Automation',
    color: '#20b2aa',
  }, {
    name: 'Data Science',
    color: '#515dd4',
  }, {
    name: 'Databases',
    color: '#3896e2',
  }, {
    name: 'Design',
    color: '#747fff',
  }, {
    name: 'DevOps/MLOps',
    color: '#ff8c00',
  }, {
    name: 'Frameworks',
    color: '#64cb7b',
  }, {
    name: 'Java',
    color: '#40494e',
  }, {
    name: 'Javascript',
    color: '#d75858',
  }, {
    name: 'Languages',
    color: '#6968b3',
  }, {
    name: 'Machine Learning',
    color: '#e47272',
  }, {
    name: 'Other',
    color: '#c3423f',
  }, {
    name: 'Python',
    color: '#37b1f5',
  }, {
    name: 'Tools',
    color: '#40494e',
  }, {
    name: 'Web Development',
    color: '#cc7b94',
  },
];

export const skills = [
  // --- DESIGN CATEGORY ADDITIONS ---
  {
    title: 'Neural Network Architecture & Optimization',
    compentency: 5,
    category: ['AI Engineering', 'Machine Learning', 'DevOps/MLOps', 'Data Science'],
  },
  {
    title: 'System Design & Architecture',
    compentency: 5,
    category: ['Design', 'Web Development', 'DevOps/MLOps'],
  },
  {
    title: 'Product Design & Strategy',
    compentency: 4,
    category: ['Design', 'Other'],
  },
  {
    title: 'Conversational UX & AI Agent Design',
    compentency: 4,
    category: ['Design', 'AI Engineering'],
  },
  {
    title: 'Mobile UI/UX Implementation',
    compentency: 3,
    category: ['Design', 'Java', 'Web Development'], // Referencing your Android/Frontend work
  },
  {
    title: 'API & Microservices Design',
    compentency: 5,
    category: ['Design', 'Web Development', 'Languages'],
  },
  // --- COMPETENCY 5 ---
  {
    title: 'Amazon Web Services',
    compentency: 5,
    category: ['Web Development', 'Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Android',
    compentency: 5,
    category: ['Java', 'Other'],
  },
  {
    title: 'Docker',
    compentency: 5,
    category: ['DevOps/MLOps', 'Tools'],
  },
  {
    title: 'Java',
    compentency: 5,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Javascript',
    compentency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Kafka Streams',
    compentency: 5,
    category: ['Data Science', 'DevOps/MLOps', 'Java'],
  },
  {
    title: 'LangChain & Agentic Frameworks',
    compentency: 5,
    category: ['AI Engineering', 'Python', 'Frameworks'],
  },
  {
    title: 'Model Context Protocol (MCP)',
    compentency: 5,
    category: ['AI Engineering', 'Automation', 'Tools'],
  },
  {
    title: 'MongoDB',
    compentency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Node.JS',
    compentency: 5,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Prompt Engineering & RAG',
    compentency: 5,
    category: ['AI Engineering', 'Machine Learning'],
  },
  {
    title: 'Python',
    compentency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'PyTorch',
    compentency: 5,
    category: ['Machine Learning', 'Frameworks', 'Python'],
  },
  {
    title: 'Redis',
    compentency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    compentency: 5,
    category: ['Databases', 'Data Science', 'Languages'],
  },
  {
    title: 'Transformers & LLMs',
    compentency: 5,
    category: ['Machine Learning', 'AI Engineering'],
  },

  // --- COMPETENCY 4 ---
  {
    title: 'CI/CD (Jenkins, GitHub Actions)',
    compentency: 4,
    category: ['DevOps/MLOps', 'Automation', 'Tools'],
  },
  {
    title: 'Express.JS',
    compentency: 4,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Git',
    compentency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    compentency: 4,
    category: ['DevOps/MLOps', 'Tools'],
  },
  {
    title: 'Pandas',
    compentency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'PostgreSQL',
    compentency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'React',
    compentency: 4,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Scikit-Learn',
    compentency: 4,
    category: ['Machine Learning', 'Data Science', 'Python'],
  },
  {
    title: 'SQLite3',
    compentency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'TensorFlow',
    compentency: 4,
    category: ['Machine Learning', 'Frameworks', 'Python'],
  },
  {
    title: 'Terraform',
    compentency: 4,
    category: ['DevOps/MLOps', 'Automation', 'Tools'],
  },
  {
    title: 'Vector Databases (Pinecone/Milvus)',
    compentency: 4,
    category: ['Databases', 'AI Engineering'],
  },

  // --- COMPETENCY 3 ---
  {
    title: 'Bash',
    compentency: 3,
    category: ['Tools', 'Languages', 'Automation'],
  },
  {
    title: 'Data Analysis',
    compentency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Ejabberd/XMPP',
    compentency: 3,
    category: ['Other'],
  },
  {
    title: 'ElasticSearch',
    compentency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Flask',
    compentency: 3,
    category: ['Web Development', 'Frameworks', 'Python'],
  },
  {
    title: 'Google Cloud Compute',
    compentency: 3,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Matplotlib & Seaborn',
    compentency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Numpy',
    compentency: 3,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Product Development',
    compentency: 3,
    category: ['Other'],
  },
  {
    title: 'Spark & Hadoop',
    compentency: 3,
    category: ['Data Science', 'Databases'],
  },
  {
    title: 'Tableau / PowerBI',
    compentency: 3,
    category: ['Data Science', 'Tools'],
  },

  // --- COMPETENCY 2 ---
  {
    title: 'C++',
    compentency: 2,
    category: ['Languages'],
  },
  {
    title: 'HTML',
    compentency: 2,
    category: ['Web Development', 'Languages'],
  },

  // --- COMPETENCY 1 ---
  {
    title: 'CSS',
    compentency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SASS/SCSS',
    compentency: 1,
    category: ['Web Development', 'Languages'],
  },
];