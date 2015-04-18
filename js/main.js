//app.js

var app= {
	loadRequirements:0,
	init: function(){
       
		document.addEventListener("deviceready", app.onDeviceReady);
		document.addEventListener("DOMContentLoaded", app.onDomReady);
	},
	onDeviceReady: function(){
         
		app.loadRequirements++;
		if(app.loadRequirements === 2){
			app.start();
		}
	},
	onDomReady: function(){
       
		app.loadRequirements++;
		if(app.loadRequirements === 2){
			app.start();
		}
	},
	start: function(){
      //  alert ("In start");
		//connect to database
		//build the lists for the main pages based on data
		//add button and navigation listeners

         
               
        // hammer for tapping/double tapped a persons name
        var personList = document.getElementById('personList');  
        var singleTap = new Hammer.Tap({event: 'singletap' });
        var doubleTap = new Hammer.Tap({event: 'doubletap', taps: 2 });

        var listHammer = new Hammer.Manager(personList, {});
        listHammer.add([doubleTap, singleTap]);
        doubleTap.recognizeWith(singleTap);

        singleTap.requireFailure(doubleTap);

        listHammer.on("singletap", app.tapPeopleList);    
        listHammer.on("doubletap", app.doubleTapPeopleList);
        
        
          
        //hammer for occasions tap/double tapped
        var occasionUList = document.getElementById('occasionList');
        var singleTap2 = new Hammer.Tap({event: 'singletap2' });
        var doubleTap2 = new Hammer.Tap({event: 'doubletap2', taps: 2 });
        
        var listHammer2 = new Hammer.Manager(occasionUList, {});
        
        listHammer2.add([doubleTap2, singleTap2]);
        doubleTap2.recognizeWith(singleTap2);
        singleTap2.requireFailure(doubleTap2);
        listHammer2.on("singletap2", app.tapOccasionList);    
        listHammer2.on("doubletap2", app.doubleTapOccasionList);
        
        
        //swipe to occasions
        var peopleList = document.getElementById('people-list');
        var peopleHammer = new Hammer(peopleList);
        peopleHammer.on("swipeleft swiperight", app.openOccasion);
       
        
        //swipe back to people
         var occasionList = document.getElementById('occasion-list');
        var occasionHammer = new Hammer(occasionList);
        occasionHammer.on("swipeleft swiperight", app.openPeople);
        
        // tap add button on person
        var addPersonBtn = document.getElementById('addPerson');
        var addPersonHammer = new Hammer(addPersonBtn);
        addPersonHammer.on("tap", app.peopleModal);
        
        // tap add button on Occasions
        var addOccasionBtn = document.getElementById('addOccasion');
        var addOccasionHammer = new Hammer(addOccasionBtn);
        addOccasionHammer.on("tap", app.occasionModal);
        
        //tap add button on gifts for person
        var addGiftPersonBtn = document.getElementById('addGiftPerson');
        var addGiftPersonHammer = new Hammer(addGiftPersonBtn);
        addGiftPersonHammer.on("tap", app.personGiftModal);
        
        //tap add button on gifts for occasion
        var addGiftOccasionBtn = document.getElementById('addGiftOccasion');
        var addGiftOccasionHammer = new Hammer(addGiftOccasionBtn);
        addGiftOccasionHammer.on("tap", app.occasionGiftModal);
        
        //cancel button for all 4 cancel buttons
        var cancelBtn = document.querySelectorAll(".btnCancel");
        for (var i=0; i<cancelBtn.length; i++){
            
        var cancelBtnHammer = new Hammer(cancelBtn[i]);
        cancelBtnHammer.on("tap", app.cancelModalOverlay);
        }
        
        //back button gifts for person
        var backBtnPerson = document.getElementById("personGiftBack");
        var backBtnPersonHammer = new Hammer(backBtnPerson);
        backBtnPersonHammer.on("tap", app.tapBackPerson);
        
        //back button gifts for occasion
        var backBtnOccasion = document.getElementById("occasionGiftBack");
        var backBtnOccasionHammer = new Hammer(backBtnOccasion);
        backBtnOccasionHammer.on("tap", app.tapBackOccasion);
        
        //add new person
        var savePersonBtn = document.getElementById("btnPersonSave");
        var savePersonBtnHammer = new Hammer(savePersonBtn);
        savePersonBtnHammer.on("tap", app.tapSavePersonBtn);
        

        //add new occasion
        var saveOccasionBtn = document.getElementById("btnOccasionSave");
        var saveOccasionBtnHammer = new Hammer(saveOccasionBtn);
        saveOccasionBtnHammer.on("tap", app.tapSaveOccasionBtn);
        
        //add new gift for person
         var saveGiftPersonBtn = document.getElementById("saveGiftPerson");
        var saveGiftPersonBtnHammer = new Hammer(saveGiftPersonBtn);
        saveGiftPersonBtnHammer.on("tap", app.tapGiftPersonBtn);
       // alert ("hello"); 
        
        //add new gift for occasion
         var saveGiftOccasionBtn = document.getElementById("saveGiftOccasion");
        var saveGiftOccasionBtnHammer = new Hammer(saveGiftOccasionBtn);
        saveGiftOccasionBtnHammer.on("tap", app.tapGiftOccasionBtn);
        
        
         
         //click or double click to crossout a gift item on PERSON menu
        var crossoutGiftPerson = document.getElementById('gift-list-person');
        var singleTap3 = new Hammer.Tap({event: 'singletap3' });
        var doubleTap3 = new Hammer.Tap({event: 'doubletap3', taps: 2 });
        
        var crossoutGiftPersonHammer = new Hammer.Manager(crossoutGiftPerson, {});
        
        crossoutGiftPersonHammer.add([doubleTap3, singleTap3]);
        doubleTap3.recognizeWith(singleTap3);
        singleTap3.requireFailure(doubleTap3);
        crossoutGiftPersonHammer.on("singletap3", app.tapCrossoutGiftPerson);    
        crossoutGiftPersonHammer.on("doubletap3", app.doubleTapCrossoutGiftPerson);
        
        
        // click or double click to crossout a gift item on OCCASION menu
        var crossoutGiftOccasion = document.getElementById('gift-list-occasion');
        var singleTap4 = new Hammer.Tap({event: 'singletap4' });
        var doubleTap4 = new Hammer.Tap({event: 'doubletap4', taps: 2 });
        
        var crossoutGiftOccasionHammer = new Hammer.Manager(crossoutGiftOccasion, {});
        
        crossoutGiftOccasionHammer.add([doubleTap4, singleTap4]);
        doubleTap4.recognizeWith(singleTap4);
        singleTap4.requireFailure(doubleTap4);
        crossoutGiftOccasionHammer.on("singletap4", app.tapCrossoutGiftOccasion);    
        crossoutGiftOccasionHammer.on("doubletap4", app.doubleTapCrossoutGiftOccasion);
        
               
        //var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
       var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000); 
        db.transaction( app.doTrans, app.successFunc, app.errFunc );
        
	},
    
