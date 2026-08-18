// Indian Vehicle Number Checker
// Validates vehicle registration numbers according to Indian format

// Indian State Codes with their full names
const indianStateCodes = {
    'AN': 'Andaman & Nicobar',
    'AP': 'Andhra Pradesh',
    'AR': 'Arunachal Pradesh',
    'AS': 'Assam',
    'BR': 'Bihar',
    'CG': 'Chhattisgarh',
    'CH': 'Chandigarh',
    'CT': 'Chhattisgarh',
    'DD': 'Daman & Diu',
    'DL': 'Delhi',
    'DN': 'Dadra & Nagar Haveli',
    'GA': 'Goa',
    'GJ': 'Gujarat',
    'HP': 'Himachal Pradesh',
    'HR': 'Haryana',
    'JK': 'Jammu & Kashmir',
    'JH': 'Jharkhand',
    'KA': 'Karnataka',
    'KL': 'Kerala',
    'LA': 'Ladakh',
    'LD': 'Lakshadweep',
    'MH': 'Maharashtra',
    'ML': 'Meghalaya',
    'MN': 'Manipur',
    'MP': 'Madhya Pradesh',
    'MZ': 'Mizoram',
    'NL': 'Nagaland',
    'OD': 'Odisha',
    'OL': 'Odisha',
    'PB': 'Punjab',
    'PY': 'Puducherry',
    'RJ': 'Rajasthan',
    'SK': 'Sikkim',
    'TG': 'Telangana',
    'TN': 'Tamil Nadu',
    'TR': 'Tripura',
    'UK': 'Uttarakhand',
    'UP': 'Uttar Pradesh',
    'UT': 'Uttarakhand',
    'WB': 'West Bengal'
};

// Initialize state grid on page load
window.addEventListener('DOMContentLoaded', function() {
    populateStateGrid();
    
    // Allow Enter key to check vehicle number
    document.getElementById('vehicleNumber').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkVehicleNumber();
        }
    });
});

// Populate state grid with all Indian state codes
function populateStateGrid() {
    const stateGrid = document.getElementById('stateGrid');
    stateGrid.innerHTML = '';
    
    for (const [code, name] of Object.entries(indianStateCodes)) {
        const stateItem = document.createElement('div');
        stateItem.className = 'state-item';
        stateItem.innerHTML = `
            <span class="state-code">${code}</span>
            <span class="state-name">${name}</span>
        `;
        stateGrid.appendChild(stateItem);
    }
}

// Main function to check vehicle number
function checkVehicleNumber() {
    const input = document.getElementById('vehicleNumber').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    // Clear previous result
    resultDiv.classList.add('hidden');
    resultContent.innerHTML = '';
    
    if (!input) {
        showError('Please enter a vehicle number');
        return;
    }
    
    const validation = validateIndianVehicleNumber(input);
    
    if (validation.isValid) {
        showValidResult(validation);
    } else {
        showError(validation.error);
    }
}

// Validate vehicle number against Indian format
function validateIndianVehicleNumber(number) {
    // Remove spaces for easier validation
    const cleanNumber = number.replace(/\s/g, '');
    
    // Regular expression for Indian vehicle number format
    // Format: XX DD YY ZZZZ (without spaces)
    // XX: 2 letters, DD: 2 digits, YY: 2 letters, ZZZZ: 4 digits
    const pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    
    // Check if the format matches
    if (!pattern.test(cleanNumber)) {
        return {
            isValid: false,
            error: '❌ Invalid format! Please use: XX DD YY ZZZZ (e.g., DL 01 AB 1234)'
        };
    }
    
    // Extract state code
    const stateCode = cleanNumber.substring(0, 2);
    
    // Check if state code is valid
    if (!indianStateCodes[stateCode]) {
        return {
            isValid: false,
            error: `❌ Invalid state code: ${stateCode}. This is not a recognized Indian state/UT code.`
        };
    }
    
    // Extract components
    const districtCode = cleanNumber.substring(2, 4);
    const series = cleanNumber.substring(4, 6);
    const registration = cleanNumber.substring(6, 10);
    
    // Validate district code (should be between 01 and 99)
    if (parseInt(districtCode) < 1 || parseInt(districtCode) > 99) {
        return {
            isValid: false,
            error: '❌ Invalid district code! Must be between 01 and 99.'
        };
    }
    
    return {
        isValid: true,
        stateCode: stateCode,
        stateName: indianStateCodes[stateCode],
        districtCode: districtCode,
        series: series,
        registration: registration,
        formattedNumber: `${stateCode} ${districtCode} ${series} ${registration}`
    };
}

// Display valid result
function showValidResult(validation) {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = `
        <div>
            <strong style="font-size: 1.2em;">✅ Valid Indian Vehicle Number!</strong>
        </div>
        <div style="margin-top: 15px;">
            <div style="margin: 8px 0;">
                <strong>Formatted Number:</strong> ${validation.formattedNumber}
            </div>
            <div style="margin: 8px 0;">
                <strong>State/UT:</strong> ${validation.stateName}
            </div>
            <div style="margin: 8px 0;">
                <strong>State Code:</strong> ${validation.stateCode}
            </div>
            <div style="margin: 8px 0;">
                <strong>District Code:</strong> ${validation.districtCode}
            </div>
            <div style="margin: 8px 0;">
                <strong>Series Code:</strong> ${validation.series}
            </div>
            <div style="margin: 8px 0;">
                <strong>Registration Number:</strong> ${validation.registration}
            </div>
        </div>
    `;
    
    resultDiv.classList.remove('hidden');
    resultDiv.classList.remove('invalid');
    resultDiv.classList.add('valid');
}

// Display error message
function showError(message) {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = message;
    
    resultDiv.classList.remove('hidden');
    resultDiv.classList.remove('valid');
    resultDiv.classList.add('invalid');
}
