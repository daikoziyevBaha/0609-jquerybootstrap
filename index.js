let inputs = $('#formMad input')
let tomThumbInputs
const character = $('.character')
const hero = $('.name')
const adverb = $('.adverb')
const adjective = $('.adjctive')


$('#formMad').submit((e) => {
    e.preventDefault()
    hero.html(inputs[0].value).addClass('green')
    character.html(inputs[1].value).addClass('green')
    adverb.html(inputs[2].value).addClass('green')
    adjective.html(inputs[3].value).addClass('green')
    $('.answer-block:first-of-type').toggle()    

})

$('#tomThumb').submit((e) => {
    e.preventDefault()
    tomThumbInputs = $('#tomThumb input')
    let var1 = tomThumbInputs[0].value
    let var2 = tomThumbInputs[1].value
    let var3 = tomThumbInputs[2].value
    console.log(typeof var1, typeof var2, typeof var3)
    // console.log(Number.parseInt(var1) * Number.parseInt(var2) * Number.parseInt(var3))
    // console.log(tomThumbInputs[2].value)
    let size = Math.round((+tomThumbInputs[0].value * +tomThumbInputs[1].value * +tomThumbInputs[2].value) / 1024, 2)
    $('.answer-block:last-of-type').html(`File is ${size} which is Ok`).css('color','green')
    $('.answer-block:last-of-type').toggle(400)
})

$('#show-madLibs').on('click', () => {
    $('.madLibs').toggle()
    $('.tomThumb').toggle(400)
})

$('#show-tomThumb').on('click', () => {
    $('.tomThumb').toggle()
    $('.madLibs').toggle(400)
})