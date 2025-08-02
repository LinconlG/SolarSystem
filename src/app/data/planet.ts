export interface Planet {
  name: string;
  image: string;
  description: string;
}

export const PLANETS: Planet[] = [
  {
    name: 'Mercúrio',
    image: 'assets/planets/mercury.png',
    description: 'Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar.',
  },
  {
    name: 'Vênus',
    image: 'assets/planets/venus.png',
    description: 'Vênus possui uma atmosfera densa e é extremamente quente.',
  },
  // Continue com os outros planetas...
];
