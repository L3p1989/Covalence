var name = 'L3p Patrick'

var interests = ['Herpetology', 'Gaming', 'Camping']

console.log('Name: ' + name.toUpperCase());

var Life = ['Career: Customer Service', 'Description: I like Ball Pythons']

for (var l = 0; l < Life.length; l++) {
    console.log(Life[l]);
}

console.log('\n' + 'My Interests:')

for (var i = 0; i < interests.length; i++) {
    console.log('* ' + interests[i]);
}

console.log('\n' + 'My Previous Experience:')

function displayPosition(job, title, desc) {
    console.log('* ' + job + '- ' + title + '- ' + desc);
}

displayPosition('Dish', 'CSR', 'Helped cust with sling products')
displayPosition('SDC', 'CSR', 'Helped with Home Security products')
displayPosition('DirecTV', 'CRS', 'I handled complicated account issues that regular agents could not figure out')

console.log('\n' + 'My Skills:')

function displaySkill(BAM, skill) {
    if (BAM == 1) {
        console.log('* ' + 'BAM: ' + skill);
    } else {
        console.log('* ' + skill);
    }
}

displaySkill(1, 'Clarinet')
displaySkill(0, 'Time Management')
displaySkill(0, 'Money Management')
displaySkill(1, 'Leadership')
displaySkill(0, 'Communication Soft Skills')
displaySkill(0, 'Problem Solving')