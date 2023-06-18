async function ImageToBase64(file) {
  const reader = new FileReader();
  // convert to data url and pass file
  reader.readAsDataURL(file);

  // check if the file will be converted or not
  const data = new Promise((resolve, reject) => {
    // if , then it will give result and return
    reader.onload = () => resolve(reader.result);

    // for any error
    reader.onerror = (err) => reject(err);
  });

  return data;
}

export { ImageToBase64 };