doTrans: function(trans){
   // alert ("Should be making database");
//        trans.executeSql('DROP TABLE people');
//        trans.executeSql('DROP TABLE occasions');
     //  trans.executeSql('DROP TABLE gifts');
        
        trans.executeSql('CREATE TABLE IF NOT EXISTS people(person_id INTEGER PRIMARY KEY, person_name)' );
        trans.executeSql('CREATE TABLE IF NOT EXISTS occasions(occ_id INTEGER PRIMARY KEY, occ_name)' );
        trans.executeSql('CREATE TABLE IF NOT EXISTS gifts(gift_id INTEGER PRIMARY KEY, person_id INTEGER, occ_id INTEGER, gift_idea TEXT, purchased INT)' );

//        trans.executeSql('INSERT INTO people(person_name) VALUES("Doug")');
//        trans.executeSql('INSERT INTO people(person_name) VALUES("Fred")');
//         trans.executeSql('INSERT INTO occasions(occ_name) VALUES("Christmas")');
//         trans.executeSql('INSERT INTO occasions(occ_name) VALUES("Birthday")');
//        trans.executeSql('INSERT INTO occasions(occ_name) VALUES("Anniversary")');
    //   trans.executeSql('INSERT INTO gifts(person_id, occ_id, gift_idea, purchased) VALUES(2, 1, "Playstation", 1)');
//        trans.executeSql('INSERT INTO gifts(person_id, occ_id, gift_idea, purchased) VALUES(1, 1, "Xbox", 1)');
//        trans.executeSql('INSERT INTO gifts(person_id, occ_id, gift_idea, purchased) VALUES(2, 2, "Boat", 1)');
        
        trans.executeSql("SELECT * FROM people", [ ], peopleSuccess, transErr);
        trans.executeSql("SELECT * FROM occasions", [ ], occasionSuccess, transErr);
        
        function peopleSuccess(trans, results){
          //  alert ("should have selected all from people");
            var length = results.rows.length;
            for (var i=0; i<length; i++){
              //  alert (results.rows.item(i).person_name);
                var createPersonListItem = document.createElement("li");
                var personText = document.createTextNode(results.rows.item(i).person_name);
                createPersonListItem.appendChild(personText);
                createPersonListItem.setAttribute("data-ref", results.rows.item(i).person_id);
               
                document.getElementById("personList").appendChild(createPersonListItem);
            }
        }
        
        function occasionSuccess(trans, results){
          //  alert ("should have selected all from occasions");
            var length = results.rows.length;
            for (var i=0; i<length; i++){
              //  alert (results.rows.item(i).person_name);
                var createOccasionListItem = document.createElement("li");
                var occasionText = document.createTextNode(results.rows.item(i).occ_name);
                createOccasionListItem.appendChild(occasionText);
                createOccasionListItem.setAttribute("data-ref", results.rows.item(i).occ_id);
                document.getElementById("occasionList").appendChild(createOccasionListItem);

            }
        }
        
        function transErr() {
            alert ("Couldn't select the people");
        }
        
    },
    // when they tap a person, bring up screen for managing their gifts
    
