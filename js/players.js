document.addEventListener('DOMContentLoaded', (event) => {
    const players = [
        { name: 'DA Warner', role: 'batsman' },
        { name: 'S Dhawan', role: 'batsman' },
        { name: 'MC Henriques', role: 'all-rounder' },
        { name: 'STR Binny', role: 'batsman' },
        { name: 'Yuvraj Singh', role: 'batsman' },
        { name: 'YS Chahal', role: 'bowler' },
        { name: 'DJ Hooda', role: 'batsman' },
        { name: 'TS Mills', role: 'bowler' },
        { name: 'BCJ Cutting', role: 'all-rounder' },
        { name: 'CH Gayle', role: 'batsman' },
        { name: 'Mandeep Singh', role: 'batsman' },
        { name: 'Rashid Khan', role: 'all-rounder' },
        { name: 'TM Head', role: 'batsman' }
        // Add more players as needed
    ];

    const availablePlayersSelect = document.getElementById('available-players');
    const playerFilter = document.getElementById('player-filter');

    if (availablePlayersSelect && playerFilter) {
        // Function to populate the player dropdown based on selected role
        const updateAvailablePlayers = (role) => {
            availablePlayersSelect.innerHTML = ''; // Clear existing options

            const filteredPlayers = players.filter(player => role === 'all' || player.role === role);

            filteredPlayers.forEach(player => {
                const option = document.createElement('option');
                option.value = player.name;
                option.textContent = `${player.name} (${player.role})`;
                availablePlayersSelect.appendChild(option);
            });
        };

        // Initial load
        updateAvailablePlayers('all');

        // Update available players when filter changes
        playerFilter.addEventListener('change', (event) => {
            updateAvailablePlayers(event.target.value);
        });
    } else {
        console.error('One or more select elements not found');
    }
});
// Filter players based on selected role
document.getElementById('player-filter').addEventListener('change', function() {
	var filter = this.value;
	var options = document.getElementById('available-players').options;
	for (var i = 0; i < options.length; i++) {
		var role = options[i].getAttribute('data-role');
		if (filter === 'all' || filter === role) {
			options[i].style.display = '';
		} else {
			options[i].style.display = 'none';
		}
	}
});

// Add selected player to the right-side list
document.getElementById('add-player').addEventListener('click', function() {
	var selectedPlayers = document.getElementById('available-players').selectedOptions;
	var selectedList = document.getElementById('selected-players');
	if (selectedList.options.length + selectedPlayers.length <= 11) {
		for (var i = 0; i < selectedPlayers.length; i++) {
			var option = selectedPlayers[i].cloneNode(true);
			selectedList.appendChild(option);
			selectedPlayers[i].remove();
		}
	} else {
		alert('You can select up to 11 players only.');
	}
});

// Remove selected player from the right-side list
document.getElementById('remove-player').addEventListener('click', function() {
	var selectedPlayers = document.getElementById('selected-players').selectedOptions;
	var availableList = document.getElementById('available-players');
	for (var i = 0; i < selectedPlayers.length; i++) {
		var option = selectedPlayers[i].cloneNode(true);
		availableList.appendChild(option);
		selectedPlayers[i].remove();
	}
});    