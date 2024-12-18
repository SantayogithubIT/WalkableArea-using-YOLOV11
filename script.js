// script.js

function searchLocation() {
    const searchValue = document.getElementById('search').value;
    if (searchValue.trim() === "") {
        alert("Please enter a location!");
    } else {
        alert(`Searching for: ${searchValue}`);
        // Simulate search functionality
        // In a real app, integrate with a mapping API like Google Maps or OpenStreetMap
    }
}

// Handle form submission for issue reporting
document.getElementById('report-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const issueType = document.getElementById('issue-type').value;
    const description = document.getElementById('description').value;
    const media = document.getElementById('media').files[0];

    if (description.trim() === "") {
        alert("Please provide a description of the issue.");
        return;
    }

    alert(`Issue submitted: ${issueType}\nDescription: ${description}`);
    // Reset form
    this.reset();
});
