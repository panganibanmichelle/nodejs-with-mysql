const express = require('express')
const mysql = require('mysql')

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "nodejs_db"
}

const db = mysql.createConnection(dbConfig)

module.exports = (query) => {
    return new Promise((reject, resolve) => {
        db.connect(err => {
            if(err){
                reject(err)
            }else{
                db.query(query, (err, results) => {
                    if(err){
                        reject(err)
                    }else {
                        resolve(results)
                    }
                })
            }

        })
    })
    
}