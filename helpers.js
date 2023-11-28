// choice function: returns a random item from an array
export function choice(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

// remove function: removes the first occurrence of an item from an array
export function remove(items, item) {
    const index = items.indexOf(item);
    if (index > -1) {
        return items.splice(index, 1)[0];
    }
}