tapPeopleList: function(ev){
        
     
         document.getElementById("gifts-for-person").className = "active";
        document.getElementById("people-list").className = "";
        
     var root = document.getElementById("gift-list-person");
        while( root.firstChild ){
      root.removeChild( root.firstChild );
        }
        var personTarget = ev.target.getAttribute("data-ref");
        
        var titleInfo = document.getElementById("newGiftPersonTitle");
        titleInfo.setAttribute("data-ref", personTarget);
       
         var personInnerHtml = ev.target.innerHTML;
        var nameInTitle = document.getElementById("nameOfPerson");
        nameInTitle.innerHTML = personInnerHtml;
        nameInTitle.setAttribute("data-ref", personTarget);
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
         db.transaction( populateGiftsTrans, app.successFunc, app.errFunc );
        
     
        
        function populateGiftsTrans(trans) {
           // alert ("successful transaction");
            trans.executeSql('SELECT g.purchased, g.gift_id, g.gift_idea, o.occ_name FROM gifts AS g INNER JOIN occasions AS o ON o.occ_id = g.occ_id WHERE g.person_id =? ORDER BY o.occ_name, g.gift_idea', [personTarget], populateSuccess, errFunc);
            
            function populateSuccess(trans, results){
            var length = results.rows.length;
            for (var i=0; i<length; i++){
                 var createGiftListItem = document.createElement("li");
                var giftText = results.rows.item(i).gift_idea;
                var occasionText = results.rows.item(i).occ_name;
                var fullText = document.createTextNode(giftText + " - " + occasionText);
                
                if (results.rows.item(i).purchased === 1){
                    createGiftListItem.className = "giftObtained";
                }
                
                createGiftListItem.appendChild(fullText);
                createGiftListItem.setAttribute("data-ref", results.rows.item(i).gift_id);
                document.getElementById("gift-list-person").appendChild(createGiftListItem);
                
            }
               
            
                
            }
            
        }
        function errFunc(){
            alert("Query didn't work");
        }
        

        
    },
    
     // delete person from database/on screen list
    
