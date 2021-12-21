
console.log('"5" == 5 ', "5" == 5)
console.log('"5" === 5 ', "5" === 5)


const btn = document.createElement('button')
const lnk = document.createElement('a')

lnk.innerText = 'LINK'
btn.innerText = 'Click 5'

lnk.href = 'http://www.google.com/'
const div = document.querySelector('.wrapper')
btn.dataset.num = '5'
btn.className = 'btn'
btn.classList.add('newBtn')
div.appendChild(btn)
// div.appendChild('<hr>')
document.body.appendChild(lnk)

lnk.addEventListener('click', function(event) {
    event.preventDefault()     //Prevent default (for link)
    window.location = 'https://www.stackdev.ru/'
})


const buttons = document.querySelectorAll('.btn')
console.log(buttons);

const handleClick = (event) => {
    console.log(event.target.textContent)
}

buttons.forEach(btn => {
    btn.addEventListener('click', handleClick)
})


const table = document.createElement('table')
const tr = document.createElement('tr')
const td = document.createElement('td')


div.appendChild(table)
table.appendChild(tr)


appendKid = (data) => {
    td.innerText = data
    tr.appendChild(td)
    console.log(tr)
}


const bears = fetch('https://api.sampleapis.com/beers/ale')
.then(res => res.json())
.then(data => {
    // console.log(data)


    for (let i = 0; i < 3; ) {
        // console.log(data[i].name)
        tr.appendChild(document.createElement('td')).innerText = (data[i].name)
        i++
        table.appendChild(tr)
        // appendKid(data[i].name)
        }
    }

)


