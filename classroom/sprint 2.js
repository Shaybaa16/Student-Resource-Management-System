const socket = io('http://localhost:5000'); // Connect to your WebSocket server

// Handle booking approval notifications from the server
socket.on('bookingApproval', (data) => {
  showNotification(data);
});

// Function to display a notification on the front end
function showNotification(data) {
  const notificationList = document.getElementById('notificationList');
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.innerHTML = `
    <strong>${data.username}</strong> has a new booking approval.
    <button type="button" class="btn btn-success float-right" onclick="approveBooking('${data.bookingId}')">Approve</button>
  `;
  notificationList.appendChild(listItem);
}

// Function to handle booking approval
function approveBooking(bookingId) {
  // Add logic to handle the approval on the server and update the UI accordingly
  alert(`Booking ${bookingId} has been approved!`);
}
