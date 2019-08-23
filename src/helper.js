export function dataDecode(data) {
  let newData = [];
  data.forEach((row, index) => {
    newData[index] = newData[index] || [];
    row.forEach(list => {
      if (typeof list === 'number') {
        newData[index].push(list);
      } else {
        for (let i = 0; i < list[1]; i++) {
          newData[index].push(list[0] + i);
        }
      }
    });
  })
  return newData;
}