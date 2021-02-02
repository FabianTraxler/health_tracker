const data = require('./data.js')
const nutrition = require('./nutrition_queries.js')
const health = require('./health_queries.js')
const time = require('./time_queries.js')

module.exports = {
    nutrition,
    health,
    time,
    data
}