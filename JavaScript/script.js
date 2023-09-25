const firebaseConfig = {
    apiKey: "AIzaSyAe_K1_WpE6x8ftdfTPDWz8PT90pmFvtbg",
    authDomain: "message-store-45dc7.firebaseapp.com",
    databaseURL: "https://message-store-45dc7-default-rtdb.firebaseio.com",
    projectId: "message-store-45dc7",
    storageBucket: "message-store-45dc7.appspot.com",
    messagingSenderId: "684341817653",
    appId: "1:684341817653:web:2e788f761192d17eb5dc7c"
};

//for initialize firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database(); // For Realtime Database

// Reference to the form and success message
var messageForm = document.getElementById("messageForm");
var successMessage = document.getElementById("successMessage");


// Function to submit the message
function submitMessage(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the message from the form
    var message = document.getElementById("message").value;

// Push the message data to Firebase Realtime Database (or Firestore)
var messagesRef = database.ref("messages"); // Replace "messages" with your desired database path
messagesRef.push({
  message: message
});

// Show the success message
successMessage.style.display = "block";

// Clear the form
setTimeout(() => {
    successMessage.style.display = "none";
}, 3000);

messageForm.reset();
}

// Add a submit event listener to the form
messageForm.addEventListener("submit", submitMessage);


