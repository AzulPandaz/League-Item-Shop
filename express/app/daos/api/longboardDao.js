const con =  require('../../config/dbconfig')

const longboardDao = {
    table: 'items',

    findAll:(res,table)=>{
        con.execute(
            `SELECT i.id, i.item_name, br.board_type, b.brand, i.item_image
            FROM items AS i
            INNER JOIN board_type AS br
            INNER JOIN brand AS b
            ON i.brand = b.brand_id AND br.board_type_id = i.board_type
            WHERE i.board_type = 4`,
            (error,rows)=>{
                console.log(rows)
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO find all ERROR`, error)
                }
            }
        )
    }
}

module.exports =longboardDao