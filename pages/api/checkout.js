import con from "../Components/dbcon";

export default function handler(req, res) {
    const { uid } = req.query;
    if (uid === 'null') {
        res.send({ 'msg': 'not logged in' })
    }
    else {
        con.query('delete from cart where uid = "' + uid + '"', (err, result, fields) => {
            res.send({
                'msg': 'checked out'
            })
        })
    }
}
