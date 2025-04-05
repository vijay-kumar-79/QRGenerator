import express from 'express'
import qr from 'qr-image';

const app = express();
const port = 5000;

app.get("/api", (req, res) => {
    const url = req.query.text;
    console.log(url);
    const qr_png = qr.image(url, { type: 'png' });
    res.type("png");
    qr_png.pipe(res);
})

app.listen(port, () => { console.log(`Listening on port ${port})`)});