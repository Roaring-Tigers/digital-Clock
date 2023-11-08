

const clock = document.querySelector('#clock')

//   Date()

function currentTime(){

    const date = new Date()
    // console.log(date, typeof date)
    let hours = date.getHours() // 0-23
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let dayOfTheWeek = date.getDay()
    // let dateOf = date.getDate()



   if (hours ==0){
    clock.innerHTML = `12 :${minutes}:${seconds} AM`
   }

   else if(hours<12){
         clock.innerHTML = `${hours}:${minutes}:${seconds} AM`
   }

   else if(hours == 12){
    clock.innerHTML = `${hours}:${minutes}:${seconds} PM`
   }


   else if(hours>12){
    clock.innerHTML = `${hours-12}:${minutes}:${seconds} PM`
   }






    

}

// currentTime()

setInterval(currentTime)




// If the hour, min or sec hand is single figit add 0 before it.



