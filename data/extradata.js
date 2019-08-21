const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const geoGirdWidth = 2.5;
const geomData = [];

new Promise(resolve => {
    var img = new Image();
    img.src = './85-180.png';
    img.onload = () => {
      resolve(img);
    }
  })
  .then(img => new Promise(resolve => {
    // draw img
    canvas.height = img.height;
    canvas.width = img.width;
    canvas.style.height = `${img.height}px`;
    canvas.style.width = `${img.width}px`;
    // draw background
    ctx.drawImage(img, 0, 0);
    resolve(img);
  }))
  .then(img => {
    const girdWidth = (geoGirdWidth / 360) * img.width;
    // draw gred
    for (let x = 0; x * girdWidth < img.width; x += 1) {
      geomData[x] = geomData[x] || [];
      for (let y = 0; y * girdWidth < img.height; y += 1) {
        const imgDate = ctx.getImageData(x * girdWidth, y * girdWidth, 1, 1).data;
        if (imgDate[0] !== 0 && imgDate[1] !== 0 && imgDate[2] !== 0) {
          geomData[x].push(y);
          ctx.fillRect(x * girdWidth, y * girdWidth, girdWidth / 2, girdWidth / 2);
        };
      }
    };
  })
  .then(() => {
    console.log(geomData)
      // console.log(JSON.stringify(geomData));
    const newGeo = geomData.map(arr => {
      let last = 0;
      let lastStart = 0;
      let lastKeepCount = 1;
      let newArr = [];
      arr.forEach(data => {
        if (data - last == 1) {
          lastKeepCount++;
        } else {
          if (last != 0 && lastKeepCount != 0) {
            if (lastKeepCount === 1) {
              newArr.push(lastStart);
            } else {
              newArr.push([lastStart, lastKeepCount]);
            }
          }
          lastStart = data;
          lastKeepCount = 1;
        }
        last = data;
      });
      if (arr.length > 0 && arr[arr.length - 1][0] !== lastStart) {
        if (lastKeepCount === 1) {
          newArr.push(lastStart);
        } else {
          newArr.push([lastStart, lastKeepCount]);
        }
      }
      return newArr;
    });
    console.log(newGeo);
    console.log(JSON.stringify(newGeo));
  })