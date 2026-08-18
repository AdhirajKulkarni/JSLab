# 🚗 Indian Vehicle Number Checker

A web-based application to validate and verify Indian vehicle registration numbers according to official Indian format standards.

## Features

✅ **Format Validation** - Validates against official Indian vehicle registration number format
✅ **State Code Verification** - Checks if the state code is valid
✅ **District Code Validation** - Ensures district code is between 01-99
✅ **Detailed Information** - Extracts and displays all components of the vehicle number
✅ **User-Friendly Interface** - Clean, modern design with helpful guidance
✅ **All Indian States/UTs** - Supports codes for all 28 states and 8 union territories
✅ **Responsive Design** - Works on desktop and mobile devices

## Indian Vehicle Number Format

The Indian vehicle registration number follows this format:

```
XX DD YY ZZZZ
```

- **XX** (2 Letters) - State/UT Code (e.g., DL, MH, KA, TN)
- **DD** (2 Digits) - District Code (01-99)
- **YY** (2 Letters) - Series Code (Any alphabetic characters)
- **ZZZZ** (4 Digits) - Registration Number (0001-9999)

### Example
```
DL 01 AB 1234
```
- DL = Delhi
- 01 = First district of Delhi
- AB = Series
- 1234 = Registration number

## Supported States/UTs

The checker recognizes all 36 Indian states and union territories:

### States
- Andhra Pradesh (AP)
- Arunachal Pradesh (AR)
- Assam (AS)
- Bihar (BR)
- Chhattisgarh (CG/CT)
- Goa (GA)
- Gujarat (GJ)
- Haryana (HR)
- Himachal Pradesh (HP)
- Jharkhand (JH)
- Karnataka (KA)
- Kerala (KL)
- Madhya Pradesh (MP)
- Maharashtra (MH)
- Manipur (MN)
- Meghalaya (ML)
- Mizoram (MZ)
- Nagaland (NL)
- Odisha (OD/OL)
- Punjab (PB)
- Rajasthan (RJ)
- Sikkim (SK)
- Tamil Nadu (TN)
- Telangana (TG)
- Tripura (TR)
- Uttar Pradesh (UP)
- Uttarakhand (UK/UT)
- West Bengal (WB)

### Union Territories
- Andaman & Nicobar (AN)
- Chandigarh (CH)
- Dadra & Nagar Haveli (DN)
- Daman & Diu (DD)
- Lakshadweep (LD)
- Ladakh (LA)
- Puducherry (PY)
- Jammu & Kashmir (JK)

## How to Use

1. **Open** `index.html` in your web browser
2. **Enter** a vehicle number in the input field (e.g., DL 01 AB 1234)
3. **Click** the "Check" button or press Enter
4. **View** the validation result with detailed information

## Validation Rules

The checker validates:
- ✅ Correct format (2 letters, 2 digits, 2 letters, 4 digits)
- ✅ Valid state/UT code
- ✅ District code between 01-99
- ✅ Proper character types (letters and numbers in correct positions)

## Examples of Valid Numbers

- `DL 01 AB 1234` - Delhi
- `MH 02 CD 5678` - Maharashtra
- `KA 03 EF 9012` - Karnataka
- `TN 04 GH 3456` - Tamil Nadu
- `UP 05 IJ 7890` - Uttar Pradesh

## Installation

No installation required! Simply:
1. Download the three files (index.html, style.css, script.js)
2. Keep them in the same folder
3. Open index.html in any modern web browser

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Technical Details

- **Language**: HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Pure vanilla JavaScript
- **No Backend Required**: Runs entirely in the browser
- **Lightweight**: Fast and efficient validation

## Notes

- Vehicle numbers are case-insensitive (input is automatically converted to uppercase)
- Spaces in the input are ignored for validation
- The formatted output always shows the proper spacing format

## License

Open source - Free to use and modify

---

**Made with ❤️ for Indian Vehicle Registration Validation**
