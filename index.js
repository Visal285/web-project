const links = document.querySelectorAll(".link");
const displayElement = document.getElementById("showContent");
const navBody = document.getElementById("nav");
let trigger = false;
let switchContentEnable = true;
const navHeight = "50px";

function setContent(content) {
    let generateContent = document.createElement("div");
    generateContent.innerHTML = content;
    generateContent.classList.add("fade-in");
    displayElement.innerHTML = "";
    displayElement.appendChild(generateContent);

    // expand content area
    displayElement.classList.add("active");
    displayElement.style.maxHeight = displayElement.scrollHeight + "px";
}

function navigateA() {
    navBody.style.height = "360px";
    setContent(`
<div class="store-container">
        <div class="app-links">
            <p>Apple</p>
            <p>quick links</p>
            <a href="#">iPhone</a>
            <a href="#">iPad</a>
            <a href="#">Mac Book</a>
            <a href="#">iWatch</a>
        </div>
        <div class="app-links">
            <p>Samsung</p>
            <p>quick links</p>
            <a href="#">Samsung</a>
            <a href="#">Samsung pad</a>
            <a href="#">Samsung Watch</a>
            <a href="#">Samsung Tv</a>
        </div>
        <div class="app-links">
            <p>Oppo</p>
            <p>quick links</p>
            <a href="#">OPPO</a>
            <a href="#">OPPO Pad</a>
            <a href="#">OPPO Watch</a>
            <a href="#">OPPO Audio</a>
        </div>
    </div>
    `);
}

function navigateB() {
    navBody.style.height = "600px";
    setContent(`
        <div class="phoneMainContainer">
            <div class="leftContainer">
                <div class="containerphone">
                    <a href="#"><img src="assets/images/iphone17promax.jpg" alt="find x9" height="140px"></a>
                    <div class="dots">
                        <div class="color" style="background-color: rgb(237, 133, 47);"></div>
                        <div class="color" style="background-color: rgb(58, 53, 46);"></div>
                        <div class="color" style="background-color: rgb(225, 227, 232)"></div>
                    </div>
                    <div class="des"><p>iPhone 17Pro Max</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/iphone17.jpg" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgba(197, 238, 197, 1);"></div>
                            <div class="color" style="background-color: rgb(233, 225, 155);"></div>
                            <div class="color" style="background-color: rgb(210, 207, 203);"></div>
                            <div class="color" style="background-color: #bf7bd5;"></div>
                    </div>
                    <div class="des"><p>iPhone17</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/iphone16promax.jpg" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(210, 207, 203);"></div>
                            <div class="color" style="background-color: rgb(97, 92, 84);"></div>
                            <div class="color" style="background-color: rgb(67, 68, 102);"></div>
                    </div>
                    <div class="des"><p>iPhone 16Pro Max</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/iphone16.webp" alt="find x9" height="140px"></a>
                    <div class="dots">
                        <div class="color" style="background-color: rgb(128, 128, 138);"></div>
                        <div class="color" style="background-color: rgba(195, 195, 243, 1);"></div>
                        <div class="color" style="background-color: rgba(239, 236, 188, 1);"></div>
                        <div class="color" style="background-color: rgba(230, 212, 232, 1);"></div>
                    </div>
                    <div class="des"><p>iPhone 16</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/iphone17airs.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(210, 207, 203);"></div>
                            <div class="color" style="background-color: rgb(195, 232, 245);"></div>
                            <div class="color" style="background-color: rgb(168, 176, 213);"></div>
                    </div>
                    <div class="des"><p>iPhone17 air</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/14-pro-max-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                        <div class="color" style="background-color: rgb(128, 128, 138);"></div>
                        <div class="color" style="background-color: rgba(203, 203, 220, 1);"></div>
                        <div class="color" style="background-color: rgba(234, 163, 247, 1)"></div>
                    </div>
                    <div class="des"><p>iPhone 14 Pro Max</p></div>
                </div>
            </div>
            <div class="rightContainer">
                <a href="#"><p>iPhone</p></a>
                <a href="#"><p>iPad</p></a>
                <a href="#"><p>Mac Book</p></a>
                <a href="#"><p>iWatch</p></a>
                <a href="#"><p>Apple Asessaries</p></a>
            </div>
        </div>
    `);
}

