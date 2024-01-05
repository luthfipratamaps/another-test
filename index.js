const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/json', (req, res) => {
    const filePath = path.join(__dirname, 'example.json');
    const fileName = 'example.json'; // The file name to be sent
    
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('File not found');
            return;
        }
        
        // Set Content-Disposition header to suggest the browser to download the file with the same name
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        
        // Send the file
        res.sendFile(filePath);
    });
});

app.get('/hex', (req, res) => {
    const filePath = path.join(__dirname, 'mcu_l716p.hex');
    const fileName = 'mcu_l716p.hex'; // The file name to be sent
    
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('File not found');
            return;
        }
        
        // Set Content-Disposition header to suggest the browser to download the file with the same name
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        
        // Send the file
        res.sendFile(filePath);
    });
});
  
// Start the server on port 3000 (you can use any port you want)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
