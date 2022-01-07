const express = require('express');
const userRouter = require('./routes/user.routes')

const PORT = process.env.port ?? 8000;

const app = express();

app.use(express.json())
app.use('/api/v1', userRouter);

app.use(express.static(__dirname));
app.post("/upload", function (req, res, next) {
   
    let filedata = res;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
 
app.listen(PORT, () => console.log('App has been started on port' + ` ${PORT}...`))

