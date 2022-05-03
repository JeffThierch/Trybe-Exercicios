type FilterCallback<T> = (item: T, index?: number ,array?: T[]) => boolean

function myFilter<T>(array: T[], callback: FilterCallback<T>): T[] {
  const newArray:T[] = []

  for (let i = 0; i < array.length; i += 1) {
    if(callback(array[i], i, array)) {
      newArray.push(array[i])
    }
  }

  return newArray
}

