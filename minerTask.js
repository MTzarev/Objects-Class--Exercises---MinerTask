function minerTask(input) {
    let mineCollection = {};
    for (let i = 0; i < input.length; i += 2) {
      let resource = input[i];
      let qty = Number(input[i + 1]);
      if (!mineCollection.hasOwnProperty(resource))
        mineCollection[resource] = qty;
      else {
        mineCollection[resource] += qty;
      }
    }
    for (let resource in mineCollection) {
      console.log(`${resource} -> ${mineCollection[resource]}`);
    }
  }