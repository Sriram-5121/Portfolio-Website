document.addEventListener('DOMContentLoaded', (event) => {
    const teams = [
        'Sunrisers Hyderabad',
        'Royal Challengers Bangalore',
        'Mumbai Indians',
        'Rising Pune Supergiant',
        'Gujarat Lions',
        'Kolkata Knight Riders',
        'Kings XI Punjab',
        'Delhi Daredevils',
        'Chennai Super Kings',
        'Rajasthan Royals',
        'Delhi Capitals',
        'Punjab Kings',
        'Lucknow Super Giants',
        'Gujarat Titans',
        'Deccan Chargers',
        'Kochi Tuskers Kerala',
        'Pune Warriors',
        'Rising Pune Supergiants'
    ];

    // Remove duplicates
    const uniqueTeams = [...new Set(teams)];

    const teamSelect = document.getElementById('team-select');
    const opponentSelect = document.getElementById('opponent-select');
    const tossWinnerSelect = document.getElementById('toss-winner-select');

    if (teamSelect && opponentSelect && tossWinnerSelect) {
        uniqueTeams.forEach(team => {
            const teamOption = document.createElement('option');
            teamOption.value = team;
            teamOption.textContent = team;
            teamSelect.appendChild(teamOption);

            const opponentOption = document.createElement('option');
            opponentOption.value = team;
            opponentOption.textContent = team;
            opponentSelect.appendChild(opponentOption);
        });

        // Function to update toss winner options
        const updateTossWinnerOptions = () => {
            const selectedTeam = teamSelect.value;
            const selectedOpponent = opponentSelect.value;

            // Clear existing options
            tossWinnerSelect.innerHTML = '<option value="" disabled selected>Toss Winner</option>';

            // Add selected team and opponent as options
            if (selectedTeam) {
                const tossWinnerOptionTeam = document.createElement('option');
                tossWinnerOptionTeam.value = selectedTeam;
                tossWinnerOptionTeam.textContent = selectedTeam;
                tossWinnerSelect.appendChild(tossWinnerOptionTeam);
            }
            if (selectedOpponent) {
                const tossWinnerOptionOpponent = document.createElement('option');
                tossWinnerOptionOpponent.value = selectedOpponent;
                tossWinnerOptionOpponent.textContent = selectedOpponent;
                tossWinnerSelect.appendChild(tossWinnerOptionOpponent);
            }
        };

        // Update toss winner options when team or opponent selection changes
        teamSelect.addEventListener('change', updateTossWinnerOptions);
        opponentSelect.addEventListener('change', updateTossWinnerOptions);
    } else {
        console.error('One or more select elements not found');
    }
});
