
const db = require('./../../models')
const express = require('express')

module.exports =  class Controller {
    constructor(model){
        this.model = model
        this.router = express.Router()
    }

    async get(req, res){
        try{
            const result = await db[this.model].findOne({where: req.query})
            return res.status(200).send(result)
        } catch (error) {
            return res.status(400)
        }
    }

    async getAll(req, res){
        try{
            const result = await db[this.model].findAll()
            return res.status(200).send(result)
        } catch (error) {
            return res.status(500).send()
        }
    }

    async create(req, res){
        console.log(req.body)
        try {
            const result = await db[this.model].create({
                ...req.body, 
                createAt: Date.now(),
                updateAt: Date.now()
            })
            return res.status(200).send(result)
        } catch(error) {
            return res.status(400).send()
        }
        
    }

    async delete(req, res) {
        try {
            const instance = await db[this.model].findOne({where: req.query})
            const result = await instance.destroy()
            res.status(200).send(result)
        } catch(error) {
            return res.status(400).send()
        }
    }

    async update(req, res) {
        try{
            const instance = await db[this.model].findOne({where: req.body.update})
            const props = Object.getOwnPropertyNames(req.body.values)

            props.forEach(prop => {
                instance[prop] = req.body.values[prop]
            })

            const result = await instance.save()
            return res.status(200).send(result)
        } catch (error) {
            return res.status(400).send()
        }
        
    }
}