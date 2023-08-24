let homePageTable = ["A", "Account Services Management", "account()", "C", "Customer Management System", "", "F", "Financial Authorization System", "", "I", "Interchange Tracking System", "", "K", "Key Management System", "", "L", "Letter System", "", "M", "Merchant Bankcard System", "", "O", "Offer Management System", "", "R", "Remote Interface System", "", "S", "Security System", "", "T", "Transaction Management System", "", "X"]

let secondColum = ["International Processing Platform", "Loyalty Management System"]

let accountBtnWords = ["Maintain", "Next Group", "List Cards", "Payoff Quote", "Delinquency Adj", "Statement History", "Name Addr Detail", "TRAN History", "Account Inquiry", "Exit"]

boxTitle = ["Business Unit(Req only for ADD)","Account Number","Product(Req only for ADD)", "BillingAccount(Req only for ADD)","Digital Card Indicator(Req only for ADD)","Short Name","Customer Number", "Alternate Customer Number Flag","Alternate Customer Number","User Account Number", "Internal Status","Charge Off Status","Block Code 1","Block Code 2","Billing Cycle","Statement Flag", "Statement Frequency","Return Mail Counter","Return Mail User","Return Mail Date","Permanent Collector", "Collateral Code","Owner Flag","Employee Code","Letter Request","Previous Bal Subjected to OVLM", "Colateral Card Request","Restructure Flag","Statement Reprint Flag","Flex Billing Flag","Application Date", "Date Account Opened"]

boxType = ["i","i","i","i","d","i","i","i","i","i","d","i","i","i","i","d","i","i","i","i","i","i","i","i","i","i","d","d","d","i","i","i"]

let j = 2;



class BoxTemplate {
    constructor(title){
        this.height = '25px';
        this.width = '400px';
        this.title = title;
    }
}

class InputBox extends BoxTemplate {
    constructor(title){
        super(title)
        this.create()
    }
    create(){
        const boxesInBox = document.createElement("div");
        boxesInBox.setAttribute("id", this.title);
        boxesInBox.setAttribute("class", "boxesInBox");
        document.getElementById("accountDiv").appendChild(boxesInBox);

        const label = document.createElement("label");
        label.innerHTML = (this.title)
        label.setAttribute("for", this.title);
        label.setAttribute("class", "labels");
        document.getElementById(this.title).appendChild(label);

        const makeInputBox = document.createElement("input");
        makeInputBox.setAttribute("type", "input");
        makeInputBox.setAttribute("name", this.title);
        makeInputBox.setAttribute("class", "boxes");
        document.getElementById(this.title).appendChild(makeInputBox);

    }
}

class DropDownBox extends BoxTemplate {
    constructor(title){
        super(title)
        this.create()
    }
    create(){
        const boxesInBox = document.createElement("div");
        boxesInBox.setAttribute("id", this.title);
        boxesInBox.setAttribute("class", "boxesInBox");
        document.getElementById("accountDiv").appendChild(boxesInBox);
        
        const label = document.createElement("label");
        label.innerHTML = (this.title)
        label.setAttribute("for", this.title);
        label.setAttribute("class", "labels");
        document.getElementById(this.title).appendChild(label);

        const makeDropDown = document.createElement("select")
        makeDropDown.setAttribute("name", this.title)
        makeDropDown.setAttribute("style", "height:" +this.height+";");
        makeDropDown.setAttribute("style", "width: this.width");
        makeDropDown.setAttribute("class", "boxes2")
        makeDropDown.setAttribute("id", this.title + 'd')
        document.getElementById(this.title).appendChild(makeDropDown);

        const dropDownO1 = document.createElement("option")
        dropDownO1.innerHTML = ("Physical Plastic Only (Default)(0)")
        dropDownO1.setAttribute("value", "physicalPlastic")
        dropDownO1.setAttribute("class", "dropDownOptions")
        document.getElementById(this.title + 'd').appendChild(dropDownO1);

        const dropDownO2 = document.createElement("option")
        dropDownO2.innerHTML = ("Digital Card Only (1)")
        dropDownO2.setAttribute("value", "digitalCardOnly")
        dropDownO2.setAttribute("class", "dropDownOptions")
        document.getElementById(this.title + 'd').appendChild(dropDownO2);

        const dropDownO3 = document.createElement("option")
        dropDownO3.innerHTML = ("Both Physical Plastic & Digital")
        dropDownO3.setAttribute("value", "bothPD")
        dropDownO3.setAttribute("class", "dropDownOptions")
        document.getElementById(this.title + 'd').appendChild(dropDownO3);
    }
}



