import { generateS3PutObjectSignedUrl } from '../services/S3Service'

export const getS3PutObjectSignedUrl = () => (req, res) => {
	var id = req.decoded._id
	var fileType = req.body.filetype
	var fileName = req.body.filename
  	const data = generateS3PutObjectSignedUrl(id, fileName, fileType)
  	res.json(data)
}