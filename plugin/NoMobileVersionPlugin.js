let NMVP = {
    autoUse: true,
    shizzaHoURL: "https://github.com/ShizzaHo/No-Mobile-Verison-Plugin",
    messageTop: "Ой-ой!",
    messageBottom: "Кажется этот сайт предназначен только для просмотра с ПК",
    theme: "dark",
    themeCustom_BG: "",
    themeCustom_TEXT: "",
    smileVisible: true,
    szhBlockVisible: false,
}

let blockPage = 
`
<div class="block__BG">
        <h1>***1***</h1>
        <h2>***2***</h2>

        <span class="sadSmile">:(</span>

        <span class="shizzaho">Данное сообщение доступно благодаря <a href="***3***">No Mobile Verison Plugin</a></span>
    </div>
    <style>
        :root{
            --bgColor: #171717;
            --textColor: white;
            --font: 'Inter', sans-serif;
            --sadSmileVisibility: block;
            --shizzaHoVisible: block;
        }
        body{
            margin: 0;
            padding: 0;
            font-family: var(--font);
            user-select: none;
        }
        .block__BG{
            background-color: var(--bgColor);
            position: fixed;
            height: 100%;
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .block__BG h1{
            color: var(--textColor);
            font-size: 4vh;
            margin: 0;
        }
        .block__BG h2{
            color: var(--textColor);
            text-align: center;
            font-size: 2vh;
            margin: 0;
        }
        .sadSmile{
            display: var(--sadSmileVisibility);
            position: absolute;
            color: var(--textColor);
            font-size: 50vh;
            font-weight: 700;
            opacity: 0.1;
        }
        .shizzaho{
            display: var(--shizzaHoVisible);
            position: absolute;
            width: 100%;
            background-color: #343434;
            text-align: center;
            padding-bottom: 14px;
            padding-top: 14px;
            color: white;
            bottom: 0px;
        }
        a, a:visited{
            color: white;
        }
    </style>
`;

window.onload = () => {
    if(NMVP.autoUse === true){
        addDependencyPlugin();
        checkDevice();
    }
}

function addDependencyPlugin() {
    document.head.innerHTML += `
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

    `;
}

function checkDevice() { // Check function
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) { // Check whether you have accessed the site from a mobile device
        itMobile(); // if mobile
      } else {
        itPC(); // if pc
    }
}

function itPC(){
    // It's okay, you don't need the code :)!
}

function itMobile() {
    setPageSettings();
    document.body.innerHTML = ""; // clear body
    document.body.innerHTML = blockPage; // add block message
    setPostPageSettings();

}

function setPageSettings() {
    // change text
    blockPage = blockPage.replace("***1***", NMVP.messageTop);
    blockPage = blockPage.replace("***2***", NMVP.messageBottom);
    blockPage = blockPage.replace("***3***", NMVP.shizzaHoURL);
}

function setPostPageSettings() {
    // change theme
    switch (NMVP.theme) {
        case "dark":
            document.documentElement.style.setProperty("--bgColor", "#171717");
            document.documentElement.style.setProperty("--textColor", "white");
            break;
        case "light":
            document.documentElement.style.setProperty("--bgColor", "#D8D8D8");
            document.documentElement.style.setProperty("--textColor", "black");
            break;
        case "custom":
            document.documentElement.style.setProperty("--bgColor", NMVP.themeCustom_BG);
            document.documentElement.style.setProperty("--textColor", NMVP.themeCustom_TEXT);
            break;
        default:
            document.documentElement.style.setProperty("--bgColor", "#171717");
            document.documentElement.style.setProperty("--textColor", "white");
            break;
    }

    // visible settings

    if(NMVP.szhBlockVisible === true){
        document.documentElement.style.setProperty("--shizzaHoVisible", "block");
    } else {
        document.documentElement.style.setProperty("--shizzaHoVisible", "none");
    }

    if(NMVP.smileVisible === true){
        document.documentElement.style.setProperty("--sadSmileVisibility", "block");
    } else {
        document.documentElement.style.setProperty("--sadSmileVisibility", "none");
    }
}