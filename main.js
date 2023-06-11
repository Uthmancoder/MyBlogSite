    let screen = document.getElementById("screen")
    let topScreen = document.getElementById("topscr")

    let   userdata = JSON.parse(localStorage.getItem("userdata"))
    if(!userdata){
        window.location.href =  "login.html"
        }
    function post(params) {
        document.getElementById("disp").style.display = "none"
        screen.innerHTML = `<div class="div" id = "div">
            <input type="text" id ="inp" placeholder="Title" style="width: 100 margin :20;">
            <textarea name="text" id="text" cols="40" rows="10" class = "textarea" >
            </textarea>
            <input type="text" id ="auth" placeholder="Author" style="width: 100 margin :20;">

            <button onclick="posted()" class="post">post</button>
        </div>`

        document.getElementById("postscreen").style.marginTop = "200px"
    }


    let postArray = []
    let index = 0
    let div = document.querySelector(".div")
    let myPosts = document.getElementById("postscreen")

    // post
    function posted() {
        myPosts.innerHTML = ""
        postArray.push(
            {
                title: document.getElementById("inp").value,
                author: document.getElementById("auth").value,
                posts: document.getElementById("text").value,
                likes: ""

            }
        )
        console.log(postArray);
        for (let index = 0; index < postArray.length; index++) {
            const ade = postArray[index];

            myPosts.innerHTML += `
            
            <div id = "ggg"  class = "blogs">
            <h3> Title :${ade.title} </h3> <h3> Author : ${ade.author} </h3> <h1 class = "postt"> ${ade.posts} </h1>

             
            <button class="likebt btn2" id = "likebtn" onclick = "like(evd)" >
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>

            <button class="tooltip bttn" onclick = "delp(${index})"  >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span class="tooltiptext">delete</span>
</button>
            
            </div>  `
        }
        document.getElementById("div").style.display = "none"
        document.getElementById("postscreen").style.marginTop = 0
        localStorage.setItem("posts", JSON.stringify(postArray))
        console.log(postArray);
        
    }
    let likeArray = []
    let likebtn = document.getElementById("likebtn")

    // like
    function like(index) {
       if( document.getElementById("likebtn").style.backgroundColor == ""){
            document.getElementById("likebtn").style.backgroundColor = "black"
            likeArray.push(1)
        }
        else  {   
            document.getElementById("likebtn").style.backgroundColor = "transparent" 
             likeArray.push(0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        }
       
    }

    // delete
    function delp(www) {
        myPosts.innerHTML = ""
        postArray.splice(index, 1)

        console.log(postArray);
        for (let index = 0; index < postArray.length; index++) {
            const ade = postArray[index];6

            myPosts.innerHTML = ` <div id = "ggg">
            <h3> Title :${ade.title} </h3> <h3> Author : ${ade.author} </h3> <h1 class = "postt"> ${ade.posts} </h1>

             
            <button class="likebt btn2" id = "likebtn" onclick = "like(${index})" >
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>

            <button class="tooltip bttn" onclick = "delp(${index})"  >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span class="tooltiptext">delete</span>
</button>
            
            </div>  `

        }
    }
    

    // view liked post
    function view() {
        myPosts.innerHTML = ""
        if (postArray[index].likes == 1) {
            for (let index = 0; index < postArray.length; index++) {
                const ade = postArray[index];

                myPosts.innerHTML += `
                       <h1> liked posts </h1
                <div class = "blogs">
            <h3> Title :${ade.title} </h3> <h3> Author : ${ade.author} </h3> <h1  class = "hh">  ${ade.posts} </h1> <br> </div>`

            }

        } else if (postArray[index].likes == 0) {
            myPosts.innerHTML = ""
        }

        // let view = JSON.parse(localStorage.getItem("posts"))
        // myPosts.innerHTML = view
    }