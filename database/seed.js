const fs = require('fs');
const argv = require('yargs').argv;
const { performance } = require('perf_hooks');

const lines = argv.lines || 10;
const filename = argv.output || 'test.csv';
const stream = fs.createWriteStream(filename);


const padNum = (number, size) => {
  let result = `0000${number}`;
  return result.substr(-size);
};

const writeLine = (id, listing_id) => {
  let randomImgNumb = padNum(Math.ceil(Math.random() * 1000), 4);
  let url = `"https://sdc-gallery-images.s3-us-west-2.amazonaws.com/images/place${randomImgNumb}.jpg"\n`;
  return `${id},${listing_id},${url}`;
};

const writeFile = (writeStream, encoding, done) => {
  let count = 1; // 10M
  let i = 0;
  function writing() {
    let canWrite = true
    do {
      i += 1;
      // check progress 
      if (i % 100000 === 0) console.log(i);
      let numbPics = Math.ceil(Math.random() * 5) + 2; // 3 to 7
      for (let j = 0; j < numbPics; j++) {
        let line = writeLine(count, i);
        count += 1;
        if (i === lines) {
          console.log('done', i);
          writeStream.write(line, encoding, done);
        } else {
          canWrite = writeStream.write(line, encoding);
        }
      }
    } while(i < lines && canWrite)
    if (i < lines && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
}

const t0 = performance.now();
stream.write(`id,listing_id,img_url\n`, 'utf-8');
writeFile(stream, 'utf-8', () => {
  stream.end();
  const t1 = performance.now();
  console.log('total time (s): ', (t1 - t0) / 1000);
});
