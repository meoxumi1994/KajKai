import AWS from 'aws-sdk'
import { reverseString, getHash }  from '../utils/Utils'

AWS.config.update({
  region: 'ap-southeast-1'
})
const s3 = new AWS.S3()

export const generateS3PutObjectSignedUrl = (id, fileName, fileExtension) => {
    let key = reverseString(id) + getHash(fileName + (new Date())) + "." + fileExtension
    const params = {
      Bucket: 'kajkai-avatar',
      Key: key,
      ACL: "public-read",
      Expires: 300 // 300 seconds
    }

    const url = s3.getSignedUrl('putObject', params)
    const viewUrl = 'http://d1z4p30mgj29.cloudfront.net/' + key
    return {urlload: url, urlreal: viewUrl}
}
