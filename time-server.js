const net = require('net');

    const server = net.createServer( socket => {
        let date = new Date()
        data = `${date.getFullYear()}-${(date.getMonth()+1) < 10? (``+date.getMonth()+1):(date.getMonth()+1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        //socket.write(data);
        socket.end(data + '\n');
    })
    server.listen(Number(process.argv[2]))