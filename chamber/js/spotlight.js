const chamberMembers = [
            {
                "id": 1,
                "name": "Acme Innovations",
                "logo": "https://placehold.co/120x120/007bff/ffffff?text=ACME",
                "phone": "555-123-4567",
                "address": "123 Tech Lane, Uyo",
                "website": "https://acmeinnovations.com",
                "membershipLevel": "Gold"
            },
            {
                "id": 2,
                "name": "GreenLeaf Organics",
                "logo": "https://placehold.co/120x120/28a745/ffffff?text=GLO",
                "phone": "555-987-6543",
                "address": "456 Farm Rd, Uyo",
                "website": "https://greenleaforganics.com",
                "membershipLevel": "Silver"
            },
            {
                "id": 3,
                "name": "City Cafe & Bistro",
                "logo": "https://placehold.co/120x120/dc3545/ffffff?text=CAFE",
                "phone": "555-111-2222",
                "address": "789 Main St, Uyo",
                "website": "https://citycafe.com",
                "membershipLevel": "Bronze"
            },
            {
                "id": 4,
                "name": "Elite Fitness Center",
                "logo": "https://placehold.co/120x120/ffc107/343a40?text=FIT",
                "phone": "555-333-4444",
                "address": "101 Wellness Ave, Uyo",
                "website": "https://elitefitness.com",
                "membershipLevel": "Gold"
            },
            {
                "id": 5,
                "name": "Horizon Legal Services",
                "logo": "https://placehold.co/120x120/6c757d/ffffff?text=HLS",
                "phone": "555-555-6666",
                "address": "222 Justice Pl, Uyo",
                "website": "https://horizonlegal.com",
                "membershipLevel": "Silver"
            },
            {
                "id": 6,
                "name": "QuickFix Auto Repair",
                "logo": "https://placehold.co/120x120/17a2b8/ffffff?text=CAR",
                "phone": "555-777-8888",
                "address": "333 Mechanic Way, Uyo",
                "website": "https://quickfixauto.com",
                "membershipLevel": "Bronze"
            }
        ];

        function displaySpotlights() {
            const spotlightContainer = document.getElementById('company-spotlights');
            spotlightContainer.innerHTML = ''; // Clear loading message

            // Filter for Gold or Silver members
            const eligibleMembers = chamberMembers.filter(member =>
                member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
            );

            // Shuffle the eligible members array
            for (let i = eligibleMembers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [eligibleMembers[i], eligibleMembers[j]] = [eligibleMembers[j], eligibleMembers[i]]; // ES6 swap
            }

            // Select the first 2 or 3 (up to 3) shuffled members
            const selectedMembers = eligibleMembers.slice(0, Math.min(eligibleMembers.length, 3));

            if (selectedMembers.length === 0) {
                spotlightContainer.innerHTML = '<p>No Gold or Silver members to display.</p>';
                return;
            }

            selectedMembers.forEach(member => {
                const card = document.createElement('div');
                card.classList.add('spotlight-card');
                card.innerHTML = `
                    <img src="${member.logo}" alt="${member.name} Logo" onerror="this.onerror=null;this.src='https://placehold.co/120x120/cccccc/333333?text=Logo';" >
                    <h3>${member.name}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p>Membership: ${member.membershipLevel}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                spotlightContainer.appendChild(card);
            });
        }

        // Call the function to display spotlights
        displaySpotlights();    