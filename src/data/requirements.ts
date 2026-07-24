import type { TableData } from './table';

export const requirementsSection = {
  eyebrow: 'What it needs',
  title: 'System requirements',
  finePrint: "Estimates based on Lyra's bundled components; not yet formally benchmarked.",
};

export const requirementsTable: TableData = {
  headers: ['', 'Minimum', 'Recommended'],
  rows: [
    [{ text: 'RAM' }, { text: '4 GB' }, { text: '8 GB' }],
    [{ text: 'Disk' }, { text: '3 GB free' }, { text: '5 GB free' }],
    [{ text: 'CPU' }, { text: 'x86_64, 2 cores' }, { text: 'x86_64, 4 cores' }],
    [{ text: 'GPU' }, { text: 'Not required' }, { text: 'NVIDIA, AMD, or Intel Arc' }],
  ],
};
