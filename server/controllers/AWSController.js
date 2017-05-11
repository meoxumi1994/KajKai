import { generateS3PutObjectSignedUrl } from '../services/S3Service'

export const getS3PutObjectSignedUrl = () => (req, res) => {
	var id = req.deconded._id
	var length = req.body.length
	// var fileType = req.body.fileType
  	const url = generateS3PutObjectSignedUrl(id, req.headers['content-type'])
  	res.send({url})
}