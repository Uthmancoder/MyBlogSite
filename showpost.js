  let getpost = JSON.parse(localStorage.getItem("post"));
  let dropleft = document.querySelector(".dropleft");
  
  // let imageposted = JSON.parse(localStorage.getItem("image"))
  let more = document.getElementById("more")
  more.addEventListener("click", function () {
    
    if ( document.querySelector(".dropleft").style.display === "block") {
      document.querySelector(".dropleft").style.display = "none"

    }else{
      document.querySelector(".dropleft").style.display = "block"
    }
  })
  for (let index = 0; index < getpost.length; index++) {
    const element = getpost[index];
    let imageposted = localStorage.getItem("image");
    let likedpost = JSON.parse(localStorage.getItem("posts"))
    document.getElementById("showscreen").innerHTML += `
    <div class="w-75 mx-auto shadow my-5 row rounded-2 d-flex align-items-center border p-3  postcon ">
     <div class="col-12 col-sm-8">
      <div id="textcontents${index}" class="text d-grid text-start w-100">
        <h1  class="fs-1 fw-bolder title w-100">${element.header}</h1> 
        <p class="subtitle postcontent fs-5 text-secondary">${element.opening}</p>
        <p class="postcontent text-secondary">${element.postcontent}</p>
        <div> 
      <div class="d-flex align-items-center"> 
        <button onclick=likepost(${index}) id="likebtn${index}" class="likebtn" title="like"><i class="fa-solid fa-heart"></i> </button>
     <div class="comdiv   w-fit-content">
      <button title="comment" onclick="commentmessg(${index})" id="commment${index}" class="commentbtn" title="comment"><i class="fa-solid fa-comment"></i></button>
      <small id="notice" class="notice border rounded-circle w-fit-content shadow "></small>
      </div>
       <div class="mx-3 commentsection" id="commentsection${index}">
        <div  class="d-flex align-items-center">
          <textarea class="commentarea" name="comment" id="commentinp(${index})" cols="30" rows="1"></textarea>
          <button onclick = "postcomment(${index})"  class="btn btn-primary send text-light"><i class="fa-regular fa-paper-plane"></i></button>
        </div>  
      </div>
        </div>
      </div>
      </div>
      </div>
      

      <div class="image-div col-12 col-sm-4"><img class="img-fluid" id="imagepreview" src="${element.imageposted}"></div>
      <button onclick="deletepost(${index})" title="delete post"  class="deletbtn"><span  class="material-symbols-outlined">
delete
</span></button>
<button onclick="editpost(${index})" title="Edit post"  class="edit"><span class="material-symbols-outlined">
    edit
</span></button>
    </div>
  `;
    if (likedpost && likedpost[index] && likedpost[index].likes) {
      document.getElementById(`likebtn${index}`).style.color = "red"
    } else {
      document.getElementById(`likebtn${index}`).style.color = "rgb(103, 96, 96)"
    }

  }
  document.getElementById("postblog").addEventListener("click", function(){
    window.location.href = "posting.html"
  })
  function likepost(index) {
    const likeButton = document.getElementById(`likebtn${index}`);
    let likedpost = JSON.parse(localStorage.getItem("posts")) || [];
    if (likeButton.style.color === "red") {
      // Unlike the post
      getpost[index].likes -= 1;
      likeButton.title = "like";
      likeButton.style.color = "rgb(103, 96, 96)";
      // Remove the like status from the local storage
      if (likedpost[index]) {
        likedpost.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(likedpost));
      }
    } else {
      // Like the post
      getpost[index].likes += 1;
      likeButton.title = "unlike";
      likeButton.style.color = "red";
      // Add the like status to the local storage
      likedpost[index] = { likes: 1 };
      localStorage.setItem("posts", JSON.stringify(likedpost));
      console.log(likedpost);
    }
  }

  function commentmessg(index) {
    console.log(index);
    const commentBtn = document.getElementById(`commment${index}`);
    const commentsec = document.getElementById(`commentsection${index}`);
    document.getElementById(`commentsection${index}`).style.display = "block"
    commentBtn.style.display = "none"
  }
  let index = 0;
  let commentArray = JSON.parse(localStorage.getItem("comments"));
  if (commentArray == null) {
    commentArray = []
  }

  function postcomment(index) {
    let commentpost = document.getElementById(`commentinp(${index})`);
    if (commentpost.value !== "") {
      commentArray.push(commentpost.value);
      console.log(commentArray);
      const commentBtn = document.getElementById(`commment${index}`);
      const commentsec = document.getElementById(`commentsection${index}`);
      document.getElementById(`commentsection${index}`).style.display = "none"
      commentpost.value = ""
      commentBtn.style.display = "block"
      localStorage.setItem("comments", JSON.stringify(commentArray))
    } else {
      alert("post a comment")
      return;
    }
    console.log(commentArray);
  }
  function deletepost(index) {
    getpost.splice(index, 1);
    localStorage.removeItem(`${getpost[index]}`)
    document.getElementById("showscreen").innerHTML = ""
    for (let index = 0; index < getpost.length; index++) {
      const element = getpost[index];
      let imageposted = localStorage.getItem("image");
      let likedpost = JSON.parse(localStorage.getItem("posts"))
      document.getElementById("showscreen").innerHTML += `
      <div class="w-75 mx-auto shadow my-5 row rounded-2 d-flex align-items-center border p-3  postcon ">
     <div class="col-12 col-sm-8">
      <div id="textcontents${index}" class="text d-grid text-start w-100">
        <h1  class="fs-1 fw-bolder title w-100">${element.header}</h1> 
        <h6 class="subtitle fs-5 text-secondary">${element.subtiitle}</h6>
        <p class="subtitle  fs-5 text-secondary">${element.opening}</p>
        <p class="postcontent text-secondary">${element.postcontent}</p>
        <div> 
      <div class="d-flex align-items-center"> 
        <button onclick=likepost(${index}) id="likebtn${index}" class="likebtn" title="like"><i class="fa-solid fa-heart"></i> </button>
     <div class="comdiv   w-fit-content">
      <button title="comment" onclick="commentmessg(${index})" id="commment${index}" class="commentbtn" title="comment"><i class="fa-solid fa-comment"></i></button>
      <small id="notice" class="notice border rounded-circle w-fit-content shadow "></small>
      </div>
       <div class="mx-3 commentsection" id="commentsection${index}">
        <div  class="d-flex align-items-center">
          <textarea class="commentarea" name="comment" id="commentinp" cols="30" rows="1"></textarea>
          <button onclick = "postcomment(${index})"  class="btn btn-primary send text-light"><i class="fa-regular fa-paper-plane"></i></button>
        </div>  
      </div>
        </div>
      </div>
      </div>
      </div>
      

      <div class="image-div"><img class="img-fluid" id="imagepreview" src="${element.imageposted}"></div>
      <button onclick="deletepost(${index})" title="delete post"  class="deletbtn"><span  class="material-symbols-outlined">
delete
</span></button>
      <button onclick="editpost(${index})" title="Edit post"  class="edit"><span class="material-symbols-outlined">
    edit
</span></button>
    </div>
  `;
      if (likedpost && likedpost[index] && likedpost[index].likes) {
        document.getElementById(`likebtn${index}`).style.color = "red"
      } else {
        document.getElementById(`likebtn${index}`).style.color = "rgb(103, 96, 96)"
      }

    }
    localStorage.setItem("post", JSON.stringify(getpost)); // update localStorage
  }
  function editpost(index) {
    const contentToEdit = document.getElementById(`textcontents${index}`);
    const postContent = contentToEdit.querySelector('.postcontent');
    postContent.contentEditable = "true";
    postContent.focus();
    localStorage.setItem("post", JSON.stringify(getpost));
  }
