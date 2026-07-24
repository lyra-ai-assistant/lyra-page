import type { TableData } from './table';

export const distrosSection = {
  eyebrow: 'Where it runs',
  title: 'Supported distributions',
};

export const osBadges = [
  { label: 'Ubuntu & Debian', variant: 'ubuntu' as const },
  { label: 'Arch Linux', variant: 'arch' as const },
];

export const distrosTable: TableData = {
  headers: ['Distribution', 'Package manager', 'Status'],
  rows: [
    [
      { text: 'Arch Linux and derivatives' },
      { text: 'pacman', variant: 'mono' },
      { text: 'Supported', variant: 'status' },
    ],
    [
      { text: 'Debian, Ubuntu and derivatives' },
      { text: 'apt', variant: 'mono' },
      { text: 'Supported', variant: 'status' },
    ],
  ],
};
