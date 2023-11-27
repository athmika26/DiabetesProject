const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
const port = 3000;
const allowedOrigins = ['http://localhost:5173'];


app.use(cors({ origin: allowedOrigins}));
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
    const data = req.body.input;
    console.log(JSON.stringify(data));

    if (!data || typeof data !== 'object') {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    const pythonPath = process.env.PYTHON_PATH || 'python';
    const childPython = spawn(pythonPath, ['model.py', JSON.stringify(data)]);

    let resultData;

    childPython.stdout.on('data', (data) => {
        data = JSON.parse(data.toString());
        console.log(`stdout ${data}`);
        if(data.prediction === 1){
            resultData = {prediction: "You might have Diabetes"};
        }
        else{
            resultData = {prediction: "You might not have Diabetes."};
        }
        console.log(resultData)
    })
    childPython.stderr.on('data', (data) => {
        console.log(`stderr ${data}`);
    })

    childPython.on('close', (code) => {
        console.log('exited');
        res.json(resultData);
    })
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
