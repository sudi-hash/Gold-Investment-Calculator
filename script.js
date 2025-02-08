// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_QrCeKAL_vS-zMK7TkOjynlzcCpIawI",
  authDomain: "gold-investment-calc.firebaseapp.com",
  projectId: "gold-investment-calc",
  storageBucket: "gold-investment-calc.appspot.com",
  messagingSenderId: "403540655298",
  appId: "1:403540655298:web:f05c054510f7fcbd38cf5b",
  measurementId: "G-FXVG3HPK0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Function to save investment data
async function saveInvestment() {
    const quantity = document.getElementById("quantity").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;
    
    if (!quantity || !term || !price) {
        alert("Please fill in all fields.");
        return;
    }
    
    try {
        await addDoc(collection(db, "investments"), {
            quantity: quantity,
            term: term,
            price: price,
            timestamp: new Date()
        });
        alert("Investment saved!");
        fetchInvestments();
    } catch (error) {
        console.error("Error saving investment:", error);
    }
}

// Function to fetch and display saved investments
async function fetchInvestments() {
    const investmentList = document.getElementById("investment-list");
    investmentList.innerHTML = "";
    
    const querySnapshot = await getDocs(collection(db, "investments"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const listItem = document.createElement("li");
        listItem.textContent = `Quantity: ${data.quantity}g, Term: ${data.term} months, Price: $${data.price}`;
        investmentList.appendChild(listItem);
    });
}

// Event listener for saving investment
document.getElementById("save-btn").addEventListener("click", saveInvestment);

// Fetch investments on page load
fetchInvestments();
