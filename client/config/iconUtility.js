export const emoSrc = "/images/chat/emo/basic/"

const alex = [
  'angel',
  'sweat',
  'in-love',
  'smiling',
  'happy',
  'cool',
  'astonished',
  'confused',
  'cry',
  'devil',
  'dizzy',
  'expressionless',
  'injury',
  'angry',
  'joy',
  'kiss',
  'mask',
  'neutral',
  'sad',
  'scared',
  'secret',
  'sick',
  'sleeping',
  'smirking',
  'thinking',
  'tired',
  'unamused',
  'vomiting',
  'zombie',
]

const titi = [
  'alien',
  'anxious',
  'attention',
  'bat',
  'beer',
  'blush',
  'boxer',
  'businessman',
  'calling',
  'crying',
  'dead',
  'doubt',
  'gentleman',
  'laugh',
  'masked',
  'ninja',
  'party',
  'peaceful',
  'policeman',
  'shy',
  'sleepy',
  'smoker',
  'star',
  'thumb-up',
  'whistle',
  'wrestler',
]

const iconUtility = {
    // getIconList: () => {
    //     let icons = []
    //     iconList.map(icon => icons.push(buildIconObj(icon)))
    //     return icons
    // },
    alex: () => {
        return alex.map(icon => buildIconObj(icon, emoSrc))
    },
    titi: () => {
        return titi.map(icon => buildIconObj(icon, emoSrc))
    }
}

const buildIconObj = (icon, src) => {
    return {
        syntax: '(' + icon + ')',
        src: emoSrc + icon + '.svg'
    }
}

export default iconUtility
