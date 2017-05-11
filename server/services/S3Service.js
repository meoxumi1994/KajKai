import AWS from 'aws-sdk'

AWS.config.update({
  region: 'ap-southeast-1'
})
const s3 = new AWS.S3()

export const generateS3PutObjectSignedUrl = (id, fileExtension) => {
  id = s.split("").reverse().join("")
  let key = id + "." + fileExtension
  const params = {
    Bucket: 'kajkai-avatar',
    Key: key,
    ACL: "public-read",
    Expires: 300 // 300 seconds
  }

  /*
  TODO the url to get object is
  kajkai-avatar.s3-ap-southeast-1.amazonaws.com/{key}
  server should store this url
  */

  // this is url for putting object
  const url = s3.getSignedUrl('putObject', params)
  return url
}