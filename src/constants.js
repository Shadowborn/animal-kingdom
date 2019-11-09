import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])

export const RACES = [
  {
    id: 'dwarf',
    name: 'Dwarf',
    superpower: 'Has 9 lives.',
    desc: 'Short stocky bearded fellow'
  },
  {
    id: 'elf',
    name: 'Elf',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'human',
    name: 'Human',
    superpower: 'Roaring loudly.'
  }] 

export const ANIMALS = [
  {
    id: 'cat',
    name: 'Cat',
    superpower: 'Has 9 lives.'
  },
  {
    id: 'dog',
    name: 'Dog',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'lion',
    name: 'Lion',
    superpower: 'Roaring loudly.'
  }]

export const TERRITORIES = [
  {
    id: 'forest',
    name: 'Forest',
    superpower: 'Trees!'
  },
  {
    id: 'tundra',
    name: 'Tundra',
    superpower: 'Let it snow!'
  },
  {
    id: 'shadowlands',
    name: 'Shadowlands',
    superpower: 'In shadow lies truth'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  },
  {
    app: 'https://animalkingdoms.netlify.com',
    ruler: 'meepers.id.blockstack'
  }
]
