document.addEventListener('DOMContentLoaded', function() {
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
            player_names: players
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

            // Debug: Log the API response to see its structure
            console.log('API Response:', data);

            // Display the predicted total runs if available
            const predictedTotalRuns = data.predicted_total_runs;
            if (predictedTotalRuns !== undefined) {
                document.getElementById('score-value').innerText = predictedTotalRuns;
                document.getElementById('predicted-score').style.display = 'block';
            } else {
                console.error('Predicted total runs is undefined in the response');
                document.getElementById('predicted-score').innerText = 'Error: Predicted total runs not available';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('predicted-score').innerText = 'Error: Unable to fetch prediction';
        }
    });
});