doubleTapPeopleList: function(ev){
       

        var personTarget = ev.target.getAttribute("data-ref");
       // var personTargetNum = Number(personTarget);
     //   var personInnerHtml = ev.target.innerHTML;
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        var removeTarget = ev.target;
        
        
        db.transaction( deletePersonTrans, app.successFunc, app.errFunc );
        
        function deletePersonTrans(trans) {
            
       //    trans.executeSql('DELETE FROM people WHERE person_name = ?', [personInnerHtml], removeListPerson());
            trans.executeSql('DELETE FROM people WHERE person_id = ?', [personTarget], removeListPerson());
            trans.executeSql('DELETE FROM gifts WHERE person_id = ?', [personTarget], app.successFunc);
        }
        
        function removeListPerson(){
          //  alert ("Removed person from database");
            removeTarget.parentNode.removeChild(removeTarget);           
        }
        
    },
    // SINGLE TAP ON AN OCCASION
    
tapOccasionList: function(ev){
       //tap an occasion, bring up screen to manage that occasion
         document.getElementById("gifts-for-occasion").className = "active";
        document.getElementById("occasion-list").className = "";
         
         var root = document.getElementById("gift-list-occasion");
        while( root.firstChild ){
      root.removeChild( root.firstChild );
        }
         
         var personTarget = ev.target.getAttribute("data-ref");
        
        var titleInfo = document.getElementById("newGiftOccasionTitle");
        titleInfo.setAttribute("data-ref", personTarget);
       
         var personInnerHtml = ev.target.innerHTML;
        var nameInTitle = document.getElementById("nameOfOccasion");
        nameInTitle.innerHTML = personInnerHtml;
        nameInTitle.setAttribute("data-ref", personTarget);
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
         db.transaction( populateGiftsTrans, app.successFunc, app.errFunc );
        
       
        
        function populateGiftsTrans(trans) {
           // alert ("successful transaction");
            trans.executeSql('SELECT g.purchased, g.gift_id, g.gift_idea, p.person_name FROM gifts AS g INNER JOIN people AS p ON p.person_id = g.person_id WHERE g.occ_id =? ORDER BY p.person_name, g.gift_idea', [personTarget], populateSuccess, errFunc);
            
            function populateSuccess(trans, results){
            var length = results.rows.length;
            for (var i=0; i<length; i++){
                 var createGiftListItem = document.createElement("li");
                var giftText = results.rows.item(i).gift_idea;
                var occasionText = results.rows.item(i).person_name;
                var fullText = document.createTextNode(giftText + " - " + occasionText);
                
                if (results.rows.item(i).purchased === 1){
                    createGiftListItem.className = "giftObtained";
                }
                
                createGiftListItem.appendChild(fullText);
                createGiftListItem.setAttribute("data-ref", results.rows.item(i).gift_id);
                document.getElementById("gift-list-occasion").appendChild(createGiftListItem);
                
            }
               
             
                
            }
        }
          function errFunc(){
            alert("Query didn't work");
        }
         
         
        
    },
      // delete occasion from database/on screen list
    
doubleTapOccasionList: function(ev){
      
       
          var personTarget = ev.target.getAttribute("data-ref");
     //   var personTargetNum = Number(personTarget);
    //    var occasionInnerHtml = ev.target.innerHTML;
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        var removeTarget = ev.target;
        
        
        db.transaction( deleteOccasionTrans, app.successFunc, app.errFunc );
        
        function deleteOccasionTrans(trans) {
          //  alert ("should be deleting occasion");
          // trans.executeSql('DELETE FROM occasions WHERE occ_name = ?', [occasionInnerHtml], removeListOccasion());
            trans.executeSql('DELETE FROM occasions WHERE occ_id = ?', [personTarget], removeListOccasion());
             trans.executeSql('DELETE FROM gifts WHERE occ_id = ?', [personTarget], removeListOccasion());
        }
        
        function removeListOccasion(){
          // need to remove the item from the dropdown menu somehow...
            removeTarget.parentNode.removeChild(removeTarget);           
        }
        
    },
    
