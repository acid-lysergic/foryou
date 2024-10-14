const burstSound = new Audio('click.mp3');

function burstFlowers() {
    const flowerCount = 29;
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerText = '🌸';

        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';

        document.body.appendChild(flower);

        // Play sound effect
        burstSound.play();

        setTimeout(() => {
            flower.remove();
        }, 3000);
    }
}

function movePlayer(direction) {
    let newX = playerX;
    let newY = playerY;

    switch (direction) {
        case 'up': newY--; break;
        case 'down': newY++; break;
        case 'left': newX--; break;
        case 'right': newX++; break;
    }

    // Check for boundaries and walls
    if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight && maze[newY][newX] === 0) {
        playerX = newX;
        playerY = newY;
        drawMaze();

        // Check if player reached exit
        if (newX === mazeWidth - 2 && newY === mazeHeight - 1) {
            burstFlowers(); // Burst flowers upon reaching the exit
            showCongratulations(); // Call the pop-up function
        }
    }
}

function showCongratulations() {
    const popUp = document.createElement('div');
    popUp.style.position = 'fixed';
    popUp.style.top = '50%';
    popUp.style.left = '50%';
    popUp.style.transform = 'translate(-50%, -50%)';
    popUp.style.backgroundColor = 'white';
    popUp.style.padding = '20px';
    popUp.style.borderRadius = '10px';
    popUp.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popUp.innerHTML = `<h2>Congratulations!</h2><p>You reached the exit!</p><button onclick="closePopUp()">OK</button>`;
    document.body.appendChild(popUp);
}

function closePopUp() {
    const popUp = document.querySelector('div[style*="fixed"]');
    if (popUp) {
        popUp.remove();

    if (newX === mazeWidth - 2 && newY === mazeHeight - 1) {
    alert('happy womens day! 💐'); // Pop-up message
    startMaze(); // Reset the maze and player position
}

    }
}
