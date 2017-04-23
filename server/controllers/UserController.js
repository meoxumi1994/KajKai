// const getAbsolutePath = getPath(__dirname)

export const suckthisshit = () => {
  return (req, res) => {
    // Send the rendered page back to the client
    // res.send(serverSideRenderingDemo({login: { type: 'LOG_IN_SUCCESS' }}, chatApp, ChatAppContainer))
    console.log('a hehe');
    res.json({hello: 'hello'});
  }
}


