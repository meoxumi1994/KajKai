const styles =  {
    bigWindow: {
        rightMsg: {
          img: {
            float: 'right',
            marginRight: 20
          },
          text: {
            marginRight: 40,
            marginTop: 10,
            textAlign: 'right'
          }
        },
        leftMsg: {
          img: {
            float: 'left',
            marginLeft: 20,
          },
          text: {
            marginLeft: 40,
            marginTop: 10
          }
        },
        messageListDiv: {
          width: 900,
          height: 520,
          overflow: 'scroll'
        },
        headerIcon: {
          width: 27,
          height: 27,
          float: 'right',
          marginTop: 4,
          marginRight: 10
        },
        inputForm: {
          width: 900
        },
        chatHeader: {
          backgroundColor: '#e9ebee',
          height: 59,
          width: 900,
          marginTop: 18,
          marginLeft: 8,
          borderRadius:15,
          borderWidth: 1,
          borderColor: 'black'
        },
        mainDiv: {
          position: 'fixed',
          bottom: 0,
          backgroundColor: 'black',
          width: 320 ,
          height: 400,
          zIndex:100,
          marginLeft: 5
        },
        closeButton: {
          visibility: 'none',
          width: 20,
          height: 20,
          float: 'right',
          marginTop: 4,
          marginRight: 10
        },
        topAvatar: {
          display: 'inline',
          marginLeft: 10
        },
        topHr: {
          display: 'block',
          marginTop: 10
        }
    },
    smallWindow: {
        rightMsg: {
          img: {
            float: 'right',
          },
          text: {
            marginRight: 40,
            marginTop: 10,
            textAlign: 'right'
          }
        },
        leftMsg: {
          img: {
            float: 'left',
          },
          text: {
            marginLeft: 40,
            marginTop: 10
          }
        },
        messageListDiv: {
          width: 320,
          height: 300,
          overflow: 'scroll'
        },
        headerIcon: {
          width: 20,
          height: 20,
          float: 'right',
          marginTop: 4,
          marginRight: 10
        },
        inputForm: {
          width: 320
        },
        chatHeader: {
          backgroundColor: '#BD081C',
          color: 'white',
          height: 30,
          width: 320
        },
        chatHeaderGrey: {
          backgroundColor: 'grey',
          color: 'white',
          height: 30,
          width: 320
        },
        mainDiv: {
          position: 'fixed',
          bottom: 0,
          backgroundColor: 'black',
          width: 320 ,
          height: 400,
          zIndex:100,
          marginLeft: 5
        },
        closeButton: {
          visibility: 'inline',
          width: 20,
          height: 20,
          float: 'right',
          marginTop: 4,
          marginRight: 10
        },
        topAvatar: {
          display: 'none'
        },
        topHr: {
          display: 'none'
        }
    }
}

export default styles
