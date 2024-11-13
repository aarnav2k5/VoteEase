
function scanQRCode() {
  // In a real app, this would trigger a QR code scan
  alert("QR Code scanned successfully (simulated)!");
  showScreen("votingScreen");
}

function submitVote() {
  const selectedCandidate = document.querySelector(
    'input[name="candidate"]:checked'
  );
  if (selectedCandidate) {
    alert(`You have voted for ${selectedCandidate.value}`);
    showScreen("confirmationScreen");
  } else {
    alert("Please select a candidate to submit your vote.");
  }
}

function returnToHome() {
  showScreen("welcomeScreen");
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });
  document.getElementById(screenId).classList.remove("hidden");
}
