document.addEventListener("DOMContentLoaded", () => {
    // Get references to HTML elements
    let fetchVerseBtn = document.getElementById("fetchVerseBtn");
    let verseInput = document.getElementById("verseInput");
    let verseOutput = document.getElementById("verseOutput");

    // Add event listener to the fetchVerseBtn button
    fetchVerseBtn.addEventListener("click", async () => {
        // Get the entered Bible verse reference from the input field
        let verseRef = verseInput.value;
        if (verseRef) {
            try {
                // Fetch the verse from the Bible API using the entered reference
                let response = await fetch(`https://bible-api.com/${verseRef}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch verse");
                }
                let data = await response.json();
                // Display the fetched verse text in the output container
                verseOutput.textContent = data.text;
            } catch (error) {
                // Handle errors that occur during fetching
                console.error("Error fetching verse:", error);
                verseOutput.textContent = "Error fetching verse. Please try again.";
            }
        } else {
            // Display an error message if no verse reference is entered
            verseOutput.textContent = "Please enter a valid Bible reference.";
        }
    });
});