openOccasion: function(){
     //  alert ("Swipe works");
        document.getElementById("people-list").className = "";
        document.getElementById("occasion-list").className = "active";
    },
    
openPeople: function(){
      //  alert "Swipe works";
        document.getElementById("people-list").className = "active";
        document.getElementById("occasion-list").className = "";
    },
    
peopleModal: function() {
        
        document.querySelector("[data-role=overlay]").style.display="block";
        document.getElementById("add-person").style.display="block";
        
    },
    
occasionModal: function() {
        document.querySelector("[data-role=overlay]").style.display="block";
        document.getElementById("add-occasion").style.display="block";
    },
    
    // when you click the add button within a persons name
    
personGiftModal: function() {
        document.querySelector("[data-role=overlay]").style.display="block";
        document.getElementById("add-gift-person").style.display="block";
         var root = document.getElementById("list-per-person");
        while( root.firstChild ){
      root.removeChild( root.firstChild );
       }
        
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000); 
        db.transaction( doTrans, app.successFunc, app.errFunc );
        
        function doTrans (trans){
                
            trans.executeSql("SELECT * FROM occasions", [ ], peopleSuccess, app.errFunc);
            
        }
        function peopleSuccess(trans, results) {
            
             var length = results.rows.length;
            for (var i=0; i<length; i++){
                var createPeopleDropdown = document.createElement("option");
                var peopleDropdown = document.createTextNode(results.rows.item(i).occ_name);
                createPeopleDropdown.appendChild(peopleDropdown);
                createPeopleDropdown.setAttribute("data-ref", results.rows.item(i).occ_id);
                document.getElementById("list-per-person").appendChild(createPeopleDropdown);
            }
            
        }
    },
    
    // when you click add button within an occasions name
occasionGiftModal: function() {
        document.querySelector("[data-role=overlay]").style.display="block";
        document.getElementById("add-gift-occasion").style.display="block";
        var root = document.getElementById("list-per-occ");
        while( root.firstChild ){
      root.removeChild( root.firstChild );
       }
        
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000); 
        db.transaction( doTrans, app.successFunc, app.errFunc );
        
        function doTrans (trans){
                
            trans.executeSql("SELECT * FROM people", [ ], occasionSuccess, app.errFunc);
            
        }
        function occasionSuccess(trans, results) {
            
             var length = results.rows.length;
            for (var i=0; i<length; i++){
                var createOccasionDropdown = document.createElement("option");
                var occasionDropdown = document.createTextNode(results.rows.item(i).person_name);
                createOccasionDropdown.appendChild(occasionDropdown);
                createOccasionDropdown.setAttribute("data-ref", results.rows.item(i).person_id);
                document.getElementById("list-per-occ").appendChild(createOccasionDropdown);
            }
            
        }

    },
    // all cancel buttons
    
cancelModalOverlay: function () {
        
      
        
         document.querySelector("[data-role=overlay]").style.display="none";
         document.getElementById("add-person").style.display="none";
         document.getElementById("add-occasion").style.display="none";
         document.getElementById("add-gift-person").style.display="none";
         document.getElementById("add-gift-occasion").style.display="none";
    },
    
    tapBackPerson: function () {
        document.getElementById("gifts-for-person").className = "";
        document.getElementById("people-list").className = "active";
    },
    
    tapBackOccasion: function () {
        document.getElementById("gifts-for-occasion").className = "";
        document.getElementById("occasion-list").className = "active";
        
       
    },
    
    // saving a new person into database
    
tapSavePersonBtn: function() {
       // alert ("New name saved");
         var saveValue = document.getElementById("new-per").value;
      
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        
        db.transaction( savePersonTrans, app.successFunc, app.errFunc );
        
        function savePersonTrans(trans) {
           
         //   alert (saveValue);
           trans.executeSql('INSERT INTO people(person_name) VALUES(?)', [saveValue], app.successFunc);
             trans.executeSql('SELECT * FROM people WHERE person_name=?', [saveValue], addListPerson);
         //   alert("Should be saving value");
            
        }
        
        function addListPerson (trans, results) {
         //   alert ("Should be adding to current list");
            var newPersonListItem = document.createElement("li");
                var personText = document.createTextNode(saveValue);
                newPersonListItem.appendChild(personText);
                newPersonListItem.setAttribute("data-ref", results.rows.item(0).person_id);
                document.getElementById("personList").appendChild(newPersonListItem);
            
        }
        
    },
    
    //saving a new occasion into database
    
