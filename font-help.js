(function () {
    const allowedHost = "jannat-mbbdteam.blogspot.com"; 
    if (window.location.hostname !== allowedHost) {
        console.warn("🚨 Unauthorized access detected! 🚨");
        
        // Professional prank page with sleek design
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #1d1f22; color: #fff; font-family: 'Arial', sans-serif;">
                <div style="text-align: center; padding: 40px; background: #333; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); max-width: 600px; width: 100%;">
                    <h1 style="font-size: 48px; color: #e74c3c; margin-bottom: 20px;">🚫 Access Denied 🚫</h1>
                    <p style="font-size: 20px; color: #ecf0f1; line-height: 1.6;">
                        This website has been compromised and is being monitored by the <strong style="color: #e74c3c;">Bipul Sheikh</strong>. Unauthorized access attempts will be logged.
                    </p>
                    <p style="font-size: 16px; color: #bdc3c7; margin-top: 30px;">
                        For further inquiries or to report an issue, please contact us at <a href="mailto:bipul.mgl1@gmail.com" style="color: #3498db; text-decoration: none;">Bipul.mgl1@gmail.com</a>
                    </p>
                    <footer style="margin-top: 40px; color: #7f8c8d; font-size: 14px;">
                        <p>💻 Hacked by: <strong style="color: #e74c3c;">Bipul Sheikh 👾</strong></p>
                    </footer>
                </div>
            </div>
        `;
        
        throw new Error("🚨 This script can only be used on " + allowedHost + " 🚨");
    }

    console.log("✅ Script successfully loaded on", allowedHost);
    console.log("💻 Hacked by: Bipul Sheikh 👾");

        function toggleMoreOptionsMenu() {
            const menu = document.getElementById('moreOptionsMenu');
            menu.classList.toggle('hidden');
        }

        function clearChatHistory() {
            localStorage.removeItem('chatHistory');
            document.getElementById('chatBox').innerHTML = '';
        }
        
        let isJoining = false;
        let isRequesting = false;
        let userDetails = {};
        let requestDetails = {};

        const info = {
            industry: "Non Profit Organization",
            founded: "2024-01-01",
            founder: "MBBD TEAM",
            areaServed: "️64 District",
            services: "Free",
            owners: "Bipul Sheikh",
            members: "Bangladesi Blood Donors",
            employees: "150+",
            rating: "4",
            website: "[https://bddonor.blogspot.com]",
            address: "Saindaha, Palashbari 5730, Gaibandha",
            telephone: "01723068952",
            email: "amijamai82@gmail.com"
        };

       document.addEventListener("DOMContentLoaded", function() {
            loadChatHistory();
            document.getElementById('moreOptionsBtn').addEventListener('click', toggleMoreOptionsMenu);
        });

        function openEmojiPicker() {
            const input = document.getElementById('promptInput');
            const event = new Event('focus');
            input.dispatchEvent(event);
            input.focus();
            if (document.createEvent) {
                const e = document.createEvent('KeyboardEvent');
                e.initKeyboardEvent('keydown', true, true, window, false, false, false, false, 0, 0);
                input.dispatchEvent(e);
            } else {
                const e = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, keyCode: 0 });
                input.dispatchEvent(e);
            }
        }

        async function fetchResponse() {
            let userPrompt = document.getElementById("promptInput").value;
            let chatBox = document.getElementById("chatBox");

            if (userPrompt.trim() === "") return;

            // Display user message
            let userMessage = document.createElement("div");
            userMessage.className = "flex justify-end mb-4";
            userMessage.innerHTML = `
                <div class="bg-blue-500 text-white p-3 rounded-lg shadow max-w-xs">
                    ${userPrompt}
                    <div class="text-xs text-right mt-1">12:00 PM <i class="fas fa-check-double text-blue-300"></i></div>
                </div>
            `;
            chatBox.appendChild(userMessage);
            chatBox.scrollTop = chatBox.scrollHeight;

            // Save to local storage
            saveChatHistory(userMessage.outerHTML);

            // Clear input
            document.getElementById("promptInput").value = "";

            if (userPrompt.toLowerCase() === "/join") {
                isJoining = true;
                isRequesting = false;
                userDetails = {};
                displayBotMessage("Please provide your name.");
                return;
            }

            if (userPrompt.toLowerCase() === "/request") {
                isRequesting = true;
                isJoining = false;
                requestDetails = {};
                displayBotMessage("Please provide the patient's name.");
                return;
            }

            if (isJoining) {
                if (!userDetails.name) {
                    userDetails.name = userPrompt;
                    displayBotMessage("Please provide your blood group.");
                } else if (!userDetails.bloodGroup) {
                    userDetails.bloodGroup = userPrompt;
                    displayBotMessage("Please provide your contact number.");
                } else if (!userDetails.contact) {
                    userDetails.contact = userPrompt;
                    displayBotMessage("Please provide your location.");
                } else if (!userDetails.location) {
                    userDetails.location = userPrompt;
                    isJoining = false;
                    displayBotMessage("Thank you for providing your details. We will contact you soon.");
                    sendToTelegram(userDetails, 'join');
                }
                return;
            }

            if (isRequesting) {
                if (!requestDetails.patientName) {
                    requestDetails.patientName = userPrompt;
                    displayBotMessage("Please provide the patient's blood group.");
                } else if (!requestDetails.bloodGroup) {
                    requestDetails.bloodGroup = userPrompt;
                    displayBotMessage("Please provide the patient's location.");
                } else if (!requestDetails.location) {
                    requestDetails.location = userPrompt;
                    displayBotMessage("Please provide your contact number.");
                } else if (!requestDetails.contact) {
                    requestDetails.contact = userPrompt;
                    isRequesting = false;
                    displayBotMessage("Thank you for providing the details. We will contact you soon.");
                    sendToTelegram(requestDetails, 'request');
                }
                return;
            }

            if (userPrompt.toLowerCase() === "/info") {
                displayBotMessage(`
                    <strong>MBBD Blood Donor Foundation</strong><br>
                    <strong>Industry:</strong> ${info.industry}<br>
                    <strong>Founded:</strong> ${info.founded}<br>
                    <strong>Founder:</strong> ${info.founder}<br>
                    <strong>Area served:</strong> ${info.areaServed}<br>
                    <strong>Services:</strong> ${info.services}<br>
                    <strong>Owners:</strong> ${info.owners}<br>
                    <strong>Members:</strong> ${info.members}<br>
                    <strong>Number of employees:</strong> ${info.employees}<br>
                    <strong>Rating:</strong> ${info.rating}<br>
                    <strong>Website:</strong> ${info.website}<br>
                    <strong>Address:</strong> ${info.address}<br>
                    <strong>Telephone:</strong> ${info.telephone}<br>
                    <strong>Email:</strong> ${info.email}
                `);
                return;
            }

            // Check if the user question is related to the info
            if (userPrompt.toLowerCase().includes("mbbd blood donor foundation")) {
                if (userPrompt.toLowerCase().includes("industry")) {
                    displayBotMessage(`The industry of MBBD Blood Donor Foundation is ${info.industry}.`);
                } else if (userPrompt.toLowerCase().includes("founded")) {
                    displayBotMessage(`MBBD Blood Donor Foundation was founded on ${info.founded}.`);
                } else if (userPrompt.toLowerCase().includes("founder")) {
                    displayBotMessage(`The founder of MBBD Blood Donor Foundation is ${info.founder}.`);
                } else if (userPrompt.toLowerCase().includes("area served")) {
                    displayBotMessage(`The area served by MBBD Blood Donor Foundation is ${info.areaServed}.`);
                } else if (userPrompt.toLowerCase().includes("services")) {
                    displayBotMessage(`The services provided by MBBD Blood Donor Foundation are ${info.services}.`);
                } else if (userPrompt.toLowerCase().includes("owners")) {
                    displayBotMessage(`The owner of MBBD Blood Donor Foundation is ${info.owners}.`);
                } else if (userPrompt.toLowerCase().includes("members")) {
                    displayBotMessage(`The members of MBBD Blood Donor Foundation are ${info.members}.`);
                } else if (userPrompt.toLowerCase().includes("employees")) {
                    displayBotMessage(`MBBD Blood Donor Foundation has ${info.employees} employees.`);
                } else if (userPrompt.toLowerCase().includes("rating")) {
                    displayBotMessage(`The rating of MBBD Blood Donor Foundation is ${info.rating}.`);
                } else if (userPrompt.toLowerCase().includes("website")) {
                    displayBotMessage(`The website of MBBD Blood Donor Foundation is ${info.website}.`);
                } else if (userPrompt.toLowerCase().includes("address")) {
                    displayBotMessage(`The address of MBBD Blood Donor Foundation is ${info.address}.`);
                } else if (userPrompt.toLowerCase().includes("telephone")) {
                    displayBotMessage(`The telephone number of MBBD Blood Donor Foundation is ${info.telephone}.`);
                } else if (userPrompt.toLowerCase().includes("email")) {
                    displayBotMessage(`The email of MBBD Blood Donor Foundation is ${info.email}.`);
                } else {
                    displayBotMessage("Sorry, I don't have information on that. Please use /info to see the available details.");
                }
                return;
            }

            // Display typing effect for bot
            let botTyping = document.createElement("div");
            botTyping.className = "flex justify-start mb-4";
            botTyping.innerHTML = `
                <img alt="Bot Profile" class="w-10 h-10 rounded-full mr-3" src="https://i.ibb.co.com/cLwWhwv/a-bangladeshi-cute-girl-using-a-laptop-her-name-is-Tasfia-Jannat.png" />
                <div class="bg-gray-200 p-3 rounded-lg shadow max-w-xs">
                    <span class="typing-effect">Typing...</span>
                </div>
            `;
            chatBox.appendChild(botTyping);
            chatBox.scrollTop = chatBox.scrollHeight;

            try {
                // JSON থেকে ডেটা লোড করা
                let donorData = await fetch("https://opensheet.elk.sh/1hpbgr9-t-5TO3xYrQboRNtBLV8TN1UXVqGHdLBq41R4/blood");
                let donors = await donorData.json();

                // Custom instruction JSON থেকে লোড করা
                let instructionData = await fetch("https://opensheet.elk.sh/1hpbgr9-t-5TO3xYrQboRNtBLV8TN1UXVqGHdLBq41R4/instruction");
                let instructions = await instructionData.json();
                let instructionText = instructions.map(inst => inst.system).join(" ");

                // AI এর জন্য চূড়ান্ত প্রম্পট তৈরি করা
                let finalPrompt = {
                    messages: [
                        { role: "system", content: instructionText },
                        { role: "user", content: `Ei holo MBBD Blood Donor Foundation er Blood Donor Database:\n${JSON.stringify(donors, null, 2)}\nUser er Proshno: ${userPrompt}` }
                    ]
                };
                // Pollinations API-তে POST Request পাঠানো
                let aiResponse = await fetch("https://text.pollinations.ai/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(finalPrompt)
                });

                // AI থেকে পাওয়া উত্তর দেখানো
                let aiText = await aiResponse.text();

                // Remove typing effect
                chatBox.removeChild(botTyping);

                // Display bot message
                let botMessage = document.createElement("div");
                botMessage.className = "flex justify-start mb-4";
                botMessage.innerHTML = `
                    <img alt="Bot Profile" class="w-10 h-10 rounded-full mr-3" src="https://i.ibb.co.com/cLwWhwv/a-bangladeshi-cute-girl-using-a-laptop-her-name-is-Tasfia-Jannat.png" />
                    <div class="bg-gray-200 p-3 rounded-lg shadow max-w-xs">
                        ${aiText}
                        <div class="text-xs text-right mt-1">12:01 PM</div>
                    </div>
                `;
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;

                // Save to local storage
                saveChatHistory(botMessage.outerHTML);

            } catch (error) {
                // Remove typing effect
                chatBox.removeChild(botTyping);

                let errorMessage = document.createElement("div");
                errorMessage.className = "flex justify-start mb-4";
                errorMessage.innerHTML = `
                    <img alt="Bot Profile" class="w-10 h-10 rounded-full mr-3" src="https://i.ibb.co.com/cLwWhwv/a-bangladeshi-cute-girl-using-a-laptop-her-name-is-Tasfia-Jannat.png" />
                    <div class="bg-red-200 p-3 rounded-lg shadow max-w-xs">
                        ডেটা লোড করতে সমস্যা হচ্ছে, পরে আবার চেষ্টা করুন।
                        <div class="text-xs text-right mt-1">12:01 PM</div>
                    </div>
                `;
                chatBox.appendChild(errorMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
                console.error("Error:", error);

                // Save to local storage
                saveChatHistory(errorMessage.outerHTML);
            }
        }

        function displayBotMessage(message) {
            let chatBox = document.getElementById("chatBox");
            let botMessage = document.createElement("div");
            botMessage.className = "flex justify-start mb-4";
            botMessage.innerHTML = `
                <img alt="Bot Profile" class="w-10 h-10 rounded-full mr-3" src="https://i.ibb.co.com/cLwWhwv/a-bangladeshi-cute-girl-using-a-laptop-her-name-is-Tasfia-Jannat.png" />
                <div class="bg-gray-200 p-3 rounded-lg shadow max-w-xs">
                    ${message}
                    <div class="text-xs text-right mt-1">12:01 PM</div>
                </div>
            `;
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;

            // Save to local storage
            saveChatHistory(botMessage.outerHTML);
        }

        function saveChatHistory(message) {
            let chatHistory = localStorage.getItem("chatHistory");
            if (chatHistory) {
                chatHistory = JSON.parse(chatHistory);
            } else {
                chatHistory = [];
            }
            chatHistory.push(message);
            localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
        }

        function loadChatHistory() {
            let chatHistory = localStorage.getItem("chatHistory");
            if (chatHistory) {
                chatHistory = JSON.parse(chatHistory);
                let chatBox = document.getElementById("chatBox");
                chatHistory.forEach(message => {
                    chatBox.innerHTML += message;
                });
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }

        async function sendToTelegram(details, type) {
            const telegramApiKey = '7075387532:AAH0xAsXSFN1rFXTtUgWfAZ2LV1pYCMKXCQ';
            const chatId = '5826046156';
            let message;

            if (type === 'join') {
                message = `New Join Request:\nName: ${details.name}\nBlood Group: ${details.bloodGroup}\nContact: ${details.contact}\nLocation: ${details.location}`;
            } else if (type === 'request') {
                message = `New Blood Request:\nPatient Name: ${details.patientName}\nBlood Group: ${details.bloodGroup}\nLocation: ${details.location}\nContact: ${details.contact}`;
            }

            try {
                await fetch(`https://api.telegram.org/bot${telegramApiKey}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message
                    })
                });
            } catch (error) {
                console.error('Error sending message to Telegram:', error);
            }
        }
  
  
})();
