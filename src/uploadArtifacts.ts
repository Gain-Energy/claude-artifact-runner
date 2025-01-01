import fs from 'fs';
import path from 'path';

// Directory where new .tsx files are located
const sourceDir = path.resolve(__dirname, '../newArtifacts');

// Directory where .tsx files should be copied to
const targetDir = path.resolve(__dirname, './artifacts');

// Function to copy .tsx files from sourceDir to targetDir
function uploadArtifacts() {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error(`Error reading source directory: ${err.message}`);
      return;
    }

    files.forEach(file => {
      if (path.extname(file) === '.tsx') {
        const sourceFile = path.join(sourceDir, file);
        const targetFile = path.join(targetDir, file);

        fs.copyFile(sourceFile, targetFile, err => {
          if (err) {
            console.error(`Error copying file ${file}: ${err.message}`);
          } else {
            console.log(`Successfully uploaded ${file}`);
          }
        });
      }
    });
  });
}

// Run the uploadArtifacts function
uploadArtifacts();
