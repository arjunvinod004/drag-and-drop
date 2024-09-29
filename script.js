// let tasks = document.querySelectorAll(".taskItem");
// let status = document.querySelectorAll(".status1");
// let rightBox= document.querySelector(".first");
// let leftBox= document.querySelector(".task")
// let thirdBox= document.querySelector(".second")
// let LastBox= document.querySelector(".third")
// let addButton=document.querySelector(".primary")



// for(task of tasks){
//     task.addEventListener("dragstart",function(e){
//         let selected = e.target;
        
//         console.log(addButton);
        
        
//         console.log(selected);
//         rightBox.addEventListener("dragover",function(e){
//             e.preventDefault();

//         })
//         rightBox.addEventListener("drop",function(e){
//             rightBox.appendChild(selected);
//             selected= "";
//         })


//         leftBox.addEventListener("dragover",function(e){
//             e.preventDefault();

//         })
//         leftBox.addEventListener("drop",function(e){
//             leftBox.appendChild(selected);
//             selected= "";
//         })


//         thirdBox.addEventListener("dragover",function(e){
//             e.preventDefault();

//         })
//         thirdBox.addEventListener("drop",function(e){
//             thirdBox.appendChild(selected);
//             selected= "";
//         })


//         LastBox.addEventListener("dragover",function(e){
//             e.preventDefault();

//         })
//         LastBox.addEventListener("drop",function(e){
//             LastBox.appendChild(selected);
//             selected= "";
//         })

       

//     })
// }


// document.querySelector('.primary').addEventListener('click', function(e) {
//     // Create a new div element
//     var newDiv = document.createElement('div');
    
//     // Add content or classes to the new div
//     newDiv.className = 'taskItem';
//     newDiv.draggable = true;

//     // Create a new img element
//     var img = document.createElement('img');
//     img.src = './drag_drop_icon.png'; // Set the image source

//     // Create a new text node
//     var text = document.createTextNode('New Task');

//     // Append the img to the div
//     newDiv.appendChild(img);
    
//     // Append the text node to the div
//     newDiv.appendChild(text);

//     // Append the new div to the container
//     document.querySelector('.task').appendChild(newDiv);
// });


    
    
    // Append the new div to the container




    document.addEventListener('DOMContentLoaded', (event) => {
        let rightBox = document.querySelector(".first");
        let leftBox = document.querySelector(".task");
        let thirdBox = document.querySelector(".second");
        let lastBox = document.querySelector(".third");
        
        let addButton = document.querySelector(".primary");
        let taskContainerSelectors = [rightBox, leftBox, thirdBox, lastBox];
    
        taskContainerSelectors.forEach(container => {
            new Sortable(container, {
                group: 'shared',
                // animation: 150
            });
        });
    
        addButton.addEventListener('click', function() {

            var inputvalue= document.querySelector('.taskvalue').value
                var newDiv = document.createElement('div');
            
                // Add content or classes to the new div
                newDiv.className = 'taskItem';
                newDiv.draggable = true;
                var img = document.createElement('img');
                img.src = './drag_drop_icon.png'; // Set the image source
               
                const newText = document.createTextNode(inputvalue);
                   // Append the img to the div
                   newDiv.appendChild(img);
                   newDiv.appendChild(newText)
                // Append the new div to the container
                document.querySelector('.task').appendChild(newDiv);
                document.querySelector('.taskvalue').value = '';
        });
    });
    

// let tasks = document.querySelectorAll(".taskItem");
// let rightBox= document.querySelector(".first");
// let leftBox= document.querySelector(".task");
// let thirdBox= document.querySelector(".second");
// let LastBox= document.querySelector(".third");
// let addButton=document.querySelector(".primary");

// function taskfordraganddrop(element) {
//     element.addEventListener("dragstart", function(e) {
//         let selected = e.target;

//         rightBox.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         rightBox.addEventListener("drop", function(e) {
//             rightBox.appendChild(selected);
//             selected = "";
//         });

//         leftBox.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         leftBox.addEventListener("drop", function(e) {
//             leftBox.appendChild(selected);
//             selected = "";
//         });

//         thirdBox.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         thirdBox.addEventListener("drop", function(e) {
//             thirdBox.appendChild(selected);
//             selected = "";
//         });

//         LastBox.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         LastBox.addEventListener("drop", function(e) {
//             LastBox.appendChild(selected);
//             selected = "";
//         });
//     });
// }

// tasks.forEach(task => taskfordraganddrop(task));

// document.querySelector('.primary').addEventListener('click', function(e) {
//     // Create a new div element
//     var inputvalue= document.querySelector('.taskvalue').value
//     var newDiv = document.createElement('div');

//     // Add content or classes to the new div
//     newDiv.className = 'taskItem';
//     newDiv.draggable = true;
//     var img = document.createElement('img');
//     img.src = './drag_drop_icon.png'; // Set the image source
   
//     const newText = document.createTextNode(inputvalue);
//        // Append the img to the div
//        newDiv.appendChild(img);
//        newDiv.appendChild(newText)
//     // Append the new div to the container
//     document.querySelector('.task').appendChild(newDiv);
//     document.querySelector('.taskvalue').value = '';
//     // Add drag and drop functionality to the new div
//     taskfordraganddrop(newDiv)
// });



