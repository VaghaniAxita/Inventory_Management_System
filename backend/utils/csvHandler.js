const fs = require('fs');
const csvParser = require('csv-parser');
const { parse } = require('json2csv');


exports.exportCSV = (data) => {
    const fields = ['name', 'quantity', 'lowStockThreshold'];
    return parse(data, { fields });
};


exports.importCSV = (filePath) => {
    const data = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (row) => data.push(row))
            .on('end', () => resolve(data))
            .on('error', (err) => reject(err));
    });
};
