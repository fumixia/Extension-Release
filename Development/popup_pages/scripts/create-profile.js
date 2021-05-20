const profile_name = document.getElementById("profile_name");
const profile_email = document.getElementById("profile_email");
const profile_phone = document.getElementById("profile_phone");

const shipping_fullname = document.getElementById("shipping_fullname");
const shipping_address1 = document.getElementById("shipping_address1");
const shipping_address2 = document.getElementById("shipping_address2");
const shipping_country = document.getElementById("shipping_country");
const shipping_state_select = document.getElementById("shipping_state_select");
const shipping_state = document.getElementById("shipping_state");
const shipping_city = document.getElementById("shipping_city");
const shipping_zip = document.getElementById("shipping_zip");

const billing_fullname = document.getElementById("billing_fullname");
const billing_address1 = document.getElementById("billing_address1");
const billing_address2 = document.getElementById("billing_address2");
const billing_country = document.getElementById("billing_country");
const billing_state_select = document.getElementById("billing_state_select");
const billing_state = document.getElementById("billing_state");
const billing_city = document.getElementById("billing_city");
const billing_zip = document.getElementById("billing_zip");

const card_holder = document.getElementById("card_holder");
const card_number = document.getElementById("card_number");
const card_cvv = document.getElementById("card_cvv");
const expiry_month = document.getElementById("expiry_month");
const expiry_year = document.getElementById("expiry_year");

const same_as_shipping = document.getElementById("same_as_shipping");

const profile_save = document.getElementById("profile_save");

const storage = chrome.storage.local;
let countryData = [];

