/*
    Define a variable named `notes` and assign a value of an empty array
*/
    let notes = [
     {
        id: 1,
        text: 'Finances',
        author: 'James Taylor',
        date: 'August 15 2017', 
        topics: ['How to Budget', 'Investment 101', 'Dealing with Taxes']
    }
]

notes.push({
     id: 2,
    text: 'Biking',
    author: 'Mike Hogie', 
    date: 'June 13 2019',
    topics: ['How To Ride 101', 'Maintaining Your Bike', 'Conditioning For Biking'] })
 notes.push({
    id: 3,
    text: 'Cooking',
    author: "Lizzie Jones",
    date: 'May 19 2018',
    topics: ['Cooking 101', 'Cleaning Your Utensils', 'Safe Meat Temps']})

notes.push({
    id: 4,
    text: 'Astronomy',
    author: 'Frank Vine',
    date: 'March 15 2020',
    topics: ['Astronomy 101', 'Cleaning Your Telescope', 'Best Time To View Stars'] })

let totaltopics = 0
for (const note of notes) {
totaltopics += notes.topics
}
const averagetopics = totaltopics/totaltopics.length
console.log(averagetopics)


    





/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

