const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/',(req,res)=> {
    burger.select((data)=>{
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index',hbsObject);
    });
});

router.post('/api/burgers', (req,res) =>{
 console.log(req.body);

    burger.insert(['burger_name','devoured'],[req.body.burger_name, req.body.devoured], (data)=> {
        res.json({id: data.insertId});
    });
});

router.put('/api/burgers/:id',(req,res)=>{

  const condition =  `id = ${req.params.id}`;

    burger.update(
         "devoured = "+req.body.devoured,
          condition,
        (data)=>{
          
            if(data.changedRow){
                return res.status(404).end();

            }
            res.status(200).end();
        }

    )
});

module.exports = router;