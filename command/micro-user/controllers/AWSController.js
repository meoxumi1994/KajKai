import { generateS3PutObjectSignedUrl } from '../services/S3Service'

export const getS3PutObjectSignedUrl = () => (req, res) => {
    const id = req.decoded._id;
    const fileType = req.body.filetype;
	const fileName = req.body.filename;
  	const data = generateS3PutObjectSignedUrl(id, fileName, fileType);
  	res.send(data);
}