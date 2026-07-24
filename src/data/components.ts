export interface RepoComponent {
  role: string;
  name: string;
  repo: string;
  description: string;
  facts: string[];
  stack: string;
}

export const componentsOverview = {
  eyebrow: 'Under the hood',
  title: 'Three parts, one assistant.',
  lede: 'Lyra is built as a small constellation of its own: a backend that thinks, a client that you talk to, and packaging that gets it onto your system in the first place.',
};

export const repoComponents: RepoComponent[] = [
  {
    role: 'The brain',
    name: 'lyra-server',
    repo: 'lyra-server',
    description:
      'Backend daemon for Lyra. Exposes a Unix socket for the CLI and desktop UI, plus an HTTP API with streaming for external integrations.',
    facts: [
      'Runs a local Qwen2.5-1.5B model via llama-cpp-python',
      'Remembers past conversations with a semantic memory store',
      'Resolves packages across pacman, apt, PyPI, npm, crates.io',
    ],
    stack: 'Python 3.13 · FastAPI · llama-cpp-python · SQLite · ChromaDB',
  },
  {
    role: 'The face',
    name: 'lyra-ui',
    repo: 'lyra-ui',
    description:
      'The Electron desktop client. Talks to lyra-server over a Unix socket, renders responses as markdown, and keeps an eye on your system.',
    facts: [
      'Renders responses as markdown with syntax highlighting',
      'Shows live RAM, CPU, and disk usage',
      "Starts lyra-server automatically if it isn't already running",
    ],
    stack: 'Electron · Node.js 20 · pnpm · markdown-it · Chart.js',
  },
  {
    role: 'The delivery',
    name: 'lyra-packaging',
    repo: 'lyra-packaging',
    description:
      'The packaging and release pipeline that turns lyra-server and lyra-ui into installable packages for your distribution.',
    facts: [
      'Builds .pkg.tar.zst archives for Arch Linux',
      'Builds .deb archives for Debian and Ubuntu',
      'Handles CI/CD and release announcements',
    ],
    stack: 'Shell · Python · GitHub Actions',
  },
];
