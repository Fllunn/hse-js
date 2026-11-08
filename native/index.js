const getRandomColor = () => {
    const color = ['red', 'blue', 'green'];

    return color[Math.floor(Math.random() * color.length)];
}

const sq = (a) => a * a;