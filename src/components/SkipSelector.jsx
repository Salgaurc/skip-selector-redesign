import { useEffect, useState } from "react";
import { fetchSkips } from "../api/api.js";
import SkipCard from "./SkipCard.jsx";
import WarningBanner from "./WarningBanner.jsx";
import InfoBanner from "./InfoBanner.jsx";
import WasteTypeSelector from "./WasteTypeSelector.jsx";
import WastePercentageSelector from "./WastePercentageSelector.jsx";
import SelectedWasteDisplay from "./SelectedWasteDisplay.jsx";
import HeavyWasteVisual from "./HeavyWasteVisual.jsx"; // Assuming this is a component that visualizes heavy waste

const SkipSelector = () => {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedWaste, setSelectedWaste] = useState([]);
    const [heavyPercentage, setHeavyPercentage] = useState("No heavy waste");

    useEffect(() => {
        const loadSkips = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetchSkips();
                setSkips(response); // Note: Removed .data since our fetchSkips already processes the response
            } catch (err) {
                console.error("Error fetching skips:", err);
                setError("Failed to load skip options. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadSkips();
    }, []);

    if (loading) {
        return (
            <div className="skip-container flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl font-semibold mb-4">Select a Skip</h1>
                <div className="loading-spinner text-lg">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="skip-container flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl font-semibold mb-4">Select a Skip</h1>
                <div className="error-message text-lg text-red-600">{error}</div>
            </div>
        );
    }

    if (skips.length === 0) {
        return (
            <div className="skip-container flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl font-semibold mb-4">Select a Skip</h1>
                <div className="no-skips-message text-lg text-gray-600">No skips available at this time.</div>
            </div>
        );
    }

    const getFilteredSkips = (skips, heavyPercentage) => {
        return skips.filter((skip) => {
            if (!skip.available) return false;
            if (heavyPercentage !== "No heavy waste" && !skip.allowsHeavyWaste) return false;
            if (heavyPercentage === "Over 20%" && skip.size > 8) return false;
            return true;
        });
    };

    const filteredSkips = getFilteredSkips(skips, heavyPercentage);

    return (
        <div className="skip-container p-8 bg-gray-60 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Heavy Waste Types</h1>
            <WarningBanner />
            <WasteTypeSelector selectedWaste={selectedWaste} setSelectedWaste={setSelectedWaste} />
            <WastePercentageSelector heavyPercentage={heavyPercentage} setHeavyPercentage={setHeavyPercentage} />
            <HeavyWasteVisual percentageLabel={heavyPercentage} />
            <SelectedWasteDisplay selectedWaste={selectedWaste} />
            <InfoBanner />
            <div className="skip-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredSkips.map((skip) => (
                    <SkipCard key={skip.id} skip={skip} />
                ))}
            </div>
        </div>
    );
};

export default SkipSelector;