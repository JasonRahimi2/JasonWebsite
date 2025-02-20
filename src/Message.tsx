function Message() {
    const name = 'Jason';
    if (name) {
    return <h1>Hello World {name}</h1>;
    }
    else {
        return <h1>Hello World</h1>;
    }
}

export default Message;