import con from "../Components/dbcon";

export default function handler(req, res) {
    const { uid } = req.query;
    con.query('select * from cart where uid = "' + uid + '"', (err, result, fields) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}
