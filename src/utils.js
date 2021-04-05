export const getRandomItems = (array, amount) => {
        const randomItems = [];
        for(let i = 0; i < amount; i++) {
            const index = Math.floor(Math.random()*array.length);
            randomItems.push(array[index]);
        }
        return randomItems
    }