tapSaveOccasionBtn: function() {
       // alert ("New name saved");
         var saveValue = document.getElementById("new-occ").value;
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        
        db.transaction( saveOccasionTrans, app.successFunc, app.errFunc );
        
        function saveOccasionTrans(trans) {
           
         
           trans.executeSql('INSERT INTO occasions(occ_name) VALUES(?)', [saveValue], app.successFunc);
            trans.executeSql('SELECT * FROM occasions WHERE occ_name=?', [saveValue], addListOccasion);
       
            
        }
        
        function addListOccasion (trans, results) {
         //   alert ("Should be adding to current list");
            
            var newOccasionListItem = document.createElement("li");
            var occasionText = document.createTextNode(saveValue);
             newOccasionListItem.setAttribute("data-ref", results.rows.item(0).occ_id);
             newOccasionListItem.appendChild(occasionText);
            
            
                document.getElementById("occasionList").appendChild(newOccasionListItem);
            
            var newOccasionDropDown = document.createElement("option");
            var occasionDropText = document.createTextNode(saveValue);
            
                newOccasionDropDown.appendChild(occasionDropText);
            document.getElementById("list-per-occ").appendChild(newOccasionDropDown);
            
        }
        
    },
    
    // the save button when trying to save a new gift idea for a specific person
    
tapGiftPersonBtn: function() {
       
        var giftIdea = document.getElementById("new-idea-person").value;
        var title = document.getElementById("nameOfPerson");
        var personID = title.getAttribute("data-ref"); // this WORKS
     
        var occasionDropDown  = document.getElementById("list-per-person");
        var occasionText = document.getElementById("list-per-person").value;
        var occasionID = occasionDropDown.options[occasionDropDown.selectedIndex].getAttribute("data-ref");

  
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        db.transaction( savePersonGiftTrans, app.successFunc, app.errFunc );
        
        function savePersonGiftTrans(trans){
            trans.executeSql('INSERT INTO gifts(person_id, occ_id, gift_idea, purchased) VALUES(?, ?, ?, 0)', [personID, occasionID, giftIdea], app.successFunc);

            trans.executeSql('SELECT * FROM gifts WHERE gift_idea=? AND person_id=?',[giftIdea, personID], successFunc);
        
        }
        function successFunc(trans, results){
         
         //  alert ("Should have added to database");
            var giftID = results.rows.item(0).gift_id;
            
            var newGiftListItem = document.createElement("li");
            
            var appendText = document.createTextNode(giftIdea + " - " + occasionText);
            
            newGiftListItem.setAttribute("data-ref", giftID);
            newGiftListItem.appendChild(appendText);
            
            document.getElementById("gift-list-person").appendChild(newGiftListItem);
        }
        
    },
    
    
    // the save button when trying to save a new gift idea for a specific occasion
    
tapGiftOccasionBtn: function(){
    var giftIdea = document.getElementById("new-idea-occasion").value;
        var title = document.getElementById("nameOfOccasion");
        var occasionID = title.getAttribute("data-ref"); // this WORKS
     
        var personDropDown  = document.getElementById("list-per-occ");
        var personText = document.getElementById("list-per-occ").value;
        var personID = personDropDown.options[personDropDown.selectedIndex].getAttribute("data-ref");

  
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        db.transaction( saveOccasionGiftTrans, app.successFunc, app.errFunc );
        
        function saveOccasionGiftTrans(trans){
            trans.executeSql('INSERT INTO gifts(person_id, occ_id, gift_idea, purchased) VALUES(?, ?, ?, 0)', [personID, occasionID, giftIdea], app.successFunc);

            trans.executeSql('SELECT * FROM gifts WHERE gift_idea=? AND occ_id=?',[giftIdea, occasionID], successFunc);
        
        }
    
        function successFunc(trans, results){
         
         //  alert ("Should have added to database");
            var giftID = results.rows.item(0).gift_id;
            
            var newGiftListItem = document.createElement("li");
            
            var appendText = document.createTextNode(giftIdea + " - " + personText);
            
            newGiftListItem.setAttribute("data-ref", giftID);
            newGiftListItem.appendChild(appendText);
            
            document.getElementById("gift-list-occasion").appendChild(newGiftListItem);
        }
    
    
    
},
    // mark gift as purchased on an individuals page
