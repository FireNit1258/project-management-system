const multer = require('multer');
const path = require('path');

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/uploads/')); // Save files to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  }
});

// Initialize Multer upload instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: 2MB file size limit
});
const uploadFiles = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size: 10MB
}).array('images', 10); // Accept an array of files, max 10 files

const uploadMultipleFiles = (req, res, next) => {
  uploadFiles(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: 'Multer error', error: err.message });
    } else if (err) {
      return res.status(500).json({ message: 'Server error', error: err.message });
    }
    next();
  });
};

// Export a single upload function for use in routes
const singleImageUpload = upload.single('image');

module.exports = { singleImageUpload,uploadMultipleFiles };
