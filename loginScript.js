const secretPassword = 'Fashionista';

function checkPassword() {
    const input = document.getElementById('passwordInput').value.toLowerCase();
    const errorMessage = document.getElementById('errorMessage');

    if (input === secretPassword.toLowerCase()) {
        document.getElementById('inputSection').style.display = 'none';
        document.getElementById('loadingSection').style.display = 'flex';
        startLoading();
    } else {
        errorMessage.textContent = 'Wrong password, try again!';
    }
}

function startLoading() {
    const progressCircle = document.querySelector('.progress');
    const loadingImage = document.getElementById('loadingImage');
    const duration = 4000; // Total duration of loading in milliseconds
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius;

    // Set up the circle
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`; // Start at 100%

    const startTime = performance.now(); // Get the current time at the start of loading

    function animate() {
        const currentTime = performance.now(); // Get the current time
        const elapsed = currentTime - startTime; // Calculate elapsed time
        const progress = Math.min(elapsed / duration, 1); // Calculate progress as a fraction (0 to 1)

        // Update the loading circle
        const offset = circumference - (circumference * progress);
        progressCircle.style.strokeDashoffset = offset;

        // Rotate the loading image based on the elapsed time
        loadingImage.style.transform = `translate(-50%, -50%) rotate(${progress * 360}deg)`;

        if (progress < 1) {
            requestAnimationFrame(animate); // Continue the animation if not complete
        } else {
            stopImageRotation(); // Stop the spinning when complete
            setTimeout(showBirthdayPage, 850); // Delay before showing birthday page
        }
    }

    animate(); // Start the animation
}

function stopImageRotation() {
    const loadingImage = document.getElementById('loadingImage');
    loadingImage.style.animation = 'none'; // Remove any spinning animation if it exists
}

function showBirthdayPage() {
    document.getElementById('loadingSection').style.display = 'none'; 
    document.getElementById('birthdaySection').style.display = 'flex'; 
}