function loginPage(){

    document.body.style.backgroundColor = "#d9d9d9";
    
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    document.body.appendChild(div1);

    const h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    h1.innerHTML = "Welcome to FirstVision<br>LiteUI";
    document.getElementById("div1").appendChild(h1);

    const p1 = document.createElement("p");
    p1.setAttribute("id", "p1");
    p1.innerHTML = "Please Login with your FirstVision credentials"
    document.getElementById("div1").appendChild(p1);

    const table = document.createElement("table");
    table.setAttribute("id", "table");
    document.getElementById("div1").appendChild(table);

    for(let i = 1; i < 5; i++){
        const tr = document.createElement("tr");
        tr.setAttribute("id", ("tr" + i));
        document.getElementById("table").appendChild(tr);
    }

    const input1 = document.createElement("input")
    input1.setAttribute("id", "input1");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "client-id");
    document.getElementById("tr1").appendChild(input1);

    const input2 = document.createElement("input")
    input2.setAttribute("id", "input2");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "username");
    document.getElementById("tr1").appendChild(input2);

    const input3 = document.createElement("input")
    input3.setAttribute("id", "input3");
    input3.setAttribute("type", "password");
    input3.setAttribute("placeholder", "password");
    document.getElementById("tr2").appendChild(input3);

    const button1 = document.createElement("button")
    button1.setAttribute("id", "button1");
    button1.setAttribute("onclick", "checkLogin()");
    button1.innerHTML = "Submit"
    document.getElementById("tr3").appendChild(button1);

    const button2 = document.createElement("button")
    button2.setAttribute("id", "button2");
    button2.innerHTML = "Cancel"
    document.getElementById("tr4").appendChild(button2);

    const p2 = document.createElement("p");
    p2.setAttribute("id", "p2");
    p2.innerHTML = "Powered by FirstVision"
    document.getElementById("div1").appendChild(p2);

    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    footer.setAttribute("class", "LoginFooter");
    document.body.appendChild(footer);
    
    const footerP = document.createElement("p");
    footerP.setAttribute("id", "footerP")
    footerP.innerHTML = "&#169; 2022 Fiserv,Inc. All Rights Reserved. | "
    document.getElementById("footer").appendChild(footerP);
    
    const footerA = document.createElement("a");
    footerA.setAttribute("id", "footerA")
    footerA.setAttribute("href", "");
    footerA.innerHTML = "Privacy Notice"
    document.getElementById("footerP").appendChild(footerA);
    
    const footerBr = document.createElement("br");
    footerBr.setAttribute("id", "footerBr")
    document.getElementById("footerA").appendChild(footerBr);
    
    const footerP2 = document.createElement("p");
    footerP2.setAttribute("id", "footerP2")
    footerP2.innerHTML = "Build Version: 1.5.10-3"
    document.getElementById("footerP").appendChild(footerP2);

}



