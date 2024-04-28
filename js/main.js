var parent=document.querySelector(".parent");
parent.classList.add("container","py-5");


var h3=document.querySelector(".parent h3");
h3.classList.add("px-3","pb-4");
h3.style.color="#AAA";
h3.style.fontWeight="600";
h3.style.fontFamily="arial";

var h4=document.querySelector(".parent2 h4");
h4.style.marginBottom="30px";
h4.style.fontWeight="bold";
h4.style.fontFamily="arial";


var parent2=document.querySelector(".parent2");
parent2.classList.add("container","py-5","text-center");
parent2.style.backgroundColor="#EEE";
parent2.style.padding="120px";

var input=document.querySelectorAll("input");
for(var i=0;i<input.length;i++){
    input[i].style.border=" 1px solid #ced4da";
    input[i].style.color= "#212529";
    input[i].style.borderRadius="0.375rem";
    input[i].style.width="100%";
    input[i].style.padding="5px";
}

var p=document.querySelectorAll(".parent2 .child .p");
for(var i=0;i<p.length;i++){
    p[i].style.border="1px solid #6d0000";
    p[i].style.color="#6d0000";
    p[i].style.fontWeight="bold";
    p[i].style.backgroundColor="#ffb2b2";
    p[i].style.marginTop="10px";
    p[i].style.padding="5px";
    p[i].style.borderRadius="0.375rem";
    p[i].style.display="none";
}

var child2=document.querySelector(".parent2 .child2");
child2.classList.add("mt-3");


var button=document.querySelector(".parent2 button");
button.style.backgroundColor="#1167c4";
button.style.color="#fff";
button.style.marginTop="20px";
button.style.padding="7px 13px";
button.style.border="0";
button.style.borderRadius="0.375rem";

var h6=document.querySelectorAll(".parent2 .child h6");
for(var i=0;i<input.length;i++){
    h6[i].style.fontWeight="bold";
    h6[i].style.fontFamily="arial";
}

var span=document.querySelector("span");
span.classList.add("d-block","my-4","ps-3","pt-2");
span.style.color="#AAA";
span.style.fontWeight="600";
span.style.fontFamily="arial";

// ==========================================================================================

var Name=document.querySelector(".input1"),
    Urls=document.querySelector(".input2"),
    websiteName=document.querySelector(".parent3 .child .name"),
    website=document.querySelector(".parent3 .child .website"),
    deleted=document.querySelector(".parent3 .child .delete"),
    websites=[]
    x=document.getElementById("parent3");

if(localStorage.getItem("websites")!=null){
    websites=JSON.parse(localStorage.getItem("websites"));
    display();
}

function addwebsite(){
    var bookmark={
        websiteName:Name.value,
        website:Urls.value,
    }
    Name.addEventListener("keydown",function(){
        document.querySelector(".parent2 .child1 .p1").style.display="none";
    })
    Urls.addEventListener("keydown",function(){
        document.querySelector(".parent2 .child2 .p2").style.display="none";
    })
    if(bookmark.websiteName!="" && bookmark.website!=""){
        if(bookmark.website.includes("http://www.")||bookmark.website.includes("https://www.")){
            websites.push(bookmark);
            localStorage.setItem("websites",JSON.stringify(websites));
            display();
            cleardata();
        }
        else{
            window.alert("Url must include http://www or https://www")
        }
    }
    else if(bookmark.websiteName=="" && bookmark.website==""){
        document.querySelector(".parent2 .child1 .p1").style.display="block";
        document.querySelector(".parent2 .child2 .p2").style.display="block";
    }
    else if(bookmark.websiteName==""){
        document.querySelector(".parent2 .child1 .p1").style.display="block";
        document.querySelector(".parent2 .child2 .p2").style.display="none";
    }
    else if(bookmark.website==""){
        document.querySelector(".parent2 .child2 .p2").style.display="block";
        document.querySelector(".parent2 .child1 .p1").style.display="none";
    }

}
button.addEventListener("click",addwebsite);

function display(){
    // console.log(websites);
    y="";
    for(var i=0;i<websites.length;i++)
    {
        y+=`
            <div class="child d-flex my-4 px-4 py-4">
                <p class="name w-25 fw-bold fs-2 mb-0">${websites[i].websiteName}</p>
                <a href="${websites[i].website}" class="btn btn-info py-2 mx-2 website">Visit</a>
                <button onclick="remove(${i})" class="btn btn-danger mx-2 delete">Delete</button>
            </div>
        `;
        // deleted.addEventListener("click",function(){remove(i);})
    }
    x.innerHTML=y;
    var child=document.querySelectorAll(".parent3 .child");
    for(var i=0;i<child.length;i++){
        child[i].style.background="linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))";
    }
}

function cleardata(){
    Name.value="";
    Urls.value="";
}

function remove(index){
    websites.splice(index,1);
    display();
    localStorage.setItem("websites",JSON.stringify(websites));
}
