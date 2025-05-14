import axios from "axios";

export const fetchSkips = async () => {
    try {
        const response = await axios.get(
            "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        
        if (!Array.isArray(response.data)) {
            throw new Error("Invalid data format received from API");
        }
        
        return processSkipData(response.data);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error("API Error:", error.response.status, error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
        } else {
            // Something happened in setting up the request
            console.error("Request setup error:", error.message);
        }
        
        return [];
    }
};

const processSkipData = (apiData) => {
    return apiData.map((skip) => ({
        id: skip.id,
        size: skip.size,
        name: `${skip.size} Yard Skip`,
        price: skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100)),
        allowsHeavyWaste: skip.allows_heavy_waste,
        allowedOnRoad: skip.allowed_on_road,
        available: !skip.forbidden,
        dimensions: getDimensionsForSize(skip.size),
        capacity: `${skip.size} cubic yards`,
    }));
};

const getDimensionsForSize = (size) => {
    const dimensionsMap = {
        4: '1.8m x 1.3m x 0.9m',
        6: '2.6m x 1.5m x 1.2m',
        8: '3.7m x 1.8m x 1.2m',
        10: '3.7m x 1.8m x 1.5m',
        12: '4.0m x 1.8m x 1.7m',
        14: '4.2m x 1.8m x 1.8m',
        16: '4.5m x 2.0m x 2.0m',
        20: '6.0m x 2.3m x 2.4m',
        40: '6.0m x 2.3m x 2.4m',
    };
    return dimensionsMap[size] || 'Please inquire';
};