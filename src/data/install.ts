export const installSection = {
  eyebrow: 'Get started',
  title: 'Install Lyra',
};

export const installCommands = [
  { label: 'Arch Linux', code: 'sudo pacman -U lyra-1.1.0-1-x86_64.pkg.tar.zst' },
  { label: 'Debian / Ubuntu', code: 'sudo apt install ./lyra_1.1.0-1_amd64.deb' },
];

export const setupSteps = [
  {
    text: 'Then, download the model once — this needs an internet connection the first time only:',
    code: 'lyra-install-backend',
  },
  {
    text: 'Start it up:',
    code: 'lyra serve --daemon\nlyra-ui',
  },
  {
    text: 'Or skip the desktop client and talk to it from the terminal:',
    code: 'lyra -q "how do I install neovim"',
  },
];
