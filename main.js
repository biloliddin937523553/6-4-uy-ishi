
let lists = document.querySelector('#lists')

const fetchDate = fetch('https://jsonplaceholder.typicode.com/users')

.then((res) => res.json())
.then((data) => render(data))

const render = (arr) => {
    console.log(arr,'data');
    arr.forEach(item => {
        console.log(item);
        const li = document.createElement('li')
        const name = document.createElement('h2')
        const username = document.createElement('p')
        const manzil = document.createElement('p')
        const email =  document.createElement('p')
        name.textContent = 'Ismi: '+ item.name 
        username.textContent ='Username: '+ item.username
        manzil.textContent = 'Manzil: '+ item.manzil
        email.textContent = 'Email: '+item.email
        li.append(name)
        li.append(username)
        li.append(manzil)
        li.append(email)
        lists.appendChild(li)
    });
}