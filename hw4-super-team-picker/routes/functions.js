// const individualmembers = cohort.members.split(",")
// const headCount = individualmembers.length
// const assigned = []
// let randomnumber = Math.ceil(Math.random()*individualmembers.length)
// console.log(randomnumber)


//shuffles the order of the array

function shuffler(teamArray) {
    for (let i = 0; i < teamArray.length; i++) {
        let placeholder = teamArray[i]
        let randomtmember =Math.floor(Math.random() * (1 + i))
        teamArray[i] = teamArray[randomtmember]
        teamArray[randomtmember] = placeholder
    }   
    return teamArray
}


// Team Count Method -- will split the group 
// evenly into the number of groups entered 

function teamCount (members, quantity){
    let pool = shuffler(members)
    let teamsize = Math.floor(pool.length / quantity)
    let finalteams = []

    for (let i = 0; i < quantity; i++) {
        // console.log("pool: ",pool)
        // console.log("teamsize: ",teamsize)

        finalteams.push((pool.splice(0,teamsize)))

        console.log("finalteams: ",finalteams)  
    }
    if (pool.length > 0){
        for (let i = 0; i < pool.length; i++) {
            if(pool.length >0){
                let element = pool.splice(0,1).flat().toString()
                finalteams[i].push(element)
            } else {
                break;
            }
            }
        }
        return result
    }

// number per team will split teams into teams of the specified amount

function numberPerTeam(members, quantity){
    let pool = shuffler(members)
    let finalteams = []

    for (let i = 0; i < pool.length; i++) {
        finalteams.push(pool.splice(0, quantity))
        
    }
return finalteams

}
   




module.exports = {teamCount, numberPerTeam}