async function getCountryAndStates () {
    const data = [
        {
            "name": "Andorra",
            "code": "AD",
            "states": null
        },
        {
            "name": "United Arab Emirates",
            "code": "AE",
            "states": null
        },
        {
            "name": "Afghanistan",
            "code": "AF",
            "states": null
        },
        {
            "name": "Antigua and Barbuda",
            "code": "AG",
            "states": null
        },
        {
            "name": "Anguilla",
            "code": "AI",
            "states": null
        },
        {
            "name": "Albania",
            "code": "AL",
            "states": null
        },
        {
            "name": "Armenia",
            "code": "AM",
            "states": null
        },
        {
            "name": "Netherlands Antilles",
            "code": "AN",
            "states": null
        },
        {
            "name": "Angola",
            "code": "AO",
            "states": null
        },
        {
            "name": "Antarctica",
            "code": "AQ",
            "states": null
        },
        {
            "name": "Argentina",
            "code": "AR",
            "states": null
        },
        {
            "name": "American Samoa",
            "code": "AS",
            "states": null
        },
        {
            "name": "Austria",
            "code": "AT",
            "states": null
        },
        {
            "name": "Australia",
            "code": "AU",
            "states": [
                {
                    "code": "ACT",
                    "name": "Australian Capital Territory"
                },
                {
                    "code": "NSW",
                    "name": "New South Wales"
                },
                {
                    "code": "NT",
                    "name": "Northern Territory"
                },
                {
                    "code": "QLD",
                    "name": "Queensland"
                },
                {
                    "code": "SA",
                    "name": "South Australia"
                },
                {
                    "code": "TAS",
                    "name": "Tasmania"
                },
                {
                    "code": "VIC",
                    "name": "Victoria"
                },
                {
                    "code": "WA",
                    "name": "Western Australia"
                }
            ]
        },
        {
            "name": "Aruba",
            "code": "AW",
            "states": null
        },
        {
            "name": "Azerbaijan",
            "code": "AZ",
            "states": null
        },
        {
            "name": "Bosnia and Herzegovina",
            "code": "BA",
            "states": null
        },
        {
            "name": "Barbados",
            "code": "BB",
            "states": null
        },
        {
            "name": "Bangladesh",
            "code": "BD",
            "states": null
        },
        {
            "name": "Belgium",
            "code": "BE",
            "states": null
        },
        {
            "name": "Burkina Faso",
            "code": "BF",
            "states": null
        },
        {
            "name": "Bulgaria",
            "code": "BG",
            "states": null
        },
        {
            "name": "Bahrain",
            "code": "BH",
            "states": null
        },
        {
            "name": "Burundi",
            "code": "BI",
            "states": null
        },
        {
            "name": "Benin",
            "code": "BJ",
            "states": null
        },
        {
            "name": "Bermuda",
            "code": "BM",
            "states": null
        },
        {
            "name": "Brunei Darussalam",
            "code": "BN",
            "states": null
        },
        {
            "name": "Bolivia",
            "code": "BO",
            "states": null
        },
        {
            "name": "Brazil",
            "code": "BR",
            "states": null
        },
        {
            "name": "Bahamas",
            "code": "BS",
            "states": null
        },
        {
            "name": "Bhutan",
            "code": "BT",
            "states": null
        },
        {
            "name": "Bouvet Island",
            "code": "BV",
            "states": null
        },
        {
            "name": "Botswana",
            "code": "BW",
            "states": null
        },
        {
            "name": "Belarus",
            "code": "BY",
            "states": null
        },
        {
            "name": "Belize",
            "code": "BZ",
            "states": null
        },
        {
            "name": "Canada",
            "code": "CA",
            "states": [
                {
                    "code": "AB",
                    "name": "Alberta"
                },
                {
                    "code": "BC",
                    "name": "British Columbia"
                },
                {
                    "code": "MB",
                    "name": "Manitoba"
                },
                {
                    "code": "NB",
                    "name": "New Brunswick"
                },
                {
                    "code": "NL",
                    "name": "Newfoundland and Labrador"
                },
                {
                    "code": "NS",
                    "name": "Nova Scotia"
                },
                {
                    "code": "NT",
                    "name": "Northwest Territories"
                },
                {
                    "code": "NU",
                    "name": "Nunavut"
                },
                {
                    "code": "ON",
                    "name": "Ontario"
                },
                {
                    "code": "PE",
                    "name": "Prince Edward Island"
                },
                {
                    "code": "QC",
                    "name": "Quebec"
                },
                {
                    "code": "SK",
                    "name": "Saskatchewan"
                },
                {
                    "code": "YT",
                    "name": "Yukon"
                }
            ]
        },
        {
            "name": "Cocos (Keeling) Islands",
            "code": "CC",
            "states": null
        },
        {
            "name": "Congo, the Democratic Republic of the",
            "code": "CD",
            "states": null
        },
        {
            "name": "Central African Republic",
            "code": "CF",
            "states": null
        },
        {
            "name": "Congo",
            "code": "CG",
            "states": null
        },
        {
            "name": "Switzerland",
            "code": "CH",
            "states": null
        },
        {
            "name": "Cote D'Ivoire",
            "code": "CI",
            "states": null
        },
        {
            "name": "Cook Islands",
            "code": "CK",
            "states": null
        },
        {
            "name": "Chile",
            "code": "CL",
            "states": null
        },
        {
            "name": "Cameroon",
            "code": "CM",
            "states": null
        },
        {
            "name": "China",
            "code": "CN",
            "states": null
        },
        {
            "name": "Colombia",
            "code": "CO",
            "states": null
        },
        {
            "name": "Costa Rica",
            "code": "CR",
            "states": null
        },
        {
            "name": "Cuba, Republic of",
            "code": "CU",
            "states": null
        },
        {
            "name": "Cape Verde",
            "code": "CV",
            "states": null
        },
        {
            "name": "Curacao",
            "code": "CW",
            "states": null
        },
        {
            "name": "Christmas Island",
            "code": "CX",
            "states": null
        },
        {
            "name": "Cyprus",
            "code": "CY",
            "states": null
        },
        {
            "name": "Czech Republic",
            "code": "CZ",
            "states": null
        },
        {
            "name": "Germany",
            "code": "DE",
            "states": null
        },
        {
            "name": "Djibouti",
            "code": "DJ",
            "states": null
        },
        {
            "name": "Denmark",
            "code": "DK",
            "states": null
        },
        {
            "name": "Dominica",
            "code": "DM",
            "states": null
        },
        {
            "name": "Dominican Republic",
            "code": "DO",
            "states": null
        },
        {
            "name": "Algeria",
            "code": "DZ",
            "states": null
        },
        {
            "name": "Ecuador",
            "code": "EC",
            "states": null
        },
        {
            "name": "Estonia",
            "code": "EE",
            "states": null
        },
        {
            "name": "Egypt",
            "code": "EG",
            "states": null
        },
        {
            "name": "Western Sahara",
            "code": "EH",
            "states": null
        },
        {
            "name": "Eritrea",
            "code": "ER",
            "states": null
        },
        {
            "name": "Spain",
            "code": "ES",
            "states": null
        },
        {
            "name": "Ethiopia",
            "code": "ET",
            "states": null
        },
        {
            "name": "Finland",
            "code": "FI",
            "states": null
        },
        {
            "name": "Fiji",
            "code": "FJ",
            "states": null
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "code": "FK",
            "states": null
        },
        {
            "name": "Micronesia, Federated States of",
            "code": "FM",
            "states": null
        },
        {
            "name": "Faroe Islands",
            "code": "FO",
            "states": null
        },
        {
            "name": "France",
            "code": "FR",
            "states": null
        },
        {
            "name": "Gabon",
            "code": "GA",
            "states": null
        },
        {
            "name": "United Kingdom",
            "code": "GB",
            "states": null
        },
        {
            "name": "Grenada",
            "code": "GD",
            "states": null
        },
        {
            "name": "Georgia",
            "code": "GE",
            "states": null
        },
        {
            "name": "French Guiana",
            "code": "GF",
            "states": null
        },
        {
            "name": "Guernsey",
            "code": "GG",
            "states": null
        },
        {
            "name": "Ghana",
            "code": "GH",
            "states": null
        },
        {
            "name": "Gibraltar",
            "code": "GI",
            "states": null
        },
        {
            "name": "Greenland",
            "code": "GL",
            "states": null
        },
        {
            "name": "Gambia",
            "code": "GM",
            "states": null
        },
        {
            "name": "Guinea",
            "code": "GN",
            "states": null
        },
        {
            "name": "Guadeloupe",
            "code": "GP",
            "states": null
        },
        {
            "name": "Equatorial Guinea",
            "code": "GQ",
            "states": null
        },
        {
            "name": "Greece",
            "code": "GR",
            "states": null
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "code": "GS",
            "states": null
        },
        {
            "name": "Guatemala",
            "code": "GT",
            "states": null
        },
        {
            "name": "Guam",
            "code": "GU",
            "states": null
        },
        {
            "name": "Guinea-Bissau",
            "code": "GW",
            "states": null
        },
        {
            "name": "Guyana",
            "code": "GY",
            "states": null
        },
        {
            "name": "Hong Kong",
            "code": "HK",
            "states": null
        },
        {
            "name": "Heard Island and Mcdonald Islands",
            "code": "HM",
            "states": null
        },
        {
            "name": "Honduras",
            "code": "HN",
            "states": null
        },
        {
            "name": "Croatia",
            "code": "HR",
            "states": null
        },
        {
            "name": "Haiti",
            "code": "HT",
            "states": null
        },
        {
            "name": "Hungary",
            "code": "HU",
            "states": null
        },
        {
            "name": "Indonesia",
            "code": "ID",
            "states": null
        },
        {
            "name": "Ireland",
            "code": "IE",
            "states": null
        },
        {
            "name": "Israel",
            "code": "IL",
            "states": null
        },
        {
            "name": "Isle of Man",
            "code": "IM",
            "states": null
        },
        {
            "name": "India",
            "code": "IN",
            "states": null
        },
        {
            "name": "British Indian Ocean Territory",
            "code": "IO",
            "states": null
        },
        {
            "name": "Iraq",
            "code": "IQ",
            "states": null
        },
        {
            "name": "Iran, Islamic Republic of",
            "code": "IR",
            "states": null
        },
        {
            "name": "Iceland",
            "code": "IS",
            "states": null
        },
        {
            "name": "Italy",
            "code": "IT",
            "states": null
        },
        {
            "name": "Jersey",
            "code": "JE",
            "states": null
        },
        {
            "name": "Jamaica",
            "code": "JM",
            "states": null
        },
        {
            "name": "Jordan",
            "code": "JO",
            "states": null
        },
        {
            "name": "Japan",
            "code": "JP",
            "states": [
                {
                    "code": "01",
                    "name": "Hokkaido"
                },
                {
                    "code": "02",
                    "name": "Aomori"
                },
                {
                    "code": "03",
                    "name": "Iwate"
                },
                {
                    "code": "04",
                    "name": "Miyagi"
                },
                {
                    "code": "05",
                    "name": "Akita"
                },
                {
                    "code": "06",
                    "name": "Yamagata"
                },
                {
                    "code": "07",
                    "name": "Fukushima"
                },
                {
                    "code": "08",
                    "name": "Ibaraki"
                },
                {
                    "code": "09",
                    "name": "Tochigi"
                },
                {
                    "code": "10",
                    "name": "Gunma"
                },
                {
                    "code": "11",
                    "name": "Saitama"
                },
                {
                    "code": "12",
                    "name": "Chiba"
                },
                {
                    "code": "13",
                    "name": "Tokyo"
                },
                {
                    "code": "14",
                    "name": "Kanagawa"
                },
                {
                    "code": "15",
                    "name": "Niigata"
                },
                {
                    "code": "16",
                    "name": "Toyama"
                },
                {
                    "code": "17",
                    "name": "Ishikawa"
                },
                {
                    "code": "18",
                    "name": "Fukui"
                },
                {
                    "code": "19",
                    "name": "Yamanashi"
                },
                {
                    "code": "20",
                    "name": "Nagano"
                },
                {
                    "code": "21",
                    "name": "Gifu"
                },
                {
                    "code": "22",
                    "name": "Shizuoka"
                },
                {
                    "code": "23",
                    "name": "Aichi"
                },
                {
                    "code": "24",
                    "name": "Mie"
                },
                {
                    "code": "25",
                    "name": "Shiga"
                },
                {
                    "code": "26",
                    "name": "Kyoto"
                },
                {
                    "code": "27",
                    "name": "Osaka"
                },
                {
                    "code": "28",
                    "name": "Hyogo"
                },
                {
                    "code": "29",
                    "name": "Nara"
                },
                {
                    "code": "30",
                    "name": "Wakayama"
                },
                {
                    "code": "31",
                    "name": "Tottori"
                },
                {
                    "code": "32",
                    "name": "Shimane"
                },
                {
                    "code": "33",
                    "name": "Okayama"
                },
                {
                    "code": "34",
                    "name": "Hiroshima"
                },
                {
                    "code": "35",
                    "name": "Yamaguchi"
                },
                {
                    "code": "36",
                    "name": "Tokushima"
                },
                {
                    "code": "37",
                    "name": "Kagawa"
                },
                {
                    "code": "38",
                    "name": "Ehime"
                },
                {
                    "code": "39",
                    "name": "Kochi"
                },
                {
                    "code": "40",
                    "name": "Fukuoka"
                },
                {
                    "code": "41",
                    "name": "Saga"
                },
                {
                    "code": "42",
                    "name": "Nagasaki"
                },
                {
                    "code": "43",
                    "name": "Kumamoto"
                },
                {
                    "code": "44",
                    "name": "Oita"
                },
                {
                    "code": "45",
                    "name": "Miyazaki"
                },
                {
                    "code": "46",
                    "name": "Kagoshima"
                },
                {
                    "code": "47",
                    "name": "Okinawa"
                }
            ]
        },
        {
            "name": "Kenya",
            "code": "KE",
            "states": null
        },
        {
            "name": "Kyrgyzstan",
            "code": "KG",
            "states": null
        },
        {
            "name": "Cambodia",
            "code": "KH",
            "states": null
        },
        {
            "name": "Kiribati",
            "code": "KI",
            "states": null
        },
        {
            "name": "Comoros",
            "code": "KM",
            "states": null
        },
        {
            "name": "Saint Kitts and Nevis",
            "code": "KN",
            "states": null
        },
        {
            "name": "Korea, Democratic People's Republic of",
            "code": "KP",
            "states": null
        },
        {
            "name": "Korea, Republic of",
            "code": "KR",
            "states": null
        },
        {
            "name": "Kuwait",
            "code": "KW",
            "states": null
        },
        {
            "name": "Cayman Islands",
            "code": "KY",
            "states": null
        },
        {
            "name": "Kazakhstan",
            "code": "KZ",
            "states": null
        },
        {
            "name": "Lao People's Democratic Republic",
            "code": "LA",
            "states": null
        },
        {
            "name": "Lebanon",
            "code": "LB",
            "states": null
        },
        {
            "name": "Saint Lucia",
            "code": "LC",
            "states": null
        },
        {
            "name": "Liechtenstein",
            "code": "LI",
            "states": null
        },
        {
            "name": "Sri Lanka",
            "code": "LK",
            "states": null
        },
        {
            "name": "Liberia",
            "code": "LR",
            "states": null
        },
        {
            "name": "Lesotho",
            "code": "LS",
            "states": null
        },
        {
            "name": "Lithuania",
            "code": "LT",
            "states": null
        },
        {
            "name": "Luxembourg",
            "code": "LU",
            "states": null
        },
        {
            "name": "Latvia",
            "code": "LV",
            "states": null
        },
        {
            "name": "Libyan Arab Jamahiriya",
            "code": "LY",
            "states": null
        },
        {
            "name": "Morocco",
            "code": "MA",
            "states": null
        },
        {
            "name": "Monaco",
            "code": "MC",
            "states": null
        },
        {
            "name": "Moldova, Republic of",
            "code": "MD",
            "states": null
        },
        {
            "name": "Montenegro",
            "code": "ME",
            "states": null
        },
        {
            "name": "Sint Maarten",
            "code": "MF",
            "states": null
        },
        {
            "name": "Madagascar",
            "code": "MG",
            "states": null
        },
        {
            "name": "Marshall Islands",
            "code": "MH",
            "states": null
        },
        {
            "name": "North Macedonia, Republic of",
            "code": "MK",
            "states": null
        },
        {
            "name": "Mali",
            "code": "ML",
            "states": null
        },
        {
            "name": "Myanmar",
            "code": "MM",
            "states": null
        },
        {
            "name": "Mongolia",
            "code": "MN",
            "states": null
        },
        {
            "name": "Macao",
            "code": "MO",
            "states": null
        },
        {
            "name": "Northern Mariana Islands",
            "code": "MP",
            "states": null
        },
        {
            "name": "Martinique",
            "code": "MQ",
            "states": null
        },
        {
            "name": "Mauritania",
            "code": "MR",
            "states": null
        },
        {
            "name": "Montserrat",
            "code": "MS",
            "states": null
        },
        {
            "name": "Malta",
            "code": "MT",
            "states": null
        },
        {
            "name": "Mauritius",
            "code": "MU",
            "states": null
        },
        {
            "name": "Maldives",
            "code": "MV",
            "states": null
        },
        {
            "name": "Malawi",
            "code": "MW",
            "states": null
        },
        {
            "name": "Mexico",
            "code": "MX",
            "states": null
        },
        {
            "name": "Malaysia",
            "code": "MY",
            "states": [
                {
                    "code": "JHR",
                    "name": "Johor"
                },
                {
                    "code": "KDH",
                    "name": "Kedah"
                },
                {
                    "code": "KTN",
                    "name": "Kelantan"
                },
                {
                    "code": "KUL",
                    "name": "Kuala Lumpur"
                },
                {
                    "code": "LBN",
                    "name": "Labuan"
                },
                {
                    "code": "NSN",
                    "name": "Negeri Sembilan"
                },
                {
                    "code": "PHG",
                    "name": "Pahang"
                },
                {
                    "code": "PNG",
                    "name": "Penang"
                },
                {
                    "code": "PRK",
                    "name": "Perak"
                },
                {
                    "code": "PLS",
                    "name": "Perlis"
                },
                {
                    "code": "PJY",
                    "name": "Putrajaya"
                },
                {
                    "code": "SBH",
                    "name": "Sabah"
                },
                {
                    "code": "SWK",
                    "name": "Sarawak"
                },
                {
                    "code": "SGR",
                    "name": "Selangor"
                },
                {
                    "code": "TRG",
                    "name": "Terengganu"
                }
            ]
        },
        {
            "name": "Mozambique",
            "code": "MZ",
            "states": null
        },
        {
            "name": "Namibia",
            "code": "NA",
            "states": null
        },
        {
            "name": "New Caledonia",
            "code": "NC",
            "states": null
        },
        {
            "name": "Niger",
            "code": "NE",
            "states": null
        },
        {
            "name": "Norfolk Island",
            "code": "NF",
            "states": null
        },
        {
            "name": "Nigeria",
            "code": "NG",
            "states": null
        },
        {
            "name": "Nicaragua",
            "code": "NI",
            "states": null
        },
        {
            "name": "Netherlands",
            "code": "NL",
            "states": null
        },
        {
            "name": "Norway",
            "code": "NO",
            "states": null
        },
        {
            "name": "Nepal",
            "code": "NP",
            "states": null
        },
        {
            "name": "Nauru",
            "code": "NR",
            "states": null
        },
        {
            "name": "Niue",
            "code": "NU",
            "states": null
        },
        {
            "name": "New Zealand",
            "code": "NZ",
            "states": null
        },
        {
            "name": "Oman",
            "code": "OM",
            "states": null
        },
        {
            "name": "Panama",
            "code": "PA",
            "states": null
        },
        {
            "name": "Peru",
            "code": "PE",
            "states": null
        },
        {
            "name": "French Polynesia",
            "code": "PF",
            "states": null
        },
        {
            "name": "Papua New Guinea",
            "code": "PG",
            "states": null
        },
        {
            "name": "Philippines",
            "code": "PH",
            "states": [
                {
                    "code": "PH-ABR",
                    "name": "Abra"
                },
                {
                    "code": "PH-AGN",
                    "name": "Agusan del Norte"
                },
                {
                    "code": "PH-AGS",
                    "name": "Agusan del Sur"
                },
                {
                    "code": "PH-AKL",
                    "name": "Aklan"
                },
                {
                    "code": "PH-ALB",
                    "name": "Albay"
                },
                {
                    "code": "PH-ANT",
                    "name": "Antique"
                },
                {
                    "code": "PH-APA",
                    "name": "Apayao"
                },
                {
                    "code": "PH-AUR",
                    "name": "Aurora"
                },
                {
                    "code": "PH-BAS",
                    "name": "Basilan"
                },
                {
                    "code": "PH-BAN",
                    "name": "Bataan"
                },
                {
                    "code": "PH-BTN",
                    "name": "Batanes"
                },
                {
                    "code": "PH-BTG",
                    "name": "Batangas"
                },
                {
                    "code": "PH-BEN",
                    "name": "Benguet"
                },
                {
                    "code": "PH-BIL",
                    "name": "Biliran"
                },
                {
                    "code": "PH-BOH",
                    "name": "Bohol"
                },
                {
                    "code": "PH-BUK",
                    "name": "Bukidnon"
                },
                {
                    "code": "PH-BUL",
                    "name": "Bulacan"
                },
                {
                    "code": "PH-CAG",
                    "name": "Cagayan"
                },
                {
                    "code": "PH-CAN",
                    "name": "Camarines Norte"
                },
                {
                    "code": "PH-CAS",
                    "name": "Camarines Sur"
                },
                {
                    "code": "PH-CAM",
                    "name": "Camiguin"
                },
                {
                    "code": "PH-CAP",
                    "name": "Capiz"
                },
                {
                    "code": "PH-CAT",
                    "name": "Catanduanes"
                },
                {
                    "code": "PH-CAV",
                    "name": "Cavite"
                },
                {
                    "code": "PH-CEB",
                    "name": "Cebu"
                },
                {
                    "code": "PH-NCO",
                    "name": "Cotabato"
                },
                {
                    "code": "PH-DVO",
                    "name": "Davao Occidental"
                },
                {
                    "code": "PH-DAO",
                    "name": "Davao Oriental"
                },
                {
                    "code": "PH-COM",
                    "name": "Davao de Oro"
                },
                {
                    "code": "PH-AUR",
                    "name": "Davao del Norte"
                },
                {
                    "code": "PH-DAS",
                    "name": "Davao del Sur"
                },
                {
                    "code": "PH-DIN",
                    "name": "Dinagat Islands"
                },
                {
                    "code": "PH-EAS",
                    "name": "Eastern Samar"
                },
                {
                    "code": "PH-GUI",
                    "name": "Guimaras"
                },
                {
                    "code": "PH-IFU",
                    "name": "Ifugao"
                },
                {
                    "code": "PH-ILN",
                    "name": "Ilocos Norte"
                },
                {
                    "code": "PH-ILS",
                    "name": "Ilocos Sur"
                },
                {
                    "code": "PH-ILI",
                    "name": "Iloilo"
                },
                {
                    "code": "PH-ISA",
                    "name": "Isabela"
                },
                {
                    "code": "PH-KAL",
                    "name": "Kalinga"
                },
                {
                    "code": "PH-LUN",
                    "name": "La Union"
                },
                {
                    "code": "PH-LAG",
                    "name": "Laguna"
                },
                {
                    "code": "PH-LAN",
                    "name": "Lanao del Norte"
                },
                {
                    "code": "PH-LAS",
                    "name": "Lanao del Sur"
                },
                {
                    "code": "PH-LEY",
                    "name": "Leyte"
                },
                {
                    "code": "PH-MAG",
                    "name": "Maguindanao"
                },
                {
                    "code": "PH-MAD",
                    "name": "Marinduque"
                },
                {
                    "code": "PH-MAS",
                    "name": "Masbate"
                },
                {
                    "code": "PH-00",
                    "name": "Metro Manila"
                },
                {
                    "code": "PH-MSC",
                    "name": "Misamis Occidental"
                },
                {
                    "code": "PH-MSR",
                    "name": "Misamis Oriental"
                },
                {
                    "code": "PH-MOU",
                    "name": "Mountain Province"
                },
                {
                    "code": "PH-NEC",
                    "name": "Negros Occidental"
                },
                {
                    "code": "PH-NER",
                    "name": "Negros Oriental"
                },
                {
                    "code": "PH-NSA",
                    "name": "Northern Samar"
                },
                {
                    "code": "PH-NUE",
                    "name": "Nueva Ecija"
                },
                {
                    "code": "PH-NUV",
                    "name": "Nueva Vizcaya"
                },
                {
                    "code": "PH-MDC",
                    "name": "Occidental Mindoro"
                },
                {
                    "code": "PH-MDR",
                    "name": "Oriental Mindoro"
                },
                {
                    "code": "PH-PLW",
                    "name": "Palawan"
                },
                {
                    "code": "PH-PAM",
                    "name": "Pampanga"
                },
                {
                    "code": "PH-PAN",
                    "name": "Pangasinan"
                },
                {
                    "code": "PH-QUE",
                    "name": "Quezon"
                },
                {
                    "code": "PH-QUI",
                    "name": "Quirino"
                },
                {
                    "code": "PH-RIZ",
                    "name": "Rizal"
                },
                {
                    "code": "PH-ROM",
                    "name": "Romblon"
                },
                {
                    "code": "PH-WSA",
                    "name": "Samar"
                },
                {
                    "code": "PH-SAR",
                    "name": "Sarangani"
                },
                {
                    "code": "PH-SIG",
                    "name": "Siquijor"
                },
                {
                    "code": "PH-SOR",
                    "name": "Sorsogon"
                },
                {
                    "code": "PH-SCO",
                    "name": "South Cotabato"
                },
                {
                    "code": "PH-SLE",
                    "name": "Southern Leyte"
                },
                {
                    "code": "PH-SUK",
                    "name": "Sultan Kudarat"
                },
                {
                    "code": "PH-SLU",
                    "name": "Sulu"
                },
                {
                    "code": "PH-SUN",
                    "name": "Surigao del Norte"
                },
                {
                    "code": "PH-SUR",
                    "name": "Surigao del Sur"
                },
                {
                    "code": "PH-TAR",
                    "name": "Tarlac"
                },
                {
                    "code": "PH-TAW",
                    "name": "Tawi-Tawi"
                },
                {
                    "code": "PH-ZMB",
                    "name": "Zambales"
                },
                {
                    "code": "PH-ZSI",
                    "name": "Zamboanga Sibugay"
                },
                {
                    "code": "PH-ZAN",
                    "name": "Zamboanga del Norte"
                },
                {
                    "code": "PH-ZAS",
                    "name": "Zamboanga del Sur"
                }
            ]
        },
        {
            "name": "Pakistan",
            "code": "PK",
            "states": null
        },
        {
            "name": "Poland",
            "code": "PL",
            "states": null
        },
        {
            "name": "Saint Pierre and Miquelon",
            "code": "PM",
            "states": null
        },
        {
            "name": "Pitcairn",
            "code": "PN",
            "states": null
        },
        {
            "name": "Puerto Rico",
            "code": "PR",
            "states": null
        },
        {
            "name": "Palestinian Territory, Occupied",
            "code": "PS",
            "states": null
        },
        {
            "name": "Portugal",
            "code": "PT",
            "states": null
        },
        {
            "name": "Palau",
            "code": "PW",
            "states": null
        },
        {
            "name": "Paraguay",
            "code": "PY",
            "states": null
        },
        {
            "name": "Qatar",
            "code": "QA",
            "states": null
        },
        {
            "name": "Reunion",
            "code": "RE",
            "states": null
        },
        {
            "name": "Romania",
            "code": "RO",
            "states": null
        },
        {
            "name": "Serbia",
            "code": "RS",
            "states": null
        },
        {
            "name": "Russian Federation",
            "code": "RU",
            "states": [
                {
                    "code": "ALT",
                    "name": "Altai Krai"
                },
                {
                    "code": "AL",
                    "name": "Altai Republic"
                },
                {
                    "code": "AMU",
                    "name": "Amur Oblast"
                },
                {
                    "code": "ARK",
                    "name": "Arkhangelsk Oblast"
                },
                {
                    "code": "AST",
                    "name": "Astrakhan Oblast"
                },
                {
                    "code": "BEL",
                    "name": "Belgorod Oblast"
                },
                {
                    "code": "BRY",
                    "name": "Bryansk Oblast"
                },
                {
                    "code": "CE",
                    "name": "Chechen Republic"
                },
                {
                    "code": "CHE",
                    "name": "Chelyabinsk Oblast"
                },
                {
                    "code": "CHU",
                    "name": "Chukotka Autonomous Okrug"
                },
                {
                    "code": "CU",
                    "name": "Chuvash Republic"
                },
                {
                    "code": "IRK",
                    "name": "Irkutsk Oblast"
                },
                {
                    "code": "IVA",
                    "name": "Ivanovo Oblast"
                },
                {
                    "code": "YEV",
                    "name": "Jewish Autonomous Oblast"
                },
                {
                    "code": "KB",
                    "name": "Kabardino-Balkarian Republic"
                },
                {
                    "code": "KGD",
                    "name": "Kaliningrad Oblast"
                },
                {
                    "code": "KLU",
                    "name": "Kaluga Oblast"
                },
                {
                    "code": "KAM",
                    "name": "Kamchatka Krai"
                },
                {
                    "code": "KC",
                    "name": "Karachay–Cherkess Republic"
                },
                {
                    "code": "KEM",
                    "name": "Kemerovo Oblast"
                },
                {
                    "code": "KHA",
                    "name": "Khabarovsk Krai"
                },
                {
                    "code": "KHM",
                    "name": "Khanty-Mansi Autonomous Okrug"
                },
                {
                    "code": "KIR",
                    "name": "Kirov Oblast"
                },
                {
                    "code": "KO",
                    "name": "Komi Republic"
                },
                {
                    "code": "KOS",
                    "name": "Kostroma Oblast"
                },
                {
                    "code": "KDA",
                    "name": "Krasnodar Krai"
                },
                {
                    "code": "KYA",
                    "name": "Krasnoyarsk Krai"
                },
                {
                    "code": "KGN",
                    "name": "Kurgan Oblast"
                },
                {
                    "code": "LEN",
                    "name": "Leningrad Oblast"
                },
                {
                    "code": "LIP",
                    "name": "Lipetsk Oblast"
                },
                {
                    "code": "MAG",
                    "name": "Magadan Oblast"
                },
                {
                    "code": "ME",
                    "name": "Mari El Republic"
                },
                {
                    "code": "MOW",
                    "name": "Moscow"
                },
                {
                    "code": "MOS",
                    "name": "Moscow Oblast"
                },
                {
                    "code": "MUR",
                    "name": "Murmansk Oblast"
                },
                {
                    "code": "NIZ",
                    "name": "Nizhny Novgorod Oblast"
                },
                {
                    "code": "NGR",
                    "name": "Novgorod Oblast"
                },
                {
                    "code": "NVS",
                    "name": "Novosibirsk Oblast"
                },
                {
                    "code": "OMS",
                    "name": "Omsk Oblast"
                },
                {
                    "code": "ORE",
                    "name": "Orenburg Oblast"
                },
                {
                    "code": "ORL",
                    "name": "Oryol Oblast"
                },
                {
                    "code": "PNZ",
                    "name": "Penza Oblast"
                },
                {
                    "code": "PER",
                    "name": "Perm Krai"
                },
                {
                    "code": "PRI",
                    "name": "Primorsky Krai"
                },
                {
                    "code": "PSK",
                    "name": "Pskov Oblast"
                },
                {
                    "code": "AD",
                    "name": "Republic of Adygeya"
                },
                {
                    "code": "BA",
                    "name": "Republic of Bashkortostan"
                },
                {
                    "code": "BU",
                    "name": "Republic of Buryatia"
                },
                {
                    "code": "DA",
                    "name": "Republic of Dagestan"
                },
                {
                    "code": "IN",
                    "name": "Republic of Ingushetia"
                },
                {
                    "code": "KL",
                    "name": "Republic of Kalmykia"
                },
                {
                    "code": "KR",
                    "name": "Republic of Karelia"
                },
                {
                    "code": "KK",
                    "name": "Republic of Khakassia"
                },
                {
                    "code": "MO",
                    "name": "Republic of Mordovia"
                },
                {
                    "code": "SE",
                    "name": "Republic of North Ossetia–Alania"
                },
                {
                    "code": "TA",
                    "name": "Republic of Tatarstan"
                },
                {
                    "code": "ROS",
                    "name": "Rostov Oblast"
                },
                {
                    "code": "RYA",
                    "name": "Ryazan Oblast"
                },
                {
                    "code": "SPE",
                    "name": "Saint Petersburg"
                },
                {
                    "code": "SA",
                    "name": "Sakha Republic (Yakutia)"
                },
                {
                    "code": "SAK",
                    "name": "Sakhalin Oblast"
                },
                {
                    "code": "SAM",
                    "name": "Samara Oblast"
                },
                {
                    "code": "SAR",
                    "name": "Saratov Oblast"
                },
                {
                    "code": "SMO",
                    "name": "Smolensk Oblast"
                },
                {
                    "code": "STA",
                    "name": "Stavropol Krai"
                },
                {
                    "code": "SVE",
                    "name": "Sverdlovsk Oblast"
                },
                {
                    "code": "TAM",
                    "name": "Tambov Oblast"
                },
                {
                    "code": "TOM",
                    "name": "Tomsk Oblast"
                },
                {
                    "code": "TUL",
                    "name": "Tula Oblast"
                },
                {
                    "code": "TVE",
                    "name": "Tver Oblast"
                },
                {
                    "code": "TYU",
                    "name": "Tyumen Oblast"
                },
                {
                    "code": "TY",
                    "name": "Tyva Republic"
                },
                {
                    "code": "UD",
                    "name": "Udmurtia"
                },
                {
                    "code": "ULY",
                    "name": "Ulyanovsk Oblast"
                },
                {
                    "code": "VLA",
                    "name": "Vladimir Oblast"
                },
                {
                    "code": "VGG",
                    "name": "Volgograd Oblast"
                },
                {
                    "code": "VLG",
                    "name": "Vologda Oblast"
                },
                {
                    "code": "VOR",
                    "name": "Voronezh Oblast"
                },
                {
                    "code": "YAN",
                    "name": "Yamalo-Nenets Autonomous Okrug"
                },
                {
                    "code": "YAR",
                    "name": "Yaroslavl Oblast"
                },
                {
                    "code": "ZAB",
                    "name": "Zabaykalsky Krai"
                },
            ]
        },
        {
            "name": "Rwanda",
            "code": "RW",
            "states": null
        },
        {
            "name": "Saudi Arabia",
            "code": "SA",
            "states": null
        },
        {
            "name": "Solomon Islands",
            "code": "SB",
            "states": null
        },
        {
            "name": "Seychelles",
            "code": "SC",
            "states": null
        },
        {
            "name": "Sudan",
            "code": "SD",
            "states": null
        },
        {
            "name": "Sweden",
            "code": "SE",
            "states": null
        },
        {
            "name": "Singapore",
            "code": "SG",
            "states": null
        },
        {
            "name": "Saint Helena",
            "code": "SH",
            "states": null
        },
        {
            "name": "Slovenia",
            "code": "SI",
            "states": null
        },
        {
            "name": "Svalbard and Jan Mayen",
            "code": "SJ",
            "states": null
        },
        {
            "name": "Slovakia",
            "code": "SK",
            "states": null
        },
        {
            "name": "Sierra Leone",
            "code": "SL",
            "states": null
        },
        {
            "name": "San Marino",
            "code": "SM",
            "states": null
        },
        {
            "name": "Senegal",
            "code": "SN",
            "states": null
        },
        {
            "name": "Somalia",
            "code": "SO",
            "states": null
        },
        {
            "name": "Suriname",
            "code": "SR",
            "states": null
        },
        {
            "name": "Sao Tome and Principe",
            "code": "ST",
            "states": null
        },
        {
            "name": "El Salvador",
            "code": "SV",
            "states": null
        },
        {
            "name": "Syrian Arab Republic",
            "code": "SY",
            "states": null
        },
        {
            "name": "Eswatini",
            "code": "SZ",
            "states": null
        },
        {
            "name": "Turks and Caicos Islands",
            "code": "TC",
            "states": null
        },
        {
            "name": "Chad",
            "code": "TD",
            "states": null
        },
        {
            "name": "French Southern Territories",
            "code": "TF",
            "states": null
        },
        {
            "name": "Togo",
            "code": "TG",
            "states": null
        },
        {
            "name": "Thailand",
            "code": "TH",
            "states": null
        },
        {
            "name": "Tajikistan",
            "code": "TJ",
            "states": null
        },
        {
            "name": "Tokelau",
            "code": "TK",
            "states": null
        },
        {
            "name": "Timor-Leste",
            "code": "TL",
            "states": null
        },
        {
            "name": "Turkmenistan",
            "code": "TM",
            "states": null
        },
        {
            "name": "Tunisia",
            "code": "TN",
            "states": null
        },
        {
            "name": "Tonga",
            "code": "TO",
            "states": null
        },
        {
            "name": "Turkey",
            "code": "TR",
            "states": null
        },
        {
            "name": "Trinidad and Tobago",
            "code": "TT",
            "states": null
        },
        {
            "name": "Tuvalu",
            "code": "TV",
            "states": null
        },
        {
            "name": "Taiwan",
            "code": "TW",
            "states": null
        },
        {
            "name": "Tanzania",
            "code": "TZ",
            "states": null
        },
        {
            "name": "Ukraine",
            "code": "UA",
            "states": null
        },
        {
            "name": "Uganda",
            "code": "UG",
            "states": null
        },
        {
            "name": "United States Minor Outlying Islands",
            "code": "UM",
            "states": null
        },
        {
            "name": "United States",
            "code": "US",
            "states": [
                {
                    "code": "AA",
                    "name": "Armed Forces Americas (except Canada)"
                },
                {
                    "code": "AE",
                    "name": "Armed Forces"
                },
                {
                    "code": "AK",
                    "name": "Alaska"
                },
                {
                    "code": "AL",
                    "name": "Alabama"
                },
                {
                    "code": "AP",
                    "name": "Armed Forces Pacific"
                },
                {
                    "code": "AR",
                    "name": "Arkansas"
                },
                {
                    "code": "AS",
                    "name": "American Samoa"
                },
                {
                    "code": "AZ",
                    "name": "Arizona"
                },
                {
                    "code": "CA",
                    "name": "California"
                },
                {
                    "code": "CO",
                    "name": "Colorado"
                },
                {
                    "code": "CT",
                    "name": "Connecticut"
                },
                {
                    "code": "DC",
                    "name": "District of Columbia"
                },
                {
                    "code": "DE",
                    "name": "Delaware"
                },
                {
                    "code": "FL",
                    "name": "Florida"
                },
                {
                    "code": "FM",
                    "name": "Federated States of Micronesia"
                },
                {
                    "code": "GA",
                    "name": "Georgia"
                },
                {
                    "code": "GU",
                    "name": "Guam"
                },
                {
                    "code": "HI",
                    "name": "Hawaii"
                },
                {
                    "code": "IA",
                    "name": "Iowa"
                },
                {
                    "code": "ID",
                    "name": "Idaho"
                },
                {
                    "code": "IL",
                    "name": "Illinois"
                },
                {
                    "code": "IN",
                    "name": "Indiana"
                },
                {
                    "code": "KS",
                    "name": "Kansas"
                },
                {
                    "code": "KY",
                    "name": "Kentucky"
                },
                {
                    "code": "LA",
                    "name": "Louisiana"
                },
                {
                    "code": "MA",
                    "name": "Massachusetts"
                },
                {
                    "code": "MD",
                    "name": "Maryland"
                },
                {
                    "code": "ME",
                    "name": "Maine"
                },
                {
                    "code": "MH",
                    "name": "Marshall Islands"
                },
                {
                    "code": "MI",
                    "name": "Michigan"
                },
                {
                    "code": "MN",
                    "name": "Minnesota"
                },
                {
                    "code": "MO",
                    "name": "Missouri"
                },
                {
                    "code": "MP",
                    "name": "Northern Mariana Islands"
                },
                {
                    "code": "MS",
                    "name": "Mississippi"
                },
                {
                    "code": "MT",
                    "name": "Montana"
                },
                {
                    "code": "NC",
                    "name": "North Carolina"
                },
                {
                    "code": "ND",
                    "name": "North Dakota"
                },
                {
                    "code": "NE",
                    "name": "Nebraska"
                },
                {
                    "code": "NH",
                    "name": "New Hampshire"
                },
                {
                    "code": "NJ",
                    "name": "New Jersey"
                },
                {
                    "code": "NM",
                    "name": "New Mexico"
                },
                {
                    "code": "NV",
                    "name": "Nevada"
                },
                {
                    "code": "NY",
                    "name": "New York"
                },
                {
                    "code": "OH",
                    "name": "Ohio"
                },
                {
                    "code": "OK",
                    "name": "Oklahoma"
                },
                {
                    "code": "OR",
                    "name": "Oregon"
                },
                {
                    "code": "PA",
                    "name": "Pennsylvania"
                },
                {
                    "code": "PR",
                    "name": "Puerto Rico"
                },
                {
                    "code": "PW",
                    "name": "Palau"
                },
                {
                    "code": "RI",
                    "name": "Rhode Island"
                },
                {
                    "code": "SC",
                    "name": "South Carolina"
                },
                {
                    "code": "SD",
                    "name": "South Dakota"
                },
                {
                    "code": "TN",
                    "name": "Tennessee"
                },
                {
                    "code": "TX",
                    "name": "Texas"
                },
                {
                    "code": "UT",
                    "name": "Utah"
                },
                {
                    "code": "VA",
                    "name": "Virginia"
                },
                {
                    "code": "VI",
                    "name": "Virgin Islands"
                },
                {
                    "code": "VT",
                    "name": "Vermont"
                },
                {
                    "code": "WA",
                    "name": "Washington"
                },
                {
                    "code": "WI",
                    "name": "Wisconsin"
                },
                {
                    "code": "WV",
                    "name": "West Virginia"
                },
                {
                    "code": "WY",
                    "name": "Wyoming"
                }
            ]
        },
        {
            "name": "Uruguay",
            "code": "UY",
            "states": null
        },
        {
            "name": "Uzbekistan",
            "code": "UZ",
            "states": null
        },
        {
            "name": "Vatican City",
            "code": "VA",
            "states": null
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "code": "VC",
            "states": null
        },
        {
            "name": "Venezuela",
            "code": "VE",
            "states": null
        },
        {
            "name": "Virgin Islands, British",
            "code": "VG",
            "states": null
        },
        {
            "name": "Virgin Islands, U.S.",
            "code": "VI",
            "states": null
        },
        {
            "name": "Vietnam",
            "code": "VN",
            "states": null
        },
        {
            "name": "Vanuatu",
            "code": "VU",
            "states": null
        },
        {
            "name": "Wallis and Futuna",
            "code": "WF",
            "states": null
        },
        {
            "name": "Samoa",
            "code": "WS",
            "states": null
        },
        {
            "name": "Yemen",
            "code": "YE",
            "states": null
        },
        {
            "name": "Mayotte",
            "code": "YT",
            "states": null
        },
        {
            "name": "South Africa",
            "code": "ZA",
            "states": null
        },
        {
            "name": "Zambia",
            "code": "ZM",
            "states": null
        },
        {
            "name": "Zimbabwe",
            "code": "ZW",
            "states": null
        }
    ];

    data.forEach(country => {
        let optionElm = document.createElement('option');
        optionElm.textContent = country.name;
        optionElm.value = country.code;
        shipping_country.append(optionElm);
    });

    data.forEach(country => {
        let optionElm = document.createElement('option');
        optionElm.textContent = country.name;
        optionElm.value = country.code;
        billing_country.append(optionElm);
    });

    countryData = data;
}
getCountryAndStates();

