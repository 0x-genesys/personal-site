// Dynamically import all blog markdown files
const blogImports = {
  'building-custom-llm': () => import('../data/blogs/building-custom-llm.md'),
  'algorithmic-trading-system': () => import('../data/blogs/algorithmic-trading-system.md'),
  'multimodal-medical-ai': () => import('../data/blogs/multimodal-medical-ai.md'),
  'blockchain-verification-platform': () => import('../data/blogs/blockchain-verification-platform.md'),
};

const blogs = [
  {
    id: 'building-custom-llm',
    title: 'Building a Custom LLM from Scratch',
    subtitle: 'My journey training a 256M-parameter Transformer model entirely on Apple Silicon',
    link: '/blog/building-custom-llm',
    date: 'May 2026',
    readTime: '8 min read',
    tags: ['Machine Learning', 'LLM', 'PyTorch'],
    description: 'In this post, I detail my experience building a 256M-parameter Transformer model from scratch using only Apple Silicon.',
  },
  {
    id: 'algorithmic-trading-system',
    title: 'Algorithmic Trading System with Neural Networks',
    subtitle: 'Capturing momentum breakouts in low SNR environments',
    link: '/blog/algorithmic-trading-system',
    date: 'April 2026',
    readTime: '12 min read',
    tags: ['Finance', 'Machine Learning', 'Trading'],
    description: 'I built an end-to-end algorithmic trading system that achieved +172.81% compound return in Walk-Forward testing.',
  },
  {
    id: 'multimodal-medical-ai',
    title: 'Multimodal Medical AI with RAG',
    subtitle: 'Building a HIPAA-compliant AI integrating text, images, and ultra-fast retrieval',
    link: '/blog/multimodal-medical-ai',
    date: 'March 2026',
    readTime: '10 min read',
    tags: ['Healthcare', 'AI', 'RAG'],
    description: 'Developed a fully local medical AI utilizing BioBERT for clinical text and MedCLIP for images.',
  },
  {
    id: 'blockchain-verification-platform',
    title: 'Blockchain Platform',
    subtitle: 'Scaling RDS Database for a Bitcoin explorter platform',
    link: '/blog/blockchain-verification-platform',
    date: 'December 2018',
    readTime: '7 min read',
    tags: ['Blockchain', 'Web3', 'Startup'],
    description: 'I built a blockchain verification platform that scaled to Bitcoin transaction volume and processed millions of transactions daily.',
  },
];

export { blogImports };
export default blogs;
