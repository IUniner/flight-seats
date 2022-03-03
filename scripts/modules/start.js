const start = (app, title) => {
    const h1 = document.createElement('h1');
    h1.className = 'title';
    h1.textContent = title;

    app.append(h1);

};

export default start;
