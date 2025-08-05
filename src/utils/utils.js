// Function to get Time
export function getHours(){
    const  hours = new Date()
    return hours.getHours()
}

// get time in 12 hours

export function getHoursInTwelve() {
    const date =  new Date()
    const actualHour = date.toLocaleString([], {
        hour: "2-digit",
        minute: '2-digit'
    })
return actualHour
}

// Function to greet
export function greet(currentTime) {
    if (currentTime  <= 23 && currentTime >= 20) return {title: 'Good Night', color: 'night'}
    
    if(currentTime <= 19 && currentTime >= 17 ) return {title: 'Good Evening', color: 'evening'}
    

    if(currentTime <= 16 && currentTime >= 12) return {title: 'Good Afternoon', color: 'afternoon'}
    

    return {title: 'Good Morning', color: 'morning'}
    
}

// Default Place
export const DEFAULT_PLACE = {
    name: "Bhimdatta N.P.",
    place_id: "bhimdatta-np-8469141",
    adm_area1: "Sudurpashchim Pradesh",
    adm_area2: "Kanchanpur",
    country: "Federal Democratic Republic of Nepal",
    lat: "29.0067N",
    lon: "80.16958E",
    timezone: "Asia/Kathmandu",
    type: "settlement"
}
