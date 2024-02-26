module.exports = {
    USER:'',
    HOST:'localhost',
    PASSWORD:'Ankit@123',
    DB:'Spotify',
    dialect:'mysql',
    logging:false,
    camelCase:true,
    additional:{
        timestamps:false
    },
    pool:{
        max:1,
        min:0,
        acquire:30000,
        idle:10000
    }
}