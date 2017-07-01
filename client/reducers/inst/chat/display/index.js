const display = (state = {
  visibility: {
    left: {

    },
    top: {

    },
    center: {
        displayLabel: 'inline',
        toLabel: 'none'
    },
    buttom: {

    },
  },
  themes: {
    catagory: {
      blue: {
        highlighted: {
            backgroundColor: '#65a9ed',
            color: 'white'
        },
        normal: {
            backgroundColor: 'white',
            color: 'black'
        }
      },
      red: {
        highlighted: {
            backgroundColor: '#cc3333',
            color: 'white'
        },
        normal: {
            backgroundColor: 'white',
            color: 'black'
        }
      },
    },
    currentThemes: 'red'
  },
}, action) => {
    switch (action.type) {
        

        default:
            return state
    }
}

export default display

const getVisibility = (display) => {
    return display? 'inline': 'none'
}
