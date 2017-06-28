const mainColor= '#e9ebee'

const singleChat = (color) => {
    return {
      type: 'singleChat',
      top: {
          currentMainDiv: {
              backgroundColor: 'white',
              height: '7.5%',
              width: '100%',
          },
          mainDiv: {
              backgroundColor: 'white',
              height: '7.5%',
              width: '100%',
          },
          iconImg: {
              width: 27,
              height: 27,
              borderRadius: 50,
              marginRight: 10,
              marginTop: 15
          },
          iconGroupDiv: {
              position: 'absolute',
              right: 10,
              top: 6,
              backgroundColor: '#e9ebee',
          },
          spliterHr: {
            marginTop: 18
          },
          displayLabel: {
            fontSize: 18,
            marginLeft: 20,
            marginTop: 22,
          }
      },
      center: {
          mainDiv: {
            overflowY: 'scroll',
            height: '80%',
            backgroundColor: 'white'
          },
          rightMsg: {
              imgDiv: {
                  float: 'right',
                  marginRight: 20
              },
              imgIcon: {
                  borderRadius: 50,
                  borderWidth: 1,
                  width: 40,
                  height: 40
              },
              text: {
                  marginRight: 40,
                  marginTop: 10,
                  textAlign: 'left',
              },
              bounds: {
                  backgroundColor: color,
                  color: 'white',
                  width: 300,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                  float: 'right',
              },
              senderDiv: {
                  color: 'grey',
                  display: 'none'
              }
          },
          leftMsg: {
              imgDiv: {
                  float: 'left',
                  marginLeft: 20,
              },
              imgIcon: {
                  borderRadius: 50,
                  borderWidth: 1,
                  width: 40,
                  height: 40
              },
              text: {
                  marginLeft: 40,
                  marginTop: 10,
              },
              bounds: {
                  backgroundColor: '#e9ebee',
                  width: 300,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 10
              },
              senderDiv: {
                color: 'grey'
              }
          },
      },
      bottom: {
        inputForm: {
          position: 'fixed',
          backgroundColor: 'white',
          bottom: 0,
          width: '60%',
        },
        formControl: {
          height: 50,
        },
        iconButton: {
          height: 40,
          width: 80
        }
      },
    }
}

const multiChat = (color) => {
    return {
      type: 'small',
      top: {
          currentMainDiv: {
              backgroundColor: color,
              color: 'white',
              height: 30,
              width: 320
          },
          mainDiv: {
              backgroundColor: 'grey',
              color: 'white',
              height: 30,
              width: 320
          },
          iconImg: {
              width: 20,
              height: 20,
              borderRadius: 50,
              marginLeft: 5
          },
          iconGroupDiv: {
              position: 'absolute',
              right: 10,
              top: 6
          },
          spliterHr: {
            display: 'none',
          },
          displayLabel: {
            fontSize: 15,
            marginTop: 5,
            marginLeft: 5
          }
      },
      center: {
          mainDiv: {
            width: 320,
            height: 300,
            overflowY: 'scroll'
          },
          rightMsg: {
              imgDiv: {
                  float: 'right',
              },
              imgIcon: {
                  borderRadius: 50,
                  borderWidth: 1,
                  width: 40,
                  height: 40
              },
              text: {
                  marginRight: 40,
                  marginTop: 10,
                  textAlign: 'left',
              },
              bounds: {
                  backgroundColor: color,
                  color: 'white',
                  width: 200,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                  float: 'right',
              },
              senderDiv: {
                  color: 'grey',
                  display: 'none'
              }
          },
          leftMsg: {
              imgDiv: {
                  float: 'left',
              },
              imgIcon: {
                  borderRadius: 50,
                  borderWidth: 1,
                  width: 40,
                  height: 40
              },
              text: {
                  marginLeft: 15,
              },
              bounds: {
                  backgroundColor: '#e0e0e0',
                  width: 200,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 10
              },
              senderDiv: {
                color: 'grey'
              }
          },
      },
      bottom: {
        inputForm: {
          width: 320
        },
        inputDiv: {
          width: '100%'
        },
        iconButton: {
          fontSize: 13
        }
      },
    }
}

const chatStyles = {
    getSingleChat: (themes) => {
        return singleChat(themes.highlighted.backgroundColor)
    },
    getMultiChat: (themes) => {
        return multiChat(themes.highlighted.backgroundColor)
    }
}

export default chatStyles
