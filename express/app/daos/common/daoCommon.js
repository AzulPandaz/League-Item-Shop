// CONNECT TO database
const con = require('../../config/dbconfig')
const router = require('../../routes/router')

const daoCommon = {
    findAll:(res,table)=>{
        con.execute(
            `SELECT i.id, i.item_name, br.board_type, b.brand, i.item_image
            FROM items AS i
            INNER JOIN board_type AS br
            INNER JOIN brand AS b
            ON i.brand = b.brand_id AND br.board_type_id = i.board_type
            WHERE i.id > 0`,
            (error,rows)=>{
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
    },

    findById:(res,table, id)=>{
        con.execute(
            `SELECT i.id, i.item_name, i.description, i.designer, i.load_capacity, br.board_type, b.brand, i.item_image, ws.wheel_size, wh.wheel_hardness, ii.item_included, i.item_cost
            FROM items AS i 
            INNER JOIN board_type AS br
            INNER JOIN brand AS b
            INNER JOIN wheel_size AS ws
            INNER JOIN wheel_hardness AS wh
            INNER JOIN item_included AS ii
            INNER JOIN items_to_items_included AS itii
            ON i.brand = b.brand_id AND br.board_type_id = i.board_type AND i.wheel_size = ws.wheel_size_id and i.wheel_hardness = wh.wheel_hardness_id AND i.id = itii.items_id AND ii.item_included_id = itii.item_included_id
            WHERE i.id = ?`,
            [id],
            (error,rows)=>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO find by id ERROR`, error)
                }
            }
        )
    }
    

}

module.exports = daoCommon