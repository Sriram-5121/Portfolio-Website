document.addEventListener('DOMContentLoaded', (event) => {
    const venues = [
        "Arun Jaitley Stadium",
        "Barsapara Cricket Stadium",
        "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
        "Brabourne Stadium",
        "Buffalo Park",
        "De Beers Diamond Oval",
        "Dubai International Cricket Stadium",
        "Eden Gardens",
        "Feroz Shah Kotla",
        "Green Park",
        "Himachal Pradesh Cricket Association Stadium",
        "Holkar Cricket Stadium",
        "JSCA International Stadium Complex",
        "Kingsmead",
        "MA Chidambaram Stadium",
        "Maharaja Yadavindra Singh International Cricket Stadium",
        "Maharashtra Cricket Association Stadium",
        "M.Chinnaswamy Stadium",
        "Narendra Modi Stadium",
        "New Wanderers Stadium",
        "Nehru Stadium",
        "OUTsurance Oval",
        "Punjab Cricket Association IS Bindra Stadium",
        "Rajiv Gandhi International Stadium",
        "Sardar Patel Stadium, Motera",
        "Sawai Mansingh Stadium",
        "Shaheed Veer Narayan Singh International Stadium",
        "Sharjah Cricket Stadium",
        "SuperSport Park",
        "Vidarbha Cricket Association Stadium",
        "Wankhede Stadium",
        "Zayed Cricket Stadium"
    ];

    const venueSelect = document.getElementById('venue-select');
    
    if (venueSelect) {
        venues.forEach(venue => {
            const option = document.createElement('option');
            option.value = venue;
            option.textContent = venue;
            venueSelect.appendChild(option);
        });
    } else {
        console.error('Venue select element not found');
    }
});