function homePage(){

    reset()
    navBar()

    // table
    const table2 = document.createElement("table")                           
    table2.setAttribute("id", "table2");
    document.body.appendChild(table2);

    for (let x = 0; x < 33; x++){
        const tr = document.createElement("tr");
        tr.setAttribute("id", ("tr" + x));
        document.getElementById("table2").appendChild(tr);

        const td = document.createElement("td");
        td.setAttribute("id", ("td" + x));
        document.getElementById("tr" + x).appendChild(td);
    }

    const application = document.createElement("p")
    application.innerHTML = "Application" 
    document.getElementById("td0").appendChild(application)  

    for (let r = 0; r < homePageTable.length; r +=3){
        const letterTable = document.createElement("p");
        letterTable.setAttribute("id", ("letterTable" + r))
        letterTable.setAttribute("class", ("letterTable"))
        letterTable.innerHTML = homePageTable[r]
        document.getElementById("td" + r).appendChild(letterTable);

        const linkTable = document.createElement("a");
        linkTable.setAttribute("id", ("linkTable" + j));
        linkTable.setAttribute("class", "allLinks");
        //linkTable.setAttribute("href", homePageTable[j]);
        linkTable.setAttribute("onclick", homePageTable[j]);
        linkTable.innerHTML = "<a href='#'>"+homePageTable[j-1]+"</a>"
        document.getElementById("td" + j).appendChild(linkTable);
        j += 3
    }
    
    footer()
}



function account(){
    console.log('cheese')
    reset()
    navBar()

    const breadcrumbL1 = document.createElement("p")
    breadcrumbL1.innerHTML = "<a href='#'>Customer Management System</a> / <a href='#'>Data Management</a>" 
    document.body.appendChild(breadcrumbL1);

    const topLine = document.createElement("hr")
    topLine.setAttribute("class", "topLine1")
    document.body.appendChild(topLine);

    const bigText = document.createElement("h1")
    bigText.innerHTML = "Account Details - ARMB/ARQB/ARAB - 01-Account Base Segment - QUERY"
    document.body.appendChild(bigText)

    const accountDiv = document.createElement("div");
    accountDiv.setAttribute("id", "accountDiv");
    accountDiv.setAttribute("class", "accountDiv");
    document.body.appendChild(accountDiv);

    for (let f = 0; f < boxTitle.length; f++){
        if(boxType[f] == "i"){
            let test = new InputBox(boxTitle[f])
        }
        else {
            let test2 = new DropDownBox(boxTitle[f])
        }
        if(f == 4){
            const breakLine = document.createElement("br")
            breakLine.setAttribute("class", "breakLine")
            breakLine.setAttribute("style", "clear: both")
            document.getElementById("accountDiv").appendChild(breakLine);

            const topLine = document.createElement("hr")
            topLine.setAttribute("class", "topLine2")
            document.getElementById("accountDiv").appendChild(topLine);
        }
    }

    const accountDivBtns = document.createElement("div");
    accountDivBtns.setAttribute("id", "accountDivBtns");
    document.body.appendChild(accountDivBtns);

    const breakLine = document.createElement("br")
    breakLine.setAttribute("class", "breakLine")
    breakLine.setAttribute("style", "clear: both")
    document.getElementById("accountDivBtns").appendChild(breakLine);

    for (let b = 0; b < 10; b++){
        const accountBtn = document.createElement("button");
        accountBtn.setAttribute("class", "accountBtn");
        accountBtn.setAttribute("id", ("accountBtn" + b));
        accountBtn.innerHTML = accountBtnWords[b]
        document.getElementById("accountDivBtns").appendChild(accountBtn);
    }    
    footer()
}

function reset(){
    document.body.style.backgroundColor = "white";

    const myNode = document.getElementById("body");
    while (myNode.firstChild){
        myNode.removeChild(myNode.lastChild);
    }
}



