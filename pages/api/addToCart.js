import con from "../Components/dbcon"

export default function handler(req, res) {
    const { item, uid, img, price } = req.query
    if (uid === 'null') {
        res.send({ 'msg': 'not logged in' })
    }
    else {
        con.query('insert into cart values("' + uid + '", "' + item + '","' + img + '" ,' + price + ')', (err, result, fields) => { })
        res.send({ 'msg': 'success add to cart' })
    }
}