shipping_country.addEventListener('change', (event) => {
    shipping_state_select.innerHTML = '<option disabled selected value="">State</option>';
    billing_state_select.innerHTML = '<option disabled selected value="">State</option>';

    shipping_state.value = "";
    billing_state.value = "";

    countryData.forEach(country => {
        if (country.code === event.target.value && country.states !== null) {
            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                shipping_state_select.appendChild(stateElm);
            });

            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                billing_state_select.appendChild(stateElm);
            })
        }
        return
    })
});

billing_country.addEventListener('change', (event) => {
    billing_state_select.innerHTML = '<option disabled selected value="">State</option>';
    billing_state.value = "";

    countryData.forEach(country => {
        if (country.code === event.target.value && country.states !== null) {
            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                billing_state_select.appendChild(stateElm);
            })
        }
        return
    })
});

shipping_state_select.addEventListener('change', event => {
    event.target.nextElementSibling.value = event.target.value;
});

billing_state_select.addEventListener('change', event => {
    event.target.nextElementSibling.value = event.target.value;
});

//profile save button listener
profile_save.addEventListener("click", function () {
    profileSave();
});

same_as_shipping.addEventListener("click", function () {
    countryData.forEach(country => {
        if (country.code === shipping_country.value && country.states !== null) {
            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                billing_state_select.appendChild(stateElm);
            })
        }
        return
    });

    if (same_as_shipping.checked) {
        billing_fullname.value = shipping_fullname.value;
        billing_address1.value = shipping_address1.value;
        billing_address2.value = shipping_address2.value;
        billing_country.value = shipping_country.value;
        billing_state.value = shipping_state.value;
        billing_city.value = shipping_city.value;
        billing_zip.value = shipping_zip.value;
        billing_fullname.disabled = true;
        billing_address1.disabled = true;
        billing_address2.disabled = true;
        billing_country.disabled = true;
        billing_state.disabled = true;
        billing_city.disabled = true;
        billing_zip.disabled = true;
    } else {
        billing_fullname.value = "";
        billing_address1.value = "";
        billing_address2.value = "";
        billing_country.value = "default";
        billing_state.value = "default";
        billing_city.value = "";
        billing_zip.value = "";
        billing_fullname.disabled = false;
        billing_address1.disabled = false;
        billing_address2.disabled = false;
        billing_country.disabled = false;
        billing_state.disabled = false;
        billing_city.disabled = false;
        billing_zip.disabled = false;
    }
});

function edit_profile() {
    storage.get({ edit_state_profile: '', profiles: [] }, function (result) {
        let edit_state_profile = result.edit_state_profile;

        let edit_profile = result.profiles.filter(profile => profile.id === edit_state_profile)[0];

        if (edit_state_profile) {
            countryData.forEach(country => {
                if (country.code === edit_profile.profile.shippingCountry && country.states !== null) {
                    country.states.forEach(state => {
                        let stateElm = document.createElement('option');
                        stateElm.textContent = state.name;
                        stateElm.value = state.code;
                        shipping_state_select.appendChild(stateElm);
                    })
                }

                if (country.code === edit_profile.profile.billingCountry && country.states !== null) {
                    country.states.forEach(state => {
                        let stateElm = document.createElement('option');
                        stateElm.textContent = state.name;
                        stateElm.value = state.code;
                        billing_state_select.appendChild(stateElm);
                    })
                }
            });

            profile_name.value = edit_profile.profile.profileName;
            profile_email.value = edit_profile.profile.email;
            profile_phone.value = edit_profile.profile.phone;
            shipping_fullname.value = edit_profile.profile.shippingFullName;
            shipping_address1.value = edit_profile.profile.shippingAddress1;
            shipping_address2.value = edit_profile.profile.shippingAddress2;
            shipping_city.value = edit_profile.profile.shippingCity;
            shipping_zip.value = edit_profile.profile.shippingZip;
            billing_fullname.value = edit_profile.profile.billingFullName;
            billing_address1.value = edit_profile.profile.billingAddress1;
            billing_address2.value = edit_profile.profile.billingAddress2;
            billing_city.value = edit_profile.profile.billingCity;
            billing_zip.value = edit_profile.profile.billingZip;
            card_holder.value = edit_profile.profile.cHolder;
            card_number.value = edit_profile.profile.cNumber;
            card_cvv.value = edit_profile.profile.cCvv;
            expiry_month.value = edit_profile.profile.cMonth;
            expiry_year.value = edit_profile.profile.cYear;

            setTimeout(() => {
                shipping_country.value = edit_profile.profile.shippingCountry;
                shipping_state.value = edit_profile.profile.shippingState;
                billing_country.value = edit_profile.profile.billingCountry;
                billing_state.value = edit_profile.profile.billingState;
            }, 500)
        }
    });
}
edit_profile();

