const singleChat = {
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
              width: 35,
              height: 35,
              borderRadius: 50,
              marginTop: 15
          },
          hiddenImg: {
              display: 'none'
          },
          button: {
              backgroundColor: 'white',
          },
          hiddenButton: {
              display: 'none'
          },
          iconGroupDiv: {
              position: 'absolute',
              right: 10,
              top: 6,
              backgroundColor: 'white',
          },
          spliterHr: {
              marginTop: 18
          },
          displayLabel: {
            fontSize: 18,
            marginLeft: 20,
            marginTop: 22,
          },
          addMemberDiv: {
            position: 'relative',
            width: '100%',
            marginTop: 18
          }
      },
      center: {
          mainDiv: {
            overflowY: 'scroll',
            height: '74%',
            backgroundColor: 'white',

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
                  height: 40,
              },
              text: {
                  marginRight: 40,
                  marginTop: 10,
                  textAlign: 'left',
              },
              bounds: {
                  backgroundColor: '#cc3333',
                  color: 'white',
                  width: 300,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                  marginLeft: '68%'
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
      }
}

const multiChat = {
  top: {
      currentMainDiv: {
          backgroundColor: '#c90c0c',
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
      },
      hiddenImg: {
          width: 20,
          height: 20,
      },
      button: {
          backgroundColor: '#c90c0c',
          width: 25,
          height: 25,
          paddingTop: 2,
          paddingLeft: 2
      },
      hiddenButton: {
          backgroundColor: '#c90c0c',
          width: 25,
          height: 25,
          paddingTop: 2,
          paddingLeft: 2
      },
      iconGroupDiv: {
          position: 'absolute',
          right: 10,
          top: 2
      },
      spliterHr: {
          display: 'none',
      },
      displayLabel: {
          fontSize: 15,
          marginTop: 5,
          marginLeft: 5
      },
      addMemberDiv: {
          position: 'absolute',
          bottom: -40,
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
              marginRight: 51,
              marginTop: 10,
              textAlign: 'left',
          },
          bounds: {
              marginTop: 5,
              backgroundColor: '#cc3333',
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

export const chatStyles = () => {
    return singleChat
}