function navigateC() {
    navBody.style.height = "600px";
    setContent(`
            <div class="phoneMainContainer">
            <div class="leftContainer">
                <div class="containerphone">
                    <a href="#"><img src="assets/images/z-fold-7-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(162, 159, 158);"></div>
                            <div class="color"></div>
                    </div>
                    <div class="des"><p>Z Fold7</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/Z-Flip-7-Coral-Red-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgba(255, 99, 71, 0.492) ;"></div>
                            <div class="color" style="background-color: rgba(118, 103, 100, 0.516) ;"></div>
                            <div class="color" style="background-color: rgba(196, 78, 206, 0.766) ;"></div>
                            <div class="color" style="background-color: rgba(97, 139, 236, 0.766) ;"></div>
                    </div>
                    <div class="des"><p>Z Flip7</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/Screenshot 2025-12-05 212559.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(182, 167, 146);"></div>
                            <div class="color" style="background-color: rgb(76, 99, 183);"></div>
                            <div class="color" style="background-color: rgb(74, 70, 63);"></div>
                    </div>
                    <div class="des"><p>S25 Ultra</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/s24pro-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: tan;"></div>
                            <div class="color" style="background-color: gray;"></div>
                            <div class="color" style="background-color: rgba(0, 0, 0, 0.358);"></div>
                    </div>
                    <div class="des"><p>S24 Ultra</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/note20ultra.jpg" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(182, 167, 146);"></div>
                            <div class="color" style="background-color: rgb(76, 99, 183);"></div>
                            <div class="color" style="background-color: rgb(74, 70, 63);"></div>
                    </div>
                    <div class="des"><p>Note20 Ultra</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/a56.jpg" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgba(240, 235, 227, 1);"></div>
                            <div class="color" style="background-color: rgba(151, 163, 206, 1);"></div>
                            <div class="color" style="background-color: rgba(139, 133, 122, 1);"></div>
                    </div>
                    <div class="des"><p>A 56</p></div>
                </div>
            </div>
            <div class="rightContainer">
                <a href="#"><p>Samsung S Series</p></a>
                <a href="#"><p>Samsung Note Series</p></a>
                <a href="#"><p>Samsung Pad</p></a>
                <a href="#"><p>Samsung A Series</p></a>
                <a href="#"><p>Samsung Tv</p></a>
                <a href="#"><p>Samsung Watch</p></a>
                <a href="#"><p>Samsung Asessaries</p></a>
            </div>
        </div>
    `);
}

function navigateD() {
    navBody.style.height = "600px";
    setContent(`
        <div class="phoneMainContainer">
            <div class="leftContainer">
                <div class="containerphone">
                    <a href="#"><img src="assets/images/oppo-find-n5.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(231, 198, 153);"></div>
                            <div class="color" style="background-color: rgb(146, 90, 157);"></div>
                            <div class="color" style="background-color: rgb(37, 103, 58);"></div>
                    </div>
                    <div class="des"><p>Find N5</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/Find-X9-CHARC-02-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(211, 161, 91);"></div>
                            <div class="color" style="background-color: rgb(185, 179, 171);"></div>
                            <div class="color"></div>
                    </div>
                    <div class="des"><p>Find X9 Pro</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/OPPO-Find-X8-Pro-Black-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(60, 59, 58);"></div>
                            <div class="color" style="background-color: rgb(17, 79, 31);"></div>
                            <div class="color" style="background-color: rgb(55, 51, 108);"></div>
                    </div>
                    <div class="des"><p>Find X8 Ultra</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/oppo-find-7-ultra-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgb(12, 25, 99);"></div>
                            <div class="color" style="background-color: rgb(103, 65, 13);"></div>
                            <div class="color" style="background-color: rgb(226, 223, 219);"></div>
                    </div>
                    <div class="des"><p>Find X7 Ultra</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/Oppo-Find-N3-Flip-Pink-removebg-preview.png" alt="find x9" height="140px"></a>
                    <div class="dots">
                        <div class="color" style="background-color: rgba(227, 190, 232, 1);"></div>
                        <div class="color" style="background-color: rgba(234, 224, 194, 1);"></div>
                        <div class="color" style="background-color: gray;"></div>
                        <div class="color" style="background-color: rgb(142, 142, 227);"></div>
                    </div>
                    <div class="des"><p>Find N3 Flip</p></div>
                </div>
                <div class="containerphone">
                    <a href="#"><img src="assets/images/oppo-reno-8t-.jpg" alt="find x9" height="140px"></a>
                    <div class="dots">
                            <div class="color" style="background-color: rgba(241, 237, 153, 1);"></div>
                            <div class="color" style="background-color: rgb(103, 65, 13);"></div>
                            <div class="color" style="background-color: rgb(226, 223, 219);"></div>
                    </div>
                    <div class="des"><p>Reno 8T 5G</p></div>
                </div>
            </div>
            <div class="rightContainer">
                <a href="#"><p>oppo find x9 Series</p></a>
                <a href="#"><p>oppo A Series</p></a>
                <a href="#"><p>oppo Reno Series</p></a>
                <a href="#"><p>oppo N Series</p></a>
                <a href="#"><p>oppo K series</p></a>
                <a href="#"><p>oppo Watch</p></a>
                <a href="#"><p>oppo Tv</p></a>
                <a href="#"><p>oppo Asessaries</p></a>
            </div>
        </div>
    `);
}

