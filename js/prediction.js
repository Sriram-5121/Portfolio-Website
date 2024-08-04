<script>
        document.getElementById("prediction-form").addEventListener("submit", async function(event) {
            event.preventDefault();

            // Collect form data
            const venue = document.getElementById('venue-select').value;
            const team = document.getElementById('team-select').value;
            const opponent = document.getElementById('opponent-select').value;
            const toss_winner = document.getElementById('toss-winner-select').value;
            const toss_decision = document.getElementById('toss-decision-select').value;
            const players = Array.from(document.getElementById('selected-players').options).map(option => option.value);

            // Prepare the request body
            const requestBody = {
                venue: venue,
                team: team,
                opponent: opponent,
                toss_winner: toss_winner,
                toss_decision: toss_decision,
                players: players
            };

            try {
                // Make the API call
                const response = await fetch('https://ipl-score-prediction.azurewebsites.net/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                // Display the predicted score
                document.getElementById('score-value').innerText = data.predicted_score;
                document.getElementById('predicted-score').style.display = 'block';
            } catch (error) {
                console.error('Error:', error);
            }
        });
    </script>