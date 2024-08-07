// scripts.js
const codes = [
    { code: '10-1', description: 'All on duty officers meet (Including meet location and response code).' },
    { code: '10-3', description: 'Stop transmitting (Or shut the fuck up).' },
    { code: '10-4', description: 'Affirmative/Ok.' },
    { code: '10-5', description: 'Repeat last transmission.' },
    { code: '10-6', description: 'Disregard.' },
    { code: '10-7', description: 'Standby for further.' },
    { code: '10-8', description: 'Currently busy/unavailable.' },
    { code: '10-9', description: 'Currently busy/unavailable (Currently on detective covert operation).' },
    { code: '10-14', description: 'Requesting transportation (Including location and target location).' },
    { code: '10-15', description: 'Suspects arrested (Including number of suspects and target location (Example: SAPD HQ/LSP).' },
    { code: '10-18', description: 'Further assistance required (?)' },
    { code: '10-20', description: 'It means \'Location\'.' },
    { code: '10-21', description: 'Report in your current status and location.' },
    { code: '10-22', description: 'Report in person (including target location).' },
    { code: '10-27', description: 'Switching radio channel.' },
    { code: '10-40', description: 'Large group/gathering of persons in area (four or above).' },
    { code: '10-41', description: 'Illegal activity.' },
    { code: '10-46', description: 'Conduct a frisk or search.' },
    { code: '10-55', description: 'Traffic stop.' },
    { code: '10-56', description: 'Computer check (using the MDC).' },
    { code: '10-57 VICTOR', description: 'On vehicle pursuit. (State vehicle model, colour, area, direction of travel and TAC)' },
    { code: '10-57 FOXTROT', description: 'On foot pursuit. (State brief suspect description, weapons if any, area, direction of travel and if needed, TAC)' },
    { code: '10-60', description: 'Vehicle description(s) (Including vehicle name, colours, number of occupants and obvious features such as number of doors or any vehicular damage).' },
    { code: '10-61', description: 'Person description(s) (Including identity/race, attire, distinguishing features).' },
    { code: '10-66', description: 'Felony stop on a suspected vehicle.' },
    { code: '10-70', description: 'Backup request (Specify code 1, 2 or 3, location and any specific unit that is needed).' },
    { code: '10-71', description: 'Medical assistance required.' },
    { code: '10-80', description: 'Officer in distress (Unable to respond, in imminent danger).' },
    { code: '10-99', description: 'The situation is concluded/finished.' },
    { code: 'Start of Watch', description: 'Reporting patrol status, available for calls.' },
    { code: 'End of Watch', description: 'Reporting end of patrol, not available for calls.' },
    { code: 'Code 0', description: 'Urgent assistance required. All duty units must immediately drop what they are doing, be that booking a suspect or being engaged in an active pursuit, and attend the code 0 as soon as is practically possible. Sign of Code 0 is when officer has been down.' },
    { code: 'Code 1', description: 'Officer in distress call.' },
    { code: 'Code 2', description: 'Responding a non-emergency call that means without lights and sirens but if something comes up, leave it continue responding, and if you get traffic jam, turn the lights and sirens for a moment.' },
    { code: 'Code 3', description: 'Responding an emergency call that means with lights and sirens.' },
    { code: 'Code 4', description: 'No further units required.' },
    { code: 'Code 5', description: 'A detective/officer tells to stay away from the area (Usually used when there\'s an ongoing investigation at a location).' },
    { code: 'Code 6', description: 'Out of car Investigation.' },
    { code: 'Code 7', description: 'Taking a break, unavailable for calls.' },
    { code: 'Status 1 ( S1 )', description: 'Off duty.' },
    { code: 'Status 2 ( S2 )', description: 'On duty.' },
    { code: 'Status 3 ( S3 )', description: 'Take a break.' },
    { code: 'Status 4 ( S4 )', description: 'Patrol.' },
    { code: 'IC1', description: 'White.' },
    { code: 'IC2', description: 'Black.' },
    { code: 'IC3', description: 'Latino.' },
    { code: 'IC4', description: 'Middle Eastern.' },
    { code: 'IC5', description: 'Asian (Chinese, Malaysian, etc.).' },
    { code: 'IC6', description: 'Unknown ethnicity.' }
];

const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredCodes = codes.filter(code => 
        code.code.toLowerCase().includes(query) || 
        code.description.toLowerCase().includes(query)
    );

    displayResults(filteredCodes);
});

function displayResults(codes) {
    results.innerHTML = '';
    codes.forEach(code => {
        const codeItem = document.createElement('div');
        codeItem.className = 'code-item';
        codeItem.innerHTML = `
            <div class="code">${code.code}</div>
            <div class="description">${code.description}</div>
        `;
        results.appendChild(codeItem);
    });
}