tapCrossoutGiftPerson: function(ev) {
        var crossoutTarget = ev.target;
        var targetID = ev.target.getAttribute("data-ref");
        
        
        if (ev.target.className === "giftObtained"){
            ev.target.className = "";
            }
            else{
        ev.target.className = "giftObtained";
            }
        
    
         var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
         db.transaction( crossoutTrans, app.successFunc, app.errFunc );
           
        
        function crossoutTrans(trans) {
           
       
            if (ev.target.className === "giftObtained"){
             trans.executeSql('UPDATE gifts SET purchased= 1 WHERE gift_id=?', [targetID], app.successFunc);
            }
            else{
         trans.executeSql('UPDATE gifts SET purchased= 0 WHERE gift_id=?', [targetID], app.successFunc);
            }
            
        }
               
    },
    
    // delete gift item
doubleTapCrossoutGiftPerson: function(ev) {
    
     var personTarget = ev.target.getAttribute("data-ref");
       // var personTargetNum = Number(personTarget);
      //  var personInnerHtml = ev.target.innerHTML;
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        var removeTarget = ev.target;
        
        
        db.transaction( deleteGiftTrans, app.successFunc, app.errFunc );
        
        function deleteGiftTrans(trans) {
            
       //    trans.executeSql('DELETE FROM people WHERE person_name = ?', [personInnerHtml], removeListPerson());
            
            trans.executeSql('DELETE FROM gifts WHERE gift_id = ?', [personTarget], removeListPerson());
        }
        
        function removeListPerson(){
          //  alert ("Removed person from database");
            removeTarget.parentNode.removeChild(removeTarget);           
        }
    
},
    //mark a gift as purchased on the occasions page
    
tapCrossoutGiftOccasion: function(ev) {
       var crossoutTarget = ev.target;
        var targetID = ev.target.getAttribute("data-ref");
        
        
        if (ev.target.className === "giftObtained"){
            ev.target.className = "";
            }
            else{
        ev.target.className = "giftObtained";
            }
        
        
        
         var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
         db.transaction( crossoutTrans, app.successFunc, app.errFunc );
        
        
        
        function crossoutTrans(trans) {
           
         //   alert (saveValue);
            if (ev.target.className === "giftObtained"){
             trans.executeSql('UPDATE gifts SET purchased= 1 WHERE gift_id=?', [targetID], app.successFunc);
            }
            else{
         trans.executeSql('UPDATE gifts SET purchased= 0 WHERE gift_id=?', [targetID], app.successFunc);
            }
            
         
   
            
        }
        
        
    },
    
    //delete gift item
    
doubleTapCrossoutGiftOccasion: function(ev) {
    
    var personTarget = ev.target.getAttribute("data-ref");
       // var personTargetNum = Number(personTarget);
      //  var personInnerHtml = ev.target.innerHTML;
        var db = window.openDatabase("myDb", "1.0", "Gifts Database", 1024000);
        var removeTarget = ev.target;
        
        
        db.transaction( deleteGiftTrans, app.successFunc, app.errFunc );
        
        function deleteGiftTrans(trans) {
            
            
            trans.executeSql('DELETE FROM gifts WHERE gift_id = ?', [personTarget], removeListPerson());
        }
        
        function removeListPerson(){
          //  alert ("Removed person from database");
            removeTarget.parentNode.removeChild(removeTarget);           
        }
    
},
    // generic success function
successFunc: function(){
        console.log ("Successful DB");
    },
    //generic error function
errFunc: function() {
       console.log ("DB funky");
    }
    
    
    
    
    
}

app.init();