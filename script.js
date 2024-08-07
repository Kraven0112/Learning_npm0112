import axios from 'axios'
axios.get('https://restcountries.com/v3.1/all').then((response)=>{
    console.log(response.data[0])
})