function profileSave() {
    storage.get('edit_state_profile', function (result) {
        let edit_state_profile = result.edit_state_profile;

        storage.get({ profiles: [], duplicate_profile: {} }, (result) => {
            let profiles = result.profiles;
            let duplicate_item = result.duplicate_profile;

            const newProfile = {
                "id": edit_state_profile ? edit_state_profile : generateId(),
                "cc_last4": card_number.value ? card_number.value.slice(-4) : "0000",
                "profile": {
                    "profileName": profile_name.value ? profile_name.value : "Default Profile",
                    "email": profile_email.value,
                    "phone": profile_phone.value,
                    "shippingFullName": shipping_fullname.value,
                    "shippingAddress1": shipping_address1.value,
                    "shippingAddress2": shipping_address2.value,
                    "shippingCity": shipping_city.value,
                    "shippingCountry": shipping_country.value,
                    "shippingState": shipping_state.value,
                    "shippingZip": shipping_zip.value,
                    "billingFullName": billing_fullname.value,
                    "billingAddress1": billing_address1.value,
                    "billingAddress2": billing_address2.value,
                    "billingCity": billing_city.value,
                    "billingCountry": billing_country.value,
                    "billingState": billing_state.value,
                    "billingZip": billing_zip.value,
                    "cHolder": card_holder.value,
                    "cNumber": card_number.value ? card_number.value : "4242424242424242",
                    "cMonth": expiry_month.value,
                    "cYear": expiry_year.value,
                    "cCvv": card_cvv.value,
                }
            };

            let newProfiles = profiles.map(profile => {
                if (profile.id === edit_state_profile) {
                    return newProfile
                } else {
                    return profile
                }
            });

            if (!edit_state_profile) {
                newProfiles = [newProfile].concat(profiles);
            }

            //init data
            profile_name.value = "";
            profile_email.value = "";
            profile_phone.value = "";
            shipping_fullname.value = "";
            shipping_address1.value = "";
            shipping_address2.value = "";
            shipping_country.value = "default";
            shipping_state.value = "default";
            shipping_city.value = "";
            shipping_zip.value = "";
            billing_fullname.value = "";
            billing_address1.value = "";
            billing_address2.value = "";
            billing_country.value = "default";
            billing_state.value = "default";
            billing_city.value = "";
            billing_zip.value = "";
            card_holder.value = "";
            card_number.value = "";
            card_cvv.value = "";
            expiry_month.value = "";
            expiry_year.value = "";

            storage.set({ profiles: newProfiles }, (result) => {
                if (edit_state_profile) {
                    notificationDisplay("Profile has been updated!");
                    storage.set({ edit_state_profile: null });
                }else if(duplicate_item){
                    notificationDisplay("Profile has been duplicated!");
                    storage.set({ duplicate_profile: null });
                    profile_save.innerHTML = "Save"
                } else {
                    notificationDisplay("Profile has been created!");
                }
            })
        })
    });
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function notificationDisplay(msg) {
    let notification = document.getElementById("notification");
    notification.style.display = "block";

    let elem = document.getElementById("notification-loader");
    let msgElement = document.getElementById("notification-text");
    let width = 50;
    let id = setInterval(frame, 20);
    function frame() {
        if (width === 0) {
            clearInterval(id);
            notification.style.display = "none"
        } else {
            width--;
            elem.style.width = width + '%';
            msgElement.innerHTML = msg
        }
    }
}

function duplicate_profile() {
    storage.get({ duplicate_profile: '', profiles: [] }, function (result) {
        let duplicate_profile = result.duplicate_profile;

        let duplicate = result.profiles.filter(profile => profile.id === duplicate_profile)[0];

        if (duplicate_profile) {
            countryData.forEach(country => {
                if (country.code === duplicate.profile.shippingCountry && country.states !== null) {
                    country.states.forEach(state => {
                        let stateElm = document.createElement('option');
                        stateElm.textContent = state.name;
                        stateElm.value = state.code;
                        shipping_state_select.appendChild(stateElm);
                    })
                }

                if (country.code === duplicate.profile.billingCountry && country.states !== null) {
                    country.states.forEach(state => {
                        let stateElm = document.createElement('option');
                        stateElm.textContent = state.name;
                        stateElm.value = state.code;
                        billing_state_select.appendChild(stateElm);
                    })
                }
            });

            profile_name.value = duplicate.profile.profileName + " Copy";
            profile_email.value = duplicate.profile.email;
            profile_phone.value = duplicate.profile.phone;
            shipping_fullname.value = duplicate.profile.shippingFullName;
            shipping_address1.value = duplicate.profile.shippingAddress1;
            shipping_address2.value = duplicate.profile.shippingAddress2;
            shipping_country.value = duplicate.profile.shippingCountry;
            shipping_state.value = duplicate.profile.shippingState;
            shipping_city.value = duplicate.profile.shippingCity;
            shipping_zip.value = duplicate.profile.shippingZip;
            billing_fullname.value = duplicate.profile.billingFullName;
            billing_address1.value = duplicate.profile.billingAddress1;
            billing_address2.value = duplicate.profile.billingAddress2;
            billing_country.value = duplicate.profile.billingCountry;
            billing_state.value = duplicate.profile.billingState;
            billing_city.value = duplicate.profile.billingCity;
            billing_zip.value = duplicate.profile.billingZip;
            card_holder.value = duplicate.profile.cHolder;
            card_number.value = duplicate.profile.cNumber;
            card_cvv.value = duplicate.profile.cCvv;
            expiry_month.value = duplicate.profile.cMonth;
            expiry_year.value = duplicate.profile.cYear;

            profile_save.innerHTML = "Duplicate"
        }
    });
}
duplicate_profile();