function navBar(){
    const topNav = document.createElement("div")
    topNav.setAttribute("class", "topNav")
    topNav.setAttribute("id", "topNav");
    document.body.appendChild(topNav);

    const logo = document.createElement("a")
    logo.setAttribute("class", "active");
    logo.setAttribute("href", "#home");
    logo.innerHTML = "Fiserv"
    document.getElementById("topNav").appendChild(logo)

    const searchBar = document.createElement("input")
    searchBar.setAttribute("id", "searchBar");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("placeholder", "Search");
    document.getElementById("topNav").appendChild(searchBar);

    const applications = document.createElement("a")
    applications.setAttribute("href", "#applications");
    applications.innerHTML = "Applications"
    document.getElementById("topNav").appendChild(applications)

    const contact = document.createElement("a")
    contact.setAttribute("href", "#contact");
    contact.innerHTML = "Favorites"
    document.getElementById("topNav").appendChild(contact)

    const topNavRight = document.createElement("div")
    topNavRight.setAttribute("class", "topNavRight")
    topNavRight.setAttribute("id", "topNavRight");
    document.getElementById("topNav").appendChild(topNavRight)

    const dropDown = document.createElement("div")
    dropDown.setAttribute("class", "dropDown")
    dropDown.setAttribute("id", "dropDown");
    document.getElementById("topNavRight").appendChild(dropDown)

    const dropBtn = document.createElement("button")
    dropBtn.setAttribute("class", "dropBtn")
    dropBtn.setAttribute("id", "dropBtn")
    dropBtn.innerHTML = "FS1"
    document.getElementById("dropDown").appendChild(dropBtn)

    const arrow = document.createElement("i")
    arrow.setAttribute("class", "fa fa-caret-down")
    document.getElementById("dropBtn").appendChild(arrow)

    const dropContent = document.createElement("div")
    dropContent.setAttribute("class", "dropContent")
    dropContent.setAttribute("id", "dropContent")
    document.getElementById("dropBtn").appendChild(dropContent)

    for(let i = 1; i < 4; i++){
        const link = document.createElement("a");
        link.setAttribute("href",'#');
        link.setAttribute("class", "link");
        link.innerHTML = ("Link " + i)
        document.getElementById("dropContent").appendChild(link);
    }

    const devd = document.createElement("a")
    devd.setAttribute("href", "#DEVD");
    devd.innerHTML = "DEVD"
    document.getElementById("topNavRight").appendChild(devd)

    const account = document.createElement("a")
    account.setAttribute("href", "#Account");
    account.innerHTML = "0000REBECCA"
    document.getElementById("topNavRight").appendChild(account)
}



function footer(){
    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    footer.setAttribute("class", "footer");
    document.body.appendChild(footer);
    
    const footerP = document.createElement("p");
    footerP.setAttribute("id", "footerP")
    footerP.innerHTML = "&#169; 2022 Fiserv,Inc. All Rights Reserved. | "
    document.getElementById("footer").appendChild(footerP);
    
    const footerA = document.createElement("a");
    footerA.setAttribute("id", "footerA")
    footerA.setAttribute("href", "");
    footerA.innerHTML = "Privacy Notice"
    document.getElementById("footerP").appendChild(footerA);
    
    const footerBr = document.createElement("br");
    footerBr.setAttribute("id", "footerBr")
    document.getElementById("footerA").appendChild(footerBr);
    
    const footerP2 = document.createElement("p");
    footerP2.setAttribute("id", "footerP2")
    footerP2.innerHTML = "Build Version: 1.5.10-3"
    document.getElementById("footerP").appendChild(footerP2);
}



// jQuery

function checkLogin(){
    
    input1 = $("#input1").val();
    input2 = $("#input2").val();
    input3 = $("#input3").val();

    $.ajax({
        url: 'users.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            $(data.users).each(function(index, value) {
                console.log(index)
                console.log(value)
                console.log("why")
                let idCorrect = 0;
                let nameCorrect = 0;
                let passwordCorrect = 0;

                if(input1 === value.id){
                    idCorrect++
                }
                if(input2 === value.name){
                    nameCorrect++
                }
                if(input3 === value.password){
                    passwordCorrect++
                }
                if(idCorrect === 1 && nameCorrect === 1 && passwordCorrect === 1){
                    console.log("YAY")
                    homePage()
                } else{
                    console.log("nope")
                    loginPage()
                }

                console.log("idCorrect" + idCorrect)
                console.log("nameCorrect" + nameCorrect)
                console.log("passwordCorrect" + passwordCorrect)
            })
        }
    })
}
