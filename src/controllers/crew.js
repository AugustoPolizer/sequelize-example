const Controller = require('./controller')
const db = require('./../../models')

class CrewContorller extends Controller {
    constructor () {
        super('Crew')

        this.router.get('/get', (req, res) => this.get(req, res))
        this.router.get('/getAll', (req, res) => this.getAll(req, res))
        this.router.get('/delete', (req, res) => this.delete(req, res))
        this.router.get('/shipByCrew', (req, res) => this.shipByCrew(req, res))
        this.router.put('/update', (req, res) => this.update(req, res))
        this.router.post('/create', (req, res) => this.create(req, res))
        this.router.post('/register', (req, res) => this.register(req, res))
    }

    async register(req, res){
        try {
            const crew = await db['Crew'].findOne({ where: req.body.crew })
            const ship = await db['Ship'].findOne({ where: req.body.ship })
            await crew.addShip(ship)
            
            return res.status(200).send()
        } catch (error) {
            return res.status(400).send()
        }
    }

    async shipByCrew(req, res) {
        try {
            const crew = await db['Crew'].findOne({ where: req.query })
            const ships = await crew.getShips()

            return res.status(200).send(ships)
        } catch (error) {
            return res.status(400).send()
        }
    }
}

module.exports = CrewContorller