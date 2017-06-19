const babyCollection = "/images/chatIcons/Baby/"

const iconList = [
  "angry",
  "arrogant",
  "baby",
  "cheeky",
  "confused",
  "desperate",
  "dissapointment",
  "faint",
  "flirt",
  "geek",
  "goofy",
  "grubby",
  "happy",
  "joyful",
  "love",
  "manly",
  "miserly",
  "nerd",
  "pirate",
  "punk",
  "scared",
  "sceptic",
  "shocked",
  "smile",
  "smug",
  "stunned",
  "tired",
  "tough",
  "wink"
]

const languageMaping = (icon) => {
  switch (icon.toLowerCase()) {
    case 'tức giận':
    case 'tức':
    case 'cáu':
      return 'angry'

    case 'kiêu ngạo':
    case 'kiêu':
    case 'ngạo mạn':
      return 'arrogant'

    case 'đáng yêu':
      return 'baby'

    case 'cười':
      return 'smile'

    default:
      return icon
  }
}

const iconUtility = {
  getIcon: (icon) => {
    var icon = languageMaping(icon)
    if (iconList.indexOf(icon) == -1) {
      return null
    }
    return buildIconObj(icon)
  },
  getIconList: () => {
    let icons = []
    iconList.map(icon => icons.push(buildIconObj(icon)))
    return icons
  }
}

const buildIconObj = (icon) => {
  return {
    syntax: '(' + icon + ')',
    src: babyCollection + icon + '.png'
  }
}

export default iconUtility
