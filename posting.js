  let header = document.getElementById("head");
  let opening = document.getElementById("opening");
  let postcontent = document.getElementById("content");
  let button = document.querySelector(".btn");
  let postArray = JSON.parse(localStorage.getItem("post"));
  let getuser = JSON.parse(localStorage.getItem("username"));
  let screen = document.getElementById("screen");
  console.log(postArray);

  document.getElementById(
    "screen"
  ).innerHTML = `Hey ${getuser} welcome to uthman's blog`;
  if (postArray == null) {
    postArray = [];
  }

  let reader = new FileReader();
  let postimge = document.getElementById("img");
  let imagechosen = document.querySelector(".choseimg");
  function pickfile(ev) {
    let file = ev.target.files[0];
    console.log(file);
    reader.onload = (event) => {
      let imageData = event.target.result;
      postimge.src = imageData;
      document.getElementById("filetoselect").style.display = "none";
      imagechosen.style.display = "block";
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  button.addEventListener("click", function () {
    if (!header.value || !opening.value || !postcontent.value || !postimge.src) {
      alert("input fields can not be empty");
    } else {
      postArray.push({
        header: header.value,
        opening: opening.value,
        postcontent: postcontent.value,
        imageposted: postimge.src,
      });
      alert("post updated successfully");
      window.location.href = "showpost.html";
      localStorage.setItem("post", JSON.stringify(postArray));
      console.log(postArray);
    }
  });