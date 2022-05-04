export function validateIfKeysExist<T> (keys: string[], obj: T): [boolean, string | null] {
  for(let i = 0; i < keys.length; i += 1) {
    if(!Object.prototype.hasOwnProperty.call(obj, keys[i])) {
      return [false, keys[i]]
    }
  }

  return [true, null]
}

export function validateIfValuesAreNotEmpty<T> (obj: T): [boolean, string | null] {
  const entries = Object.entries(obj);
  
  for(let i = 0; i < entries.length; i += 1) {
    const [key, value] = entries[i];

    if(!value) {
      return [false, key]
    }
  }

  return [true, null]
}

export function validateDate(dateObj: Date): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  const dateStr = dateObj.toString()


  if(!dateRegex.test(dateStr)) {
    return false;
  }

  const date = new Date(dateStr);

  const timestamp = date.getTime();

  if(typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false
  }

  return date.toISOString().startsWith(dateStr);
}