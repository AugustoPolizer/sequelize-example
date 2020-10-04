const Controller = require('./controller')
const db = require('./../../models')

class ShipController extends Controller {
    constructor() {
        super('Ship')

        this.router.get('/get', (req, res) => this.get(req, res))
        this.router.get('/getAll', (req, res) => this.getAll(req, res))
        this.router.get('/delete', (req, res) => this.delete(req, res))
        this.router.get('/crewByShip', (req, res) => this.crewByShip(req, res))
        this.router.put('/update', (req, res) => this.update(req, res))
        this.router.post('/create', (req, res) => this.create(req, res))
    }

    async crewByShip(){
        try {
            const ship = await db['Ship'].findOne({ where: req.query })
            const crews = await ship.getCrews()

            return res.status(200).send(crews)
        } catch (error) {
            return res.status(400).send()
        }
    }
}

module.exports = ShipController