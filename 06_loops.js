// let i = 0
// while(i<3)
// {
//     console.log(i);
//     i++
// }

// // for loop
// for(let i=0; i<3; i++)
// {
//     console.log(i);
// }

// breaking out of nested loops
outer: for(let i=0; i<3; i++) {
    for (let j=0; j<3; j++){
        let input = prompt(`Value at coords (${i}, ${j})`, '');
        if(!input) break outer
    }
}
alert('done')