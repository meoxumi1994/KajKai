import { generateS3PutObjectSignedUrl } from '../services/S3Service'

export const getS3PutObjectSignedUrl = () => (req, res) => {
	var id = req.decoded._id
	var length = req.body.length
	var fileType = req.body.fileType
	// var fileType = req.body.fileType
  	const url = generateS3PutObjectSignedUrl(id, fileType)
  	res.send({url})
}