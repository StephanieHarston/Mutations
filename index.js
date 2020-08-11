function mutation(arr) {
  let test = arr[1].toLowerCase().split('');;
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
      if(target.indexOf(test[i]) < 0) {
        return false
      }
    } return true
  }


mutation(["Hello", "hey"]);