// function updateTime() {
//     const now = new Date();
//     const timeElement = document.getElementById('time');
//     const dateElement = document.getElementById('date');
    
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
    
//     const day = String(now.getDate()).padStart(2, '0');
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const year = now.getFullYear();
    
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     const dateString = `${day}/${month}/${year}`;
    
//     timeElement.textContent = timeString;
//     dateElement.textContent = dateString;
// }

// // Call updateTime function every second
// setInterval(updateTime, 1000);

// // Initial call to display time when page loads
// updateTime();

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    const dateString = `${day}/${month}/${year}`;
    
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Call updateTime function every second
setInterval(updateTime, 1000);

// Initial call to display time when page loads
updateTime();