function navigateE() {
    navBody.style.height = "400px";
    setContent(`
    <div class="search-content">
        <div class="search">
            <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" type="text" id="search" placeholder="Serach Anything...">
        </div>
        <div class="search-recomend">
            <p style="margin:0;color:gray">quick link</p>
            <a href="#"><span style="color:gray;">></span> New phones</a>
            <a href="#"><span style="color:gray;">></span> Our surpport</a>
            <a href="#"><span style="color:gray;">></span> About us</a>
            <a href="#"><span style="color:gray;">></span> contact us</a>
            <a href="#"><span style="color:gray;">></span> how can we insure you</a>
        </div>
    </div>
    `);
}
let old;
links.forEach(link =>{
    link.addEventListener("mouseover",()=>{
        const responding = link.getAttribute("name");

        //nav background style configure
        dropBanner();


        if(responding === "a") {
            if(old == "a") return;
            trigger  = true;
            
            navigateA()
            old = "a";
        }
        else if(responding === "b") {
            if(old == "b") return;
            navigateB()
            old = "b";
        }
        else if(responding === "c") {
            if(old == "c") return;
            navigateC()
            old = "c";
        }
        else if(responding=== "d"){
            if(old == "d") return;
            navigateD()
            old="d";
        }
        else{
            if(old == "e") return;
            navigateE()
            old="e"; 
        }
    });
});

navBody.addEventListener("mouseleave",()=>{
    displayElement.style.maxHeight = 0;
    displayElement.classList.remove("active");
    old = "";
    navBody.style.height = navHeight;

    if(window.innerWidth <= 820){
        toggle = false;
        toggleSearch = false;
        setToggleE();
    }

    upBanner();
});

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const barm = document.querySelector(".barM");

function setToggleX(){
    bar1.classList.add("action");
    bar2.classList.add("action");
    barm.classList.add("action");
}
function setToggleE(){
    bar1.classList.remove("action");
    bar2.classList.remove("action");
    barm.classList.remove("action");
}
function dropBanner(){
    navBody.style.backgroundColor = "white";
    document.getElementById("main").style.filter = "blur(10px)";
}
function upBanner(){
    navBody.style.backgroundColor="#ffffffd2";
    document.getElementById("main").style.filter = "blur(0px)";
}
const toggleMenu = document.getElementById("menu");
let toggle = false;

const toggleSMenu = document.getElementById("search");
let toggleSearch = false;

toggleMenu.addEventListener("click",()=>{
    toggle=!toggle;
    if(toggle){
        dropBanner();
        setToggleX();
        displayElement.innerHTML = "";
        navBody.style.height = "530px";
        setContent(
            `
            <div class="drop-down">
                <div class="linkss">
                    <a href="index.html">Store</a>
                    <a href="pages/apple.html">apple</a>
                    <a href="pages/samsung.html">samsong</a>
                    <a href="pages/oppo.html">oppo</a>
                    <a href="#">Contact</a>
                    <a href="#">Sbout us</a>
                    <a href="#">Support</a>
                </div>
            </div>
            `
        )

        // set search goggle to false, user cliked harbugar menu
        toggleSearch = false;
    }
    else{
        navBody.style.height = "50px";
        setToggleE();
        upBanner();
    }
})

toggleSMenu.addEventListener("click",()=>{
    toggleSearch = !toggleSearch;

    if(toggleSearch){
        displayElement.innerHTML = "";
        navigateE();
        dropBanner();
        //set hambugar menu to false, user click search button
        setToggleE();
        toggle = false;
    }
    else{
        navBody.style.height = navHeight;
        upBanner();
    